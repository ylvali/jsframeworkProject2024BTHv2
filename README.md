[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ylvali/frontendBTH/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/ylvali/frontendBTH/?branch=main)
[![Build Status](https://scrutinizer-ci.com/g/ylvali/frontendBTH/badges/build.png?b=main)](https://scrutinizer-ci.com/g/ylvali/frontendBTH/build-status/main)
[![Build Status](https://app.travis-ci.com/ylvali/frontendBTH.svg?token=zbGBcfgSpBchF7HShAt4&branch=main)](https://app.travis-ci.com/ylvali/frontendBTH)


# About, install & run
This is an angular application.
Backend is a REST Api, and database sqlite3.
And a socket server.
Made as a course project 2024, BTH - Blekinge technical institute
Start it with npm or angular.
 
## Angular start
Run npm run build - builds the project. 
Run ng test       - tests the environment.

## Npm start
npm run start

Selenium tests are placed in the TestSelenium directory.

## Base layout and functionality
Angular has a basic set up and scheme with modules that work together. A main layout is created with CSS, 
then each component has the possibility to add new style to that part. The whole project is created of modules called components, 
as a part of the interface the angular framework offers. Their special language and way of doing it, which is the essence of frameworks - a repeated 
creational structure. With special language that belongs to that framework. 

## Fetching an API
A backend API is a gateway to a system. And with angular we can connect to that gateway, that interface using dependency injection. 
Meaning that a dependency is injected into a module, that then can use the functionality entered. 

### Dependency injection as a service
Angular functionality allows to have the API fetch as 'a service'. 
Which is a dependency injection that can be read into any module. And the functionality read. 
See: src/app/api-connect 

## Chat service with socket.io
The chat service with socket.io is loaded in the app.module.ts. Socket being a direct real time connection.
That is where the backend chat server is configured, pointed to. Then using a dependency injection service (chat-service.service.js) the chat can be loaded into a module.
The module sample is in app/chat - the real time through socket.io. Here is is used for real time product price setting. 
And everytime a new price is set, the product price in the sqlite3 database is updated. That happens on the backend side. A server with the socket.io connection is running,
that has access to the same server sqlite3 as the rest of the API. So 2 servers connected to that sqlite. And the new price you write is updated through the socket 
connection through a client that is connected to the socket.io server. In this sample the client is part of the main application. But technically the client could be elsewhere.
The backend server is also connected to the API, as mentioned. It is however a separate server. The sqlite are files and to keep the files in the same locaiton on the server seems good. 

## Selenium tests
In 
testSelenium/test/firstScript/testProj.spec.js
testSelenium/test/firstScript/fScriptProj.js

Tests to load the website,
confirm page the title,
use the navigation, 
load data with the API buttons,
check that the data is correct. 

<!-- # FROM THE ANGULAR DOCUMENTATION
## MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
