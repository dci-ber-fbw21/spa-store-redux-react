# React + Redux

1. setup project

```
npx create-react-app my-app
cd my-app
npm install redux react-redux
```

2. Store setup

- create a folder `store` (or `redux`)
- add `index.js` that creates a store with the `createStore` and export it
- create reducer(s) files and export it
- import the reducer in the store and use it in the `createStore`

3. Create components - create the components folder and add components as you usually do

4. Link component that need to get or set data from the store

we do this with the `connect()` from `react-redux`

```
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);
```