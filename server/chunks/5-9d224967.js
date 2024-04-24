import { F as FetchData } from './page-576e2fb0.js';
import { p as public_env } from './shared-server-887a2f5e.js';
import fs from 'fs-extra';

async function load({ params, route, url, parent }) {
  let monitors = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/monitors.json", "utf8"));
  const parentData = await parent();
  const monitorsActive = [];
  const query = url.searchParams;
  const theme = query.get("theme");
  for (let i = 0; i < monitors.length; i++) {
    if (monitors[i].tag !== params.tag) {
      continue;
    }
    delete monitors[i].api;
    delete monitors[i].defaultStatus;
    monitors[i].embed = true;
    let data = await FetchData(monitors[i], parentData.localTz);
    monitors[i].pageData = data;
    monitorsActive.push(monitors[i]);
  }
  return {
    monitors: monitorsActive,
    theme,
    openIncidents: []
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-0d2c77ca.js')).default;
const server_id = "src/routes/embed-[tag]/+page.server.js";
const imports = ["_app/immutable/nodes/5.cb541b4a.js","_app/immutable/chunks/scheduler.18209252.js","_app/immutable/chunks/index.21c1be7e.js","_app/immutable/chunks/monitor.8af68f21.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Icon.9a6347f9.js","_app/immutable/chunks/utils.3ae7100f.js","_app/immutable/chunks/index.daafe1fe.js","_app/immutable/chunks/axios.f0e3e6ed.js","_app/immutable/chunks/index.9a810bc1.js","_app/immutable/chunks/stores.b1d86fea.js","_app/immutable/chunks/singletons.a4795e03.js"];
const stylesheets = ["_app/immutable/assets/monitor.ba48e41f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-9d224967.js.map
