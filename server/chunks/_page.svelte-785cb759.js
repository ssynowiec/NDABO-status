import { c as create_ssr_component, d as subscribe, b as add_attribute, v as validate_component, a as each } from './ssr-f056b9d4.js';
import { M as Monitor } from './monitor-8cd75c8c.js';
import { C as Card, a as Card_content } from './Icon-2d61886b.js';
import 'clsx';
import './ctx-1da8879d.js';
import './index4-dc9ba479.js';
import { p as page } from './stores-0262db6b.js';
import './index2-ef0fcb8d.js';
import './events-3e3c01b3.js';
import './index3-db64c854.js';
import 'tailwind-variants';
import 'tailwind-merge';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
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
          return `<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center" data-svelte-h="svelte-1vwlrnd">No Monitor Found.</h1> <p class="mt-3 text-center" data-svelte-h="svelte-oy4ufi">Please read the documentation on how to add monitors
                <a href="https://kener.ing/docs#h1add-monitors" target="_blank" class="underline">here</a>.</p>`;
        }
      })}`;
    }
  })}</section>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-785cb759.js.map
