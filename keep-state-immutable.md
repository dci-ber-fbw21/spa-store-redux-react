To help you with the exercise, you can use the [redux-immutable-state-invariant](https://www.npmjs.com/package/redux-immutable-state-invariant).

## What does this do? 

It will check if you try to modify your redux state

## How to set it up? 

1. Install 

```bash
npm install --save-dev redux-immutable-state-invariant
```

2. Pass to the `createStore` function

```js
// we are in the store/index.js file
import { createStore, applyMiddleware, compose } from 'redux';
// import your reducer here
import yourReducerGoesHere from './yourReducerGoesHere';

const middleware = process.env.NODE_ENV !== 'production' ?
    [
        require('redux-immutable-state-invariant').default(),
    ] :
    [];

const store = createStore(
    yourReducerGoesHere, /* pass here your reducer */
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;
```