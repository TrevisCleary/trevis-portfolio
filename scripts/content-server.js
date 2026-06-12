import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const host = "127.0.0.1";
const port = Number.parseInt(process.env.PORTFOLIO_CONTENT_API_PORT || "4306", 10);

const files = {
  project: path.join(repoRoot, "src", "data", "projectIdeas.json"),
  blog: path.join(repoRoot, "src", "data", "blogPosts.json")
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, PATCH, OPTIONS",
    "access-control-allow-headers": "content-type"
  });
  response.end(`${JSON.stringify(payload)}\n`);
}

async function readJsonArray(filePath) {
  const raw = await readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`${path.relative(repoRoot, filePath)} must contain a JSON array.`);
  }
  return parsed;
}

async function writeJsonArray(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function readRequestJson(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  return raw ? JSON.parse(raw) : {};
}

function findContentItem(items, kind, id) {
  if (kind === "project") {
    return items.find((item) => item.sourceProjectId === id || item.slug === id || item.id === id);
  }

  return items.find(
    (item) =>
      item.sourceProjectId === id ||
      item.projectSlug === id ||
      item.slug === id ||
      item.id === id
  );
}

async function updatePublishState(kind, id, publish) {
  const filePath = files[kind];
  const items = await readJsonArray(filePath);
  const item = findContentItem(items, kind, id);

  if (!item) {
    return null;
  }

  const now = new Date().toISOString();
  item.publish = publish;
  item.updatedAt = now;

  if (publish) {
    item.publishedAt = item.publishedAt || now;
  } else {
    delete item.publishedAt;
  }

  await writeJsonArray(filePath, items);
  return item;
}

function parsePublishRoute(url) {
  const match = url.pathname.match(/^\/api\/(projects|blog)\/([^/]+)\/publish$/);
  if (!match) {
    return null;
  }

  return {
    kind: match[1] === "projects" ? "project" : "blog",
    id: decodeURIComponent(match[2])
  };
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  const url = new URL(request.url || "/", `http://${host}:${port}`);

  try {
    if (request.method === "GET" && url.pathname === "/api/health") {
      sendJson(response, 200, {
        ok: true,
        service: "trevis-portfolio-content-api",
        writes: ["src/data/projectIdeas.json", "src/data/blogPosts.json"]
      });
      return;
    }

    const route = parsePublishRoute(url);
    if (request.method === "PATCH" && route) {
      const body = await readRequestJson(request);
      if (typeof body.publish !== "boolean") {
        sendJson(response, 400, { ok: false, error: "Request body must include boolean publish." });
        return;
      }

      const item = await updatePublishState(route.kind, route.id, body.publish);
      if (!item) {
        sendJson(response, 404, { ok: false, error: `${route.kind} draft not found.` });
        return;
      }

      sendJson(response, 200, {
        ok: true,
        kind: route.kind,
        id: route.id,
        publish: item.publish,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt || null
      });
      return;
    }

    sendJson(response, 404, { ok: false, error: "Not found." });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: error.message });
  }
});

server.listen(port, host, () => {
  console.log(`trevis-portfolio content API listening at http://${host}:${port}`);
});
