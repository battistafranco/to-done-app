## ng-To-Done PWA

Welcome to ng-To-Done PWA!
This PWA allow you to handle a ToDo list and integrate it with Firebase.
You can try it here: https://ng-to-done.web.app/

### [Firebase](https://firebase.google.com/docs/web/setup)

At first you need to setup a Firebase app, get your credentials and replace it in the environment files.
You can check it here: https://firebase.google.com/docs/web/setup

### Install Dependencies

```
yarn install
```

### [Stencil](https://stenciljs.com/docs/introduction) Library (`/libs/ui`)

```
yarn run ui:build

// or, to watch for file changes
yarn run ui:dev
```

After receiving the assets, you have already set up

- font families (`fonts/font.css`)
- brand colors (`src/css/_theme.scss`)
- an svg icon component (`src/components/design-system/icon`)

### [Storybook](https://storybook.js.org/) (`/libs/ui/.storybook`)

```
yarn run ui:storybook
```

You've already built out a couple stories for the colors and icon sizes.

### [Angular](https://angular.io/) App (`/apps/web`)

```
yarn start web
```
