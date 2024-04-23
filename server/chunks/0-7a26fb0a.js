import fs from 'fs-extra';
import { p as public_env } from './shared-server-887a2f5e.js';

async function load({ params, route, url, cookies, request }) {
  let site = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/site.json", "utf8"));
  const headers = request.headers;
  const userAgent = headers.get("user-agent");
  let localTz = "GMT";
  const localTzCookie = cookies.get("localTz");
  if (!!localTzCookie) {
    localTz = localTzCookie;
  }
  let showNav = true;
  if (url.pathname.startsWith("/embed")) {
    showNav = false;
  }
  let isBot = false;
  if (userAgent?.includes("Chrome-Lighthouse") || userAgent?.includes("bot")) {
    isBot = true;
  }
  return {
    site,
    localTz,
    showNav,
    isBot
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-db00afb3.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.71aedd00.js","_app/immutable/chunks/scheduler.18209252.js","_app/immutable/chunks/index.21c1be7e.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.9a810bc1.js","_app/immutable/chunks/utils.3ae7100f.js","_app/immutable/chunks/index.daafe1fe.js"];
const stylesheets = ["_app/immutable/assets/0.c0b69d1b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-7a26fb0a.js.map
