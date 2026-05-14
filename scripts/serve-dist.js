import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'dist');
const port = Number(process.env.PORT || 5180);

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

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url || '/', `http://localhost:${port}`).pathname);
  const requestedPath = path.normalize(path.join(root, urlPath));
  const safePath = requestedPath.startsWith(root) ? requestedPath : root;
  const filePath = existsSync(safePath) && statSync(safePath).isFile()
    ? safePath
    : path.join(root, 'index.html');
  const extension = path.extname(filePath).toLowerCase();
  response.writeHead(200, { 'Content-Type': contentTypes[extension] || 'application/octet-stream' });
  createReadStream(filePath).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview running at http://127.0.0.1:${port}/projects/discharge-tracker`);
});
