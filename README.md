# Basics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Stuff learned 

- .editorconfig: a file that you can use for configuring your coding rules for your team.
- angular.json: the development configuration and bundle generator configuration file for angular. "version" is for the config file only. "newProjectRoot" is the path of the main folder that keeps all the angular projects. "projects" is a list of projects configurations, for each project you can have different configs. Inside "architect" parameter of each angular app you can find 4 main commands for build or test your project. "extracti18n" commando will extract translations for a project. "test" will build project for testing.
- There are 3 config files for angular: 
    - tsconfig.json: 
    - tsconfig.app.json: this runs in compilation time. Extends tsconfig parameters.
    - tsconfig.spec.json: this runs when builds for tests. Extendes tsconfig parameters.
- main.ts: 
- AOT compilation: Compiling the code on the server, making it slow on cool start or at the beginning, but faster afterwards. Catch errors on server.
- JIT compilation: for debugging purposes mostly. Compiling when needed it. Catch errors on browser.
- Inside angular.json -> projects.THIS_PROJECT.architect.build.configurations.development.optimization, this property is set to "false" by default because we need to debug our app in this step. In the "production" parameter,  same level as "development", you don't see this property because we don't needed it.
- App Module: bundles all our modules the app. 
- polyfills.ts: this file checks if the browser supports all the features needed to run a Angular App. 
- Communication between components child and parent: Using decorators such as Input for passing data to a child comp, Output to emit events from the child to the parent component. 
- Other way to pass content from parent to child is with "content projection", this is just passing html to the child component inside the tags, and using ng-container on the child to receive the new elements. 

- Lifecycle hooks: 
    - If hooks runs multiple times it can affect the performance of your app. There are at leats 8 hooks that can be executed on init and on changes. 

- Scoped CSS: you can declare styles for a child component inside its .css or using selectors like "host" to applied style to a tag projection on a child. 

- Pipes: in other words functions that transform a value, for example like "computed" variables on VueJS framework, but instead we can preserve the original value of the variable. Ex: storing price, showing number with currency by country or browser's locale. We have numbers of pipes that offers functionalities according to the use case. 




