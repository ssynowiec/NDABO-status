import axios from 'axios';

async function load({ params, route, url, parent }) {
  const { data } = await axios.get("https://raw.githubusercontent.com/rajnandan1/kener/main/docs.md");
  return {
    md: data
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c4864ebd.js')).default;
const server_id = "src/routes/docs/+page.server.js";
const imports = ["_app/immutable/nodes/4.844fe6e8.js","_app/immutable/chunks/scheduler.18209252.js","_app/immutable/chunks/index.21c1be7e.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Icon.9a6347f9.js","_app/immutable/chunks/utils.3ae7100f.js","_app/immutable/chunks/index.daafe1fe.js","_app/immutable/chunks/index.8c353f01.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-4da7ffe5.js.map
