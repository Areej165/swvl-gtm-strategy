import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = 'C:\\Users\\Arigue Ossama\\Documents\\Codex\\2026-09-11\\n\\outputs\\swvl-gtm\\dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
createServer(async (req, res) => {
  try {
    const pathname = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    const file = join(root, normalize(pathname).replace(/^([/\\])+/, ''));
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
}).listen(4173, '127.0.0.1', () => process.stdout.write('Local: http://127.0.0.1:4173/\n'));
