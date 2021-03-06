# redux-mitt

[![Latest Version](https://img.shields.io/badge/npm-v2.1.0-C12127.svg)](https://www.npmjs.com/package/redux-mitt)
[![CircleCI](https://circleci.com/gh/takefumi-yoshii/redux-mitt/tree/master.svg?style=svg)](https://circleci.com/gh/takefumi-yoshii/redux-mitt/tree/master)

## what is this?

The redux standard API does not have an easy way to subscribe Actions and unsubscribe them.added this as a lightweight function.

## install

```sh
$ npm install --save redux-mitt
```

## setup

```javascript
import { createStore, applyMiddleware } from 'redux'
import { mittMiddleware } from 'redux-mitt'

const reducer = () => {}
const store = createStore(reducer, mittMiddleware())
```
## usage

```javascript
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

### subscribeAction(type, handler)

The first argument specifies the action type. Specific action `ex:) 'SOME_ACTION'` or wildcard `'*'` can subscribe.The second argument is callback with action.
