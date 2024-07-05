# Podcaster

A podcast listening tool

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries used

- create react app for ease of creating the project
- prettier for formmating, as is opinionated and almost and standard in the industry
- eslint for linting and early bug catching, it comes prepackaged with create-react-app
- husky and lint-staged for automattic linting and formatting
- commitlint for conventional commits enforcement
- react-router for routing of the page, it also can integrate with react-queries with relative ease
- react-query for handleing of queries and caches, as has all the mechanism needed to handle cache and queries with grace, and its a really powerful tool that integrates with any request library

### Linting and formatting

#### prettier

semi-colon disabled for, in my opinion, a more readable code
singleQuote for regular and jsx files

#### eslint

Comes preinstalled with create-react-app and adds some plugins preinstalled that I will be using even in an manually created project,those are
react and react-hooks plugins for all react early catching of errors and ensure a better code from the start, in a bigger code base I will discuss with the team all the rules used, for the purpose of demonstration I will leave at almost default settings
a11y plugin to ensure a good use of accessibility.

## Structure

For this demonstration I will use a simplified version of the structure I prefer to use, normally I will split the code base between the different necessities for the project like authorization, users, the different sections of the page, shopping cart, ui components, etc

This is an example of that structure

```
src
└── modules
    ├── podcast
    │   ├── application
    │   │   └── use-cases
    │   ├── domain
    │   ├── infrastructure
    │   └── presentation
    │       ├── components
    │       ├── layouts
    │       └── screens
    └── shared
        ├── application
        │   └── use-cases
        ├── domain
        ├── infrastructure
        └── utils
            └── hooks
```

in short, this structure repeats a hexagonal-like structure for every section, in the example you can see the podcast section, as is the only one available in this project, and shared, to hold all the reusable code, like data fetching, storing, but allowing to hold the different operations, specific for the podcast handling in a different module

In my personal experience this allows to separate the preoccupations of the team according to the part of the codebase its been working with, outside of this there will be the routing and mounting of the app that will be explained latter in the document

Now I will explain the more relevant parts of the structure

### domain

This folder will hold all the relative interfaces for the data that is relevant for the app domain, like a user or a podcast

### infrastructure

This folder will container all the infra required to make the web operate, in this case mostly request and access to local storage, in this example there will a generic request that will be implement as I see fit with the library or technology selected

### application

This hold mostly the use-cases to access the operations made in the app, for example here will be injecting the queries from infra into a use case to then be injected into the presentation layer

### presentation

This hold all the presentation requirements for the app, react components, pages, layouts, some routing and even assets

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```

```
