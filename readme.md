# The British Library Design System

Build web applications that meet the British Library service standards.

## Releases & versioning

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=%40britishlibrary) and we adhere to [semantic versioning](https://semver.org/).

## Supported technologies

The following view layer libraries are currently supported:

- React

## Installation & quick start

### Using the Design System in your own project

To install and save to your project's package.json dependencies, run:

```
# with npm
npm install @britishlibrary/component-library @britishlibrary/icon-library @britishlibrary/eslint-config styled-components

# ...or with yarn
yarn add @britishlibrary/component-library @britishlibrary/icon-library @britishlibrary/eslint-config styled-components
```

Note: [`styled-components`](https://styled-components.com/) is a required [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) and is installed with the above command.

## Run the Design System locally

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

## Commit linting

- build: Changes that affect the build system or external dependencies (e.g., `npm`, `yarn`, `webpack`).
- chore: Miscellaneous tasks that do not modify the source code or tests (e.g., updating package metadata, adding a `.gitignore` file).
- ci: Changes to our Continuous Integration configuration files and scripts (e.g., `.github/workflows`).
- docs: Documentation only changes (e.g., `README.md`, inline code comments).
- feat: A new feature for the user, not a new feature for build script (e.g., adding a new module, introducing a new component).
- fix: A bug fix for the user (e.g., correcting a typo in code, fixing a runtime error).
- perf: A code change that improves performance (e.g., optimizing an algorithm, reducing load times).
- refactor: A code change that neither fixes a bug nor adds a feature (e.g., renaming variables, restructuring code).
- revert: Reverts a previous commit (e.g., reverting a feature or bug fix).
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- test: Adding missing tests or correcting existing tests (e.g., unit tests, integration tests).

## Thanks

<a href="https://www.chromaticqa.com/"><img src="https://cdn-images-1.medium.com/letterbox/147/36/50/50/1*oHHjTjInDOBxIuYHDY2gFA.png?source=logoAvatar-d7276495b101---37816ec27d7a" width="120"/></a>

We use [Chromatic](https://www.chromaticqa.com/) for visual regression testing.
