import { c as create_ssr_component, d as validate_store, f as subscribe, e as escape } from './ssr-4803c1d8.js';
import { p as page } from './stores-cf0b5c39.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-0bd04c4c.js.map
