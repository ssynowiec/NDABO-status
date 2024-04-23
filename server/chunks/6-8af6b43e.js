import { p as public_env } from './shared-server-887a2f5e.js';
import { a as GetIncidents, M as Mapper } from './github-c018834c.js';
import fs from 'fs-extra';
import 'axios';
import './tool-b4b3e524.js';
import 'marked';

async function load({ params, route, url, parent }) {
  let monitors = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/monitors.json", "utf8"));
  const siteData = await parent();
  const github = siteData.site.github;
  const { description, name, tag, image } = monitors.find((monitor) => monitor.folderName === params.id);
  const allIncidents = await GetIncidents(tag, github, "all");
  const gitHubActiveIssues = allIncidents.filter((issue) => {
    return issue.state === "open";
  });
  const gitHubPastIssues = allIncidents.filter((issue) => {
    return issue.state === "closed";
  });
  return {
    issues: params.id,
    githubConfig: github,
    monitor: { description, name, image },
    activeIncidents: await Promise.all(gitHubActiveIssues.map(Mapper, { github })),
    pastIncidents: await Promise.all(gitHubPastIssues.map(Mapper, { github }))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-be543120.js')).default;
const server_id = "src/routes/incident/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/6.b0ba22fb.js","_app/immutable/chunks/scheduler.18209252.js","_app/immutable/chunks/index.21c1be7e.js","_app/immutable/chunks/Icon.9a6347f9.js","_app/immutable/chunks/utils.3ae7100f.js","_app/immutable/chunks/index.daafe1fe.js","_app/immutable/chunks/incident.c95b7e3d.js","_app/immutable/chunks/axios.f0e3e6ed.js","_app/immutable/chunks/index.9a810bc1.js","_app/immutable/chunks/index.8c353f01.js"];
const stylesheets = ["_app/immutable/assets/incident.5b8a33be.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-8af6b43e.js.map
