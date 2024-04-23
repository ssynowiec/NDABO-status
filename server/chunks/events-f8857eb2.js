import { k as createEventDispatcher } from './ssr-4803c1d8.js';

function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}

export { createDispatcher as c };
//# sourceMappingURL=events-f8857eb2.js.map
