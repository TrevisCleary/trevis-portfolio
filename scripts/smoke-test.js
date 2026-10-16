import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..', 'dist');
const indexPath = path.join(root, 'index.html');

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4'
};

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/discharge-tracker',
  '/projects/snf-policy-system',
  '/projects/poc-weekly-compliance',
  '/blog',
  '/resume',
  '/contact'
];

const assets = [
  { path: '/favicon.ico', contentType: 'image/x-icon' },
  { path: '/Resume_Trevis_Cleary.pdf', contentType: 'application/pdf' },
  { path: '/images/corp-photo-trevis.png', contentType: 'image/png' },
  { path: '/images/discharge-tracker/current/02-home-review-queue.png', contentType: 'image/png' },
  { path: '/images/snf-policy-system/current/01-policy-registry.png', contentType: 'image/png' },
  { path: '/images/poc-weekly-compliance/flow-overview.svg', contentType: 'image/svg+xml' }
];

function resolvePublicPath(urlPath) {
  const requestedPath = path.normalize(path.join(root, urlPath));
  const relativePath = path.relative(root, requestedPath);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return null;
  }

  return requestedPath;
}

function serve(request, response) {
  const urlPath = decodeURIComponent(new URL(request.url || '/', 'http://127.0.0.1').pathname);
  const requestedPath = resolvePublicPath(urlPath);
  const extension = path.extname(urlPath).toLowerCase();

  if (!requestedPath) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  const filePath = existsSync(requestedPath) && statSync(requestedPath).isFile()
    ? requestedPath
    : extension
      ? null
      : indexPath;

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const fileExtension = path.extname(filePath).toLowerCase();
  response.writeHead(200, { 'Content-Type': contentTypes[fileExtension] || 'application/octet-stream' });
  createReadStream(filePath).pipe(response);
}

async function checkResponse(baseUrl, target, expectedContentType) {
  const response = await fetch(`${baseUrl}${target}`, {
    redirect: 'manual',
    headers: expectedContentType === 'text/html' ? { 'Sec-Fetch-Mode': 'navigate' } : {}
  });
  const contentType = response.headers.get('content-type') || '';

  if (!response.ok) {
    throw new Error(`${target} returned HTTP ${response.status}`);
  }

  const matchesIconType = expectedContentType === 'image/x-icon'
    && contentType.includes('image/vnd.microsoft.icon');
  if (!contentType.includes(expectedContentType) && !matchesIconType) {
    throw new Error(`${target} returned ${contentType || 'no content-type'}, expected ${expectedContentType}`);
  }
}

async function main() {
  if (process.env.SMOKE_BASE_URL) {
    const baseUrl = process.env.SMOKE_BASE_URL.replace(/\/$/, '');
    for (const route of routes) {
      await checkResponse(baseUrl, route, 'text/html');
    }
    for (const asset of assets) {
      await checkResponse(baseUrl, asset.path, asset.contentType);
    }
    const missing = await fetch(`${baseUrl}/images/missing-smoke-test.png`);
    if (missing.status !== 404) {
      throw new Error(`Missing asset returned HTTP ${missing.status}, expected 404`);
    }
    console.log(`Smoke tested ${routes.length} SPA routes, ${assets.length} static assets, and missing-asset handling at ${baseUrl}.`);
    return;
  }

  if (!existsSync(indexPath)) {
    throw new Error('dist/index.html does not exist. Run npm.cmd run build before smoke testing.');
  }

  const server = http.createServer(serve);

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    for (const route of routes) {
      await checkResponse(baseUrl, route, 'text/html');
    }

    for (const asset of assets) {
      await checkResponse(baseUrl, asset.path, asset.contentType);
    }

    console.log(`Smoke tested ${routes.length} SPA routes and ${assets.length} static assets.`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
