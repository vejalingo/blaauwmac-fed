import { each, get } from 'lodash'

let browserHasStorage = true
try {
  localStorage.setItem('testprop', 'testval')
  localStorage.removeItem('testprop')
} catch (e) {
  browserHasStorage = false
}

const storage = {}

if (browserHasStorage) {
  each([['session', 'sessionStorage'], ['local', 'localStorage']], types => {
    ;(([type, windowType]) => {
      storage[type] = {
        get: key => window[windowType].getItem(key),
        set: (key, val) => window[windowType].setItem(key, val),
        remove: key => window[windowType].removeItem(key),
        clear: () => window[windowType].clear(),

        getObj: (key, path) => {
          const str = window[windowType].getItem(key)
          if (!str) return null
          const obj = JSON.parse(str)
          return path ? get(obj, path) : obj
        },
        setObj: (key, callback) => {
          const str = window[windowType].getItem(key)
          const obj = str ? JSON.parse(str) : {}
          const updatedObject = callback(obj)
          window[windowType].setItem(key, JSON.stringify(updatedObject))
        }
      }
    })(types)
  })
} else {
  const stores = { session: {}, local: {} }

  each(['session', 'local'], storeType => {
    ;(type => {
      storage[type] = {
        get: key => stores[type][key],
        set: (key, val) => (stores[type][key] = val),
        remove: key => delete stores[type][key],
        clear: () => (stores[type] = {}),

        getObj: (key, path) => {
          const str = stores[type][key]
          if (!str) return null
          const obj = JSON.parse(str)
          return path ? get(obj, path) : obj
        },
        setObj: (key, callback) => {
          const obj = stores[type][key] ? JSON.parse(stores[type][key]) : {}
          const updatedObject = callback(obj)
          stores[type][key] = JSON.stringify(updatedObject)
        }
      }
    })(storeType)
  })
  alert(
    'Your web browser does not support storing settings locally. ' +
      'The most common cause of this is using "Private Browsing Mode". ' +
      'Some features may not work properly for you.'
  )
}

export default storage
