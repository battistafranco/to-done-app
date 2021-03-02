import { defineCustomElements } from '../../../dist/libs/ui/loader';

defineCustomElements(window);

require('@teamhive/design-system-components/dist/cjs/loader.cjs').defineCustomElements(
  window
);
