import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

// import brandImage from './logo.svg';

const theme = create({
  base: 'light',
  // brandImage
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
