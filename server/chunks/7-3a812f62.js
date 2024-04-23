import { G as GetOpenIncidents, M as Mapper, F as FilterAndInsertMonitorInIncident } from './github-c018834c.js';
import { F as FetchData } from './page-576e2fb0.js';
import { p as public_env } from './shared-server-887a2f5e.js';
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
    if (monitors[i].tag !== params.tag) {
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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-334bc27e.js')).default;
const server_id = "src/routes/monitor-[tag]/+page.server.js";
const imports = ["_app/immutable/nodes/7.50a285e0.js","_app/immutable/chunks/scheduler.18209252.js","_app/immutable/chunks/index.21c1be7e.js","_app/immutable/chunks/monitor.8af68f21.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Icon.9a6347f9.js","_app/immutable/chunks/utils.3ae7100f.js","_app/immutable/chunks/index.daafe1fe.js","_app/immutable/chunks/axios.f0e3e6ed.js","_app/immutable/chunks/index.9a810bc1.js","_app/immutable/chunks/incident.c95b7e3d.js","_app/immutable/chunks/index.8c353f01.js","_app/immutable/chunks/stores.4e2cf3df.js","_app/immutable/chunks/singletons.4e7a47f3.js"];
const stylesheets = ["_app/immutable/assets/monitor.ba48e41f.css","_app/immutable/assets/incident.5b8a33be.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-3a812f62.js.map
