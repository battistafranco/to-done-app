import { storiesOf } from '@storybook/html';

storiesOf('Design System/Colors', module)
  .add(
    'Theme',
    () => `
    <h2>Colors</h2>
    <sb-app-color-tiles pattern="^--color-(?!neutral)"></sb-app-color-tiles>

    <h2>Neutrals</h2>
    <sb-app-color-tiles pattern="^--color-neutral"></sb-app-color-tiles>
  `
  )
  .add(
    'Application',
    () => `
      <style>
        sb-app-color-tiles {
          grid-template-columns: 1fr 1fr 1fr;
        }
      </style>

      <h2>Background</h2>
      <sb-app-color-tiles pattern="^--app-bg"></sb-app-color-tiles>

      <h2>States</h2>
      <sb-app-color-tiles pattern="^--app-state"></sb-app-color-tiles>

      <h2>Border</h2>
      <sb-app-color-tiles pattern="^--app-border"></sb-app-color-tiles>

      <h2>Text</h2>
      <sb-app-color-tiles pattern="^--app-text"></sb-app-color-tiles>
  `
  );

storiesOf('Design System/Fonts', module)
  .addParameters({ layout: 'centered' })
  .add(
    'Weights',
    () => `
      <story>
          <p style="font-weight:300">Light</p>
          <p style="font-weight:400">Regular</p>
          <p style="font-weight:500">Medium</p>
      </story>
    `
  );
