---
title: "deploy nextjs site to github pages"
publishedAt: "2024-09-10"
summary: "deploy nextjs site to github pages using github actions"
---

# **Deploying nextjs site to github pages**

\
i deployed my portfolio site [code to site](https://github.com/AwaisIsane/portfolio-site) to github pages here is how i did it .

i used github [actions](https://docs.github.com/en/actions) for this process \
\
create a folder called `.github/workflows`

in `worfkflows/setup-node` create a `action .yml` file here is the code for this file this will handle installing node and packages for the site

```yml
name: setup-node
description: "Setup Node.js ⚙️ - Cache dependencies ⚡ - Install dependencies 🔧"
runs:
  using: "composite"
  steps:
    - name: Setup Node.js ⚙️
      uses: actions/setup-node@v4
      with:
        node-version: 22

    - name: Cache dependencies ⚡
      id: cache_dependencies
      uses: actions/cache@v3
      with:
        path: node_modules
        key: node-modules-${{ hashFiles('package-lock.json') }}

    - name: Install dependencies 🔧
      shell: bash
      if: steps.cache_dependencies.outputs.cache-hit != 'true'
      run: npm ci
```

\
and then in workflows folder create a file called `publish.yml`

here we will use [https://github.com/JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

```yml
name: publish-to-github-pages
on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v4

      - name: Setup Node.js ⚙️ - Cache dependencies ⚡ - Install dependencies 🔧
        uses: ./.github/workflows/setup-node

      - name: Build with Next.js 🏗️
        run: npx next build
      - name: Create .nojekyll
        run: touch ./out/.nojekyll
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out # The folder the action should deploy.
          repository-name: AwaisIsane/awaisisane.github.io
          branch: main
          ssh-key: ${{ secrets.DEPLOY_KEY }}
```

\
Here we are deploying to a repository that is not this repository. So we need to add the repository name in the workflow file. as well as the ssh-key for that repository.
\
you can read more about ssh keys [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

\
I did this so that my site is at awaisisane.github.io and not at awaisisane.github.io/portfolio-site.

\
we also need to bypass jelkyll since nextjs serves files under \_next folder
[https://github.blog/news-insights/bypassing-jekyll-on-github-pages/](https://github.blog/news-insights/bypassing-jekyll-on-github-pages/)
\
for that we need to create a.nojekyll file in the out folder
