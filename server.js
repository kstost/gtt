const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const ROOT = __dirname;

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  // 디렉터리 트래버설 방지
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = contentTypes[ext] || 'application/octet-stream';
    // sw.js 는 캐시 무력화, 그 외 정적 자산은 짧은 캐시
    const cacheHeader = path.basename(filePath) === 'sw.js'
      ? 'no-cache, no-store, must-revalidate'
      : 'public, max-age=300';
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': cacheHeader });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
