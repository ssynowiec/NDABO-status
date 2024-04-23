import { c as create_ssr_component, v as validate_component } from './ssr-4803c1d8.js';
import { I as Icon$1 } from './Icon-3bd39a35.js';

const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronDown = Chevron_down;

export { ChevronDown as C };
//# sourceMappingURL=chevron-down-9fe99d22.js.map
