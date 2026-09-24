import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const out = process.argv.includes('--root') ? root : path.join(root, '.materialized');
const partNames = [1,2,3,4,5].map((n) => `relationship-v0.part${String(n).padStart(2,'0')}.b64`);
const partTexts = await Promise.all(partNames.map((name) => fs.readFile(path.join(root, '.source', name), 'utf8')));
const encoded = partTexts.join('').replace(/\s+/g, '');
const bundle = JSON.parse(zlib.gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));

if (out !== root) {
  await fs.rm(out, { recursive: true, force: true });
  await fs.mkdir(path.join(out, 'spec'), { recursive: true });
  await fs.cp(path.join(root, 'spec', 'v0'), path.join(out, 'spec', 'v0'), { recursive: true });
}
for (const [relative, content] of Object.entries(bundle)) {
  const target = path.join(out, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content, 'utf8');
}
console.log(`Materialized ${Object.keys(bundle).length} files to ${out}`);
