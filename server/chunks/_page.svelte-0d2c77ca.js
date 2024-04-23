import { c as create_ssr_component, d as validate_store, f as subscribe, b as add_attribute, v as validate_component, a as each } from './ssr-4803c1d8.js';
import { M as Monitor } from './monitor-713c49cb.js';
import { C as Card, a as Card_content } from './Icon-3bd39a35.js';
import 'clsx';
import './ctx-5741cdfd.js';
import './index4-a4b32e6b.js';
import { p as page } from './stores-cf0b5c39.js';
import './index2-9a50040e.js';
import './events-f8857eb2.js';
import './index3-22015ff1.js';
import 'tailwind-variants';
import 'tailwind-merge';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  let element;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${data.monitors.length > 0 ? `<section class="w-fit p-0"${add_attribute("this", element, 0)}>${validate_component(Card, "Card.Root").$$render($$result, { class: "w-[580px] border-0 shadow-none" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "p-0 monitors-card " }, {}, {
        default: () => {
          return `${each(data.monitors, (monitor) => {
            return `${validate_component(Monitor, "Monitor").$$render($$result, { monitor, localTz: data.localTz }, {}, {})}`;
          })}`;
        }
      })}`;
    }
  })}</section>` : `<section class="mx-auto bg-transparent mb-4 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center" id="">${validate_component(Card, "Card.Root").$$render($$result, { class: "mx-auto" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "pt-4" }, {}, {
        default: () => {
          return `<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center" data-svelte-h="svelte-1vwlrnd">No Monitor Found.</h1> <p class="mt-3 text-center">Please read the documentation on how to add monitors
                <a href="https://kener.ing/docs#h1add-monitors" target="_blank" class="underline" data-svelte-h="svelte-1boga69">here</a>.</p>`;
        }
      })}`;
    }
  })}</section>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0d2c77ca.js.map
