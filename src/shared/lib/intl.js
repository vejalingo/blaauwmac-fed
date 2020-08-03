import { get, isString, isFinite, isUndefined, each, last } from 'lodash'
import defaultCopyData from 'copy'

let copyData = defaultCopyData
let locale = 'en'

export const updateCopyData = newCopyData => {
  copyData = newCopyData
}

export const updateLocale = newLocale => {
  if (!newLocale || locale === newLocale) return
  locale = newLocale
}

export const copy = (path, props = {}) => {
  const data = get(copyData[locale], path)

  if (isUndefined(data)) {
    return fallback(path)
  }
  if (isString(data)) {
    return interpolate(data, props)
  }
  if (!isUndefined(props.count)) {
    return pluralize(data, props) || fallback(path)
  }
  if (!isUndefined(props.context)) {
    return contextualize(data, props) || fallback(path)
  }
  return fallback(path)
}

const fallback = path => {
  console.error(`Warning: Copy string at path '${path}' for locale '${locale}' not found.`)
  return last(path.split('.'))
}

const interpolate = (str, props) => {
  each(props, (val, key) => {
    str = str.replace(`{${key}}`, val)
  })
  return str
}

const pluralize = (data, props) => {
  const n = +props.count
  if (!isFinite(n)) return false
  const str = data[`=${n}`] || data[pluralizationRules[locale](n)] || data.other
  return str ? interpolate(str, props) : false
}

const contextualize = (data, props) => {
  const str = data[props.context] || data.other
  return str ? interpolate(str, props) : false
}

export const goToCopy = basePath => (path, props) => copy(`${basePath}.${path}`, props)

export const getCurrentLocale = () => locale

const ONE = 'one'
const OTHER = 'other'

export const pluralizationRules = {
  en(n) {
    return n === 1 ? ONE : OTHER
  }
}
