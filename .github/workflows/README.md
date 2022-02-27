# Publishing to npm repo

https://sergiodxa.com/articles/github-actions-npm-publish

# Publishing to Github npm repository

copy & paste this into `deploy.yml`. It works.

```yml
name: Deploy to GitHub Page
on:
  push:
    branches:
      - main
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Install
        run: |
          yarn install
  run-release:
    needs: [build-and-test]
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
          registry-url: "https://npm.pkg.github.com"
          scope: "@mydatahack"
      - name: Install and build
        run: |
          yarn install
          yarn build
      - name: Semantic Release
        uses: cycjimmy/semantic-release-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

# Example to npm publish

https://github.com/zeke/semantic-release-with-github-actions

```yml
name: Release npm package

on:
  push:
    branches:
      - master

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
      - run: npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```
