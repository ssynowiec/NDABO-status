import fs from 'fs-extra';
import { p as public_env } from './shared-server-58a5f352.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-65a10bf1.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.01c69ffc.js","_app/immutable/chunks/scheduler.8852886c.js","_app/immutable/chunks/index.fb8f3617.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/ctx.5277da15.js","_app/immutable/chunks/index.97524e95.js","_app/immutable/chunks/index.1085b291.js"];
const stylesheets = ["_app/immutable/assets/0.c0b69d1b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-cc1dac01.js.map
