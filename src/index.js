import mitt from 'mitt'

const mittMiddleware = store => next => action => {
  const m = mitt()
  const store = next(action)
  const dispatch = action => {
    m.emit(action.type, action)
    return store.dispatch(action)
  }
  const subscribeAction = (type, handler) => {
    m.on(type, handler)
    return () => m.off(type, handler)
  }
  return {
    ...store,
    dispatch,
    subscribeAction
  }
}

export { mittMiddleware  }
