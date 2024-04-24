import { G as GetOpenIncidents, M as Mapper, F as FilterAndInsertMonitorInIncident } from './github-c018834c.js';
import { F as FetchData } from './page-576e2fb0.js';
import { p as public_env } from './shared-server-58a5f352.js';
import fs from 'fs-extra';
import 'axios';
import './tool-b4b3e524.js';
import 'marked';

async function load({ params, route, url, parent }) {
  let monitors = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/monitors.json", "utf8"));
  const parentData = await parent();
  const siteData = parentData.site;
  const github = siteData.github;
  const monitorsActive = [];
  for (let i = 0; i < monitors.length; i++) {
    if (monitors[i].hidden !== void 0 && monitors[i].hidden === true) {
      continue;
    }
    if (monitors[i].category === void 0 || monitors[i].category !== params.category) {
      continue;
    }
    delete monitors[i].api;
    delete monitors[i].defaultStatus;
    let data = await FetchData(monitors[i], parentData.localTz);
    monitors[i].pageData = data;
    monitorsActive.push(monitors[i]);
  }
  let openIncidents = await GetOpenIncidents(github);
  let openIncidentsReduced = openIncidents.map(Mapper);
  return {
    monitors: monitorsActive,
    openIncidents: FilterAndInsertMonitorInIncident(openIncidentsReduced, monitorsActive)
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-79395d72.js')).default;
const server_id = "src/routes/category-[category]/+page.server.js";
const imports = ["_app/immutable/nodes/3.fed4cf1e.js","_app/immutable/chunks/scheduler.8852886c.js","_app/immutable/chunks/index.fb8f3617.js","_app/immutable/chunks/ctx.5277da15.js","_app/immutable/chunks/index.97524e95.js","_app/immutable/chunks/monitor.e94c63d7.js","_app/immutable/chunks/axios.67af7d3c.js","_app/immutable/chunks/Icon.5e01f81d.js","_app/immutable/chunks/index.1085b291.js","_app/immutable/chunks/events.b4751e74.js","_app/immutable/chunks/incident.45489a6e.js","_app/immutable/chunks/chevron-down.e9f9270a.js","_app/immutable/chunks/stores.aa7cfbc9.js","_app/immutable/chunks/singletons.b17fc9cc.js","_app/immutable/chunks/paths.287ec065.js"];
const stylesheets = ["_app/immutable/assets/monitor.13f869bc.css","_app/immutable/assets/incident.d0acbf00.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-06124558.js.map
