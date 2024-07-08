# Podcaster

A podcast listening tool

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries used

- **create react app** for ease of creating the project
- **prettier** for formatting, as is opinionated and almost and standard in the industry
- **eslint** for linting and early bug catching, it comes prepackaged with create-react-app
- **husky** and **lint-staged** for automattic linting and formatting
- **commitlint** for conventional commits enforcement
- **react-router** for routing of the page, it also can integrate with react-queries with relative ease
- **react-query** for handling of queries and caches, as has all the mechanism needed to handle cache and queries with grace, and its a really powerful tool that integrates with any request library
- **react-18next** for translations management, even if its not a requirement for the project, I like to always work with translation library for the ease of extension later on, here its just for demonstration purpose
- **fuse.js** for a fuzzy search implementation that it's lightweight

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

in short, this structure repeats a clean architecture for every section, in the example you can see the podcast section, as is the only one available in this project, and shared, to hold all the reusable code, like data fetching, storing, but allowing to hold the different operations, specific for the podcast handling in a different module

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

## Domain, Infra and Application

With this three layer we will have the controller part of the app, like requests and mutations, logical operations, information storage and more

Now I will detail some decisions made for logic part of the app:

### FetchHttpClient

For the necessities of this project only the get method will be implemented, but in a bigger project all the Http request type will be implemented

### Typing of domain

As it was mentioned earlier, the domain layer holds all the entities of the application, in this case, podcast and episodes, for the normalization of this data I have added a typing for the raw data received from the endpoints, as this types are NOT part of out domain, I will handling them from the infrastructure layer, and not the domain one, to differentiate between the data that we operate on and the response from server.

## Presentation

Relative to presentation, I will be implementing 3 different separated groups of components, the minimum unit of component will be the simplest components, like buttons, inputs and card, the ones that use that to compose, a page and the layout that will assist in organizing screens, also there will be the react-router components that will organize that screens

## Queries and storage

As I explained earlier I will be using react-query for handling of fetch and storage, react-query allows to handle gracefull both thing and combine it, and also integrates really well with the loader for react-router.

With that in mind I'm able to take advantage of the storage to call the fetch loader as many times as I need to get all data needed for a page, for example here

```tsx
    {
        path: '/podcast/:id',
        loader: async ({ params }) => podcastDetailsLoader(params.id!),
    }
```

here i'm calling the loaders, that under the hood are using react-query with storage (so we are only accessing the data once every day) to look for the podcast episodes for an id, and also fetching the details from the list query

```tsx
    {
    queryKey: PODCAST_DETAIL(id),
    queryFn: async () => ({
        detail: await findPodcastDetail(id),
        episodes: await podcastEpisodes.run(id),
    }),
    staleTime: ONE_DAY,
    enable: id,
    }
```

this will merge the result of both queries in one object, and it will be cached in the storage

## Utils

### useTranslation

Even if the library using already provides this hook, I like to call from a custom hook to future proof the import en case it needs to be replaced with another library.

## Testing

Relative to testing I will not be implementing snapshot testing for components as I think it does not provide enough benefits, instead I will implement tests that ensure the behavior and accessibility of components.

For the testing of texts, that I will try to avoid, I will look not for the resulting text but for the key as if the text was not translated, that way it does not matter the difference between languages

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
