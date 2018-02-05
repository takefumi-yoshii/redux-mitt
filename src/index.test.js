import { createStore, applyMiddleware } from 'redux'
import mittMiddleware from './index'

const reducer = () => {}
const store = createStore(reducer, mittMiddleware())

describe('#subscribeAction', () => {
  const type = 'TEST'
  const payload = { test: 'test' }
  const creator = () => { return { type, payload }}
  const unsubscribe = store.subscribeAction(type, action => {
    test('#test', () => expect(action).toEqual(creator()))
  })
  // unsubscribe() # unsubscribe action
  store.dispatch(creator())
})
