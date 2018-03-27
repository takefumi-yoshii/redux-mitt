import mitt from 'mitt'

const mittMiddleware = () => {
  return createStore => (...args) => {
    const m = mitt()
    const store = createStore(...args)
    const dispatch = action => {
      store.dispatch(action)
      m.emit(action.type, action)
    }
    const subscribeAction = (type, handler) => {
      if (typeof type !== 'string') throw new TypeError("First argument must be string of action.")
      if (typeof handler !== 'function') throw new TypeError("Second argument must be function.")
      m.on(type, handler)
      return () => m.off(type, handler)
    }
    return {
      ...store,
      dispatch,
      subscribeAction
    }
  }
}

export { mittMiddleware  }
