async function loadBundle() {
  const encoded = (await fetch('./.source/relationship-v0.bundle.gz.b64').then((r) => r.text())).trim();
  const bytes = Uint8Array.from(atob(encoded), (ch) => ch.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return JSON.parse(await new Response(stream).text());
}

function moduleUrl(source) {
  return URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
}

try {
  const bundle = await loadBundle();
  const style = document.createElement('style');
  style.textContent = bundle['app.css'];
  document.head.appendChild(style);

  const engineUrl = moduleUrl(bundle['src/engine.js']);
  const contentUrl = moduleUrl(bundle['src/content.js']);
  const appSource = bundle['src/app.js']
    .replace('"./engine.js"', JSON.stringify(engineUrl))
    .replace('"./content.js"', JSON.stringify(contentUrl));
  const appUrl = moduleUrl(appSource);
  await import(appUrl);
} catch (error) {
  document.querySelector('#app').innerHTML = `<pre style="white-space:pre-wrap;padding:24px">启动失败：${String(error?.stack || error)}</pre>`;
}
