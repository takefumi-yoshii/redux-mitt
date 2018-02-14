import { createStore, applyMiddleware } from 'redux'
import { mittMiddleware } from './index'

const reducer = () => {}
const store = createStore(reducer, mittMiddleware())

describe('#subscribeAction', () => {
  const payload = { test: 'test' }
  store.subscribeAction('TEST', action => {
    test('#subscribe specific action', () => expect(action).toEqual({ type: 'TEST', payload }))
  })
  store.subscribeAction('*', (type, action) => {
    test('#subscribe wildcard action', () => expect(action).toEqual({ type: 'TEST', payload }))
  })
  store.dispatch({ type: 'TEST', payload })

  test('#throw error', () => {
    const wrongArgument = () => store.subscribeAction(0, (type, action) => {})
    expect(wrongArgument).toThrowError('First argument must be string of action.')
  })
  test('#throw error', () => {
    const wrongArgument = () => store.subscribeAction('TEST', 'TEST')
    expect(wrongArgument).toThrowError('Second argument must be function.')
  })
})
