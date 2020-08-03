import React, { Component } from 'react'
import { transform } from 'lodash'
import { goToCopy, getCurrentLocale } from 'shared/lib/intl'

export default (keys = {}) => Child => {
  const copies = transform(keys, (ret, path, name) => {
    ret[name] = goToCopy(path)
  })
  copies.shared = goToCopy('shared')

  class Intl extends Component {
    constructor() {
      super()
      this.forceUpdate = this.forceUpdate.bind(this)
    }

    render() {
      return <Child {...this.props} copy={copies} _intlForceRender={getCurrentLocale()} />
    }
  }

  return Intl
}
