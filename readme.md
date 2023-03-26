# The British Library Design System

Build web applications that meet the British Library service standards.

## Releases & versioning

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=%40britishlibrary) and we adhere to [semantic versioning](https://semver.org/).

## Supported technologies

The following view layer libraries are currently supported:

- React

## Installation & quick start

### Installation

To install and save to your project's package.json dependencies, run:

```
# with npm
npm install @britishlibrary/fonts @britishlibrary/component-library styled-components

# ...or with yarn
yarn add @britishlibrary/fonts @britishlibrary/component-library styled-components
```

Note: [`styled-components`](https://styled-components.com/) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) and is installed with the above command.

## Run locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

### Using nvm (optional)
If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [Install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](./.nvmrc))

## Scripts

The top level project contains scripts that are then executed for all packages.

- `lint`  Checks syntax and simple errors in javascript files.
- `test`  Runs Jest tests in all the packages.
- `build` Runs the build script in all packages.

## Thanks

<a href="https://www.chromaticqa.com/"><img src="https://cdn-images-1.medium.com/letterbox/147/36/50/50/1*oHHjTjInDOBxIuYHDY2gFA.png?source=logoAvatar-d7276495b101---37816ec27d7a" width="120"/></a>

We use [Chromatic](https://www.chromaticqa.com/) for visual regression testing.

## Todo: 

- Add british library eslint as dependency to Icon Library
- Add british library eslint as dependency to Design Tokens

- Setup example component in component-library
- Setup JEST in component-library
- Setup e2e (playwright) in component-library
- Setup storybook properly