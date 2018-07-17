# LEVELING UP YOUR UI WITH REDUX

## Authors

- Rui Neves ([@ruipneves](https://github.com/ruipneves))
- Vasco Santos ([@vasco-santos](https://github.com/vasco-santos))

## Project structure

1. `/spectatacle-boilerplate` - workshop introductory presentation
2. `/example-ui-data-relation` - workshop selectors demo
3. `/base-project` - base project for the pratical component of the workshop

### Introductory presentation

We used a ReactJS based presentation library called [spectacle](https://github.com/FormidableLabs/spectacle) for powering our presentation with JS.

#### Usage

```
npm install
npm run start
```

#### Introductory example

Link to sandbox: https://codesandbox.io/s/71mz185zq

### Demo

We will provide a small demo for how to improve the performance of web application with selectors.

#### Usage

```
npm install
npm run start-dev
```

### Base project

For the pratical component of the workshop, we will build a redux store on top of an already created React project (using [react-with-moxy](https://github.com/moxystudio/react-with-moxy))

#### Usage

```
npm install
npm run start-dev
```

#### Guide

The project provided is a working version of a restaurant app without using Redux. Accordingly, there is too much friction in the components logic and there are tons of props being passed all around to fit the needs of each component.

Our goal with this workshop consists on creating a redux store that replace the current local state being used, and consequently, improve all the application logic using `connect`, `actions`, `selectors` and `middlewares`. 

The first step should be identifying the possible reducers, write their initial state and the reduce functions (some hints can be found on `Home.js`), according to the UI needs.

Then, we should be able to create the actions necessary and integrate them on the application code. After this, it will be possible to connect the components with the store and simplify a lot the props flow accross components.

Finally, a set of selectors should be implemented, in order to improve the performance of the application, as well as to decrease the complexity of the components.
