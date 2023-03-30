# React Component Library

A collection of React components written for The British Library web applications.

## Installation

The British Library Component Library is available as an [NPM package](https://www.npmjs.com/package/@britishlibary/component-library).

To install it, run the relevant command for your package manager:

```shell
// npm
npm install @britishlibrary/fonts @britishlibrary/component-library styled-components

// yarn
yarn add @britishlibrary/fonts @britishlibrary/component-library styled-components
```

Note: [`styled-components`](https://styled-components.com/) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) and is installed with the above command.

## End-to-end tests

End-to-end tests run in both Chrome and Firefox using [Playwright](https://playwright.dev/).
Tests are dependent on the Storybook running with a test configuration:

```
yarn storybook:test
```

Playwright browsers and dependencies also have to be installed:

```
yarn test:e2e:install
```

### Run all tests

```
yarn test:e2e
```

### Run specific tests

```
yarn test:e2e <regex>
```

### Run all tests with tracing

```
yarn test:e2e:trace
```

### Open the HTML test report

```
yarn test:e2e:show-report
```

## Chromatic

[chromatic](https://www.chromatic.com/)

Ship UIs faster with automated workflows for Storybook
