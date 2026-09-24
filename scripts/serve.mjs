import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '0.0.0.0';
const mime = {
  '.html':'text/html; charset=utf-8',
  '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.b64':'text/plain; charset=utf-8',
  '.webmanifest':'application/manifest+json; charset=utf-8'
};

function lanAddresses() {
  const found = [];
  for (const list of Object.values(os.networkInterfaces())) {
    for (const item of list || []) {
      if (item.family === 'IPv4' && !item.internal) found.push(item.address);
    }
  }
  return [...new Set(found)];
}

http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  let file = path.resolve(root, relative);

  if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(file, (err, stat) => {
    if (!err && stat.isDirectory()) file = path.join(file, 'index.html');

    fs.stat(file, (fileErr, fileStat) => {
      if (fileErr || !fileStat.isFile()) {
        res.writeHead(404);
        return res.end('Not found');
      }
      res.writeHead(200, {
        'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
        'Cache-Control':'no-store'
      });
      fs.createReadStream(file).pipe(res);
    });
  });
}).listen(port, host, () => {
  console.log('');
  console.log('Relationship is running');
  console.log(`Computer Player: http://127.0.0.1:${port}/play/`);
  console.log(`Engine Debug:    http://127.0.0.1:${port}/`);
  const addresses = lanAddresses();
  if (addresses.length) {
    console.log('');
    console.log('Phone on the same Wi-Fi:');
    for (const address of addresses) {
      console.log(`  http://${address}:${port}/play/`);
    }
  }
  console.log('');
  console.log('If Windows asks whether Node.js may access the network, allow Private networks.');
});
