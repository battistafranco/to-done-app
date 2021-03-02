import { storiesOf } from '@storybook/html';

storiesOf('Design System/Icons', module)
  .addParameters({ layout: 'centered' })
  .add(
    'Sizes',
    () => `
        <story>
            <tdn-ui-icon size="xs" name="logo"></tdn-ui-icon>
            <tdn-ui-icon size="s" name="logo"></tdn-ui-icon>
            <tdn-ui-icon size="m" name="logo"></tdn-ui-icon>
            <tdn-ui-icon size="l" name="logo"></tdn-ui-icon>
            <tdn-ui-icon size="xl" name="logo"></tdn-ui-icon>
        </story>
    `
  )
  .add(
    'Shapes',
    () => `
        <story>
            <tdn-ui-icon name="add"></tdn-ui-icon>
            <tdn-ui-icon name="calendar"></tdn-ui-icon>
            <tdn-ui-icon name="check"></tdn-ui-icon>
            <tdn-ui-icon name="image"></tdn-ui-icon>
            <tdn-ui-icon name="logo"></tdn-ui-icon>
            <tdn-ui-icon name="upload"></tdn-ui-icon>
            <tdn-ui-icon size="xs" name="x"></tdn-ui-icon>
        </story>
    `
  )
  .add(
    'With color',
    () => `
        <story>
            <tdn-ui-icon name="logo" size="xl" color="color-green"></tdn-ui-icon>
            <tdn-ui-icon name="logo" size="xl" color="app-text-secondary"></tdn-ui-icon>
            <tdn-ui-icon name="logo" size="xl" color="color-purple"></tdn-ui-icon>
            <tdn-ui-icon name="logo" size="xl" color="color-neutral-10"></tdn-ui-icon>
        </story>
    `
  );
