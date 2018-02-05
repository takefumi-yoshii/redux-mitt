# redux-mitt

**what is this?**

The redux standard API does not have an easy way to subscribe Actions and unsubscribe them.added this as a lightweight function.

## install

```
$ npm install --save redux-mitt
```

## setup

```
import { createStore, applyMiddleware } from 'redux'
import mittMiddleware from './index'

const reducer = () => {}
const store = createStore(reducer, mittMiddleware())
```
## usage

```
const type = 'TEST'
const payload = { test: 'test' }
const creator = () => { return { type, payload }}
const unsubscribe = store.subscribeAction(type, action => {
  console.log(action) // { type: 'TEST', payload: { test: 'test'} }
})
// unsubscribe() # unsubscribe action
store.dispatch(creator())
```

## API

### subscribeAction

The first argument specifies the action type. Specific action `ex:) 'SOME_ACTION'` or wildcard `'*'` can subscribe.The second argument is callback with action.
