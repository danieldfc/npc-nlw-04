<h1 align="center">
  NPC - Satisfaction Level - Trilha Node.js
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/daniel-felizardo/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Daniel%20Felizado-%2315C3D6"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danieldfc/npc-nlw-04?color=15C3D6">
  <a href="https://github.com/danieldfc/npc-nlw-04/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danieldfc/npc-nlw-04?color=15C3D6"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/danieldfc/npc-nlw-04?color=15C3D6">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=NLW%2304&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanieldfc%2Fnpc-nlw-04%2Fmaster%2Fexport.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <img alt="NPC" src="assets/unofficial-logo.png" width="75%">
</p>

## 🧸 About the project

This project was developed on the Next Level Week #04 event by [Rocketseat](https://rocketseat.com.br/) 🚀&nbsp;💜

NPC is a project to check the level of satisfaction with a certain company, for example: Rocketseat; The application will contain several concepts used in the classes, but with some additions preferred by me.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)

## 💻 Getting started

Import the `export.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)

```bash
$ git clone https://github.com/danieldfc/npc-nlw-04.git && cd npc-nlw-04
# Or if you have the Github CLI installed on your machine
$ gh repo clone danieldfc/npc-nlw-04 && cd npc-nlw-04
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork danieldfc/npc-nlw-04
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd npc-nlw-04

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

---

Made with 💜&nbsp; by Daniel Felizardo 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/daniel-felizardo/)

