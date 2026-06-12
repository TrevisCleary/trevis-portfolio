import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

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
  const relativePath = path.relative(root, requestedPath);
  const extension = path.extname(urlPath).toLowerCase();

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  const filePath = existsSync(requestedPath) && statSync(requestedPath).isFile()
    ? requestedPath
    : extension
      ? null
      : path.join(root, 'index.html');

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const fileExtension = path.extname(filePath).toLowerCase();
  response.writeHead(200, { 'Content-Type': contentTypes[fileExtension] || 'application/octet-stream' });
  createReadStream(filePath).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview running at http://127.0.0.1:${port}/projects/discharge-tracker`);
});
