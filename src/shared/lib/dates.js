import moment from 'moment'
import { isNil } from 'lodash'

const defaultDateFormat = 'DD/MM/YYYY'
const defaultTimeFormat = 'HH:MM A'

export const getDateFormat = () => defaultDateFormat

export const getTimeFormat = () => defaultTimeFormat

export const getCurrentDateTime = () => {
  return moment()
}

export const convertToDateTime = value => {
  return moment(value)
}

export const convertToUtc = value => {
  return moment(value).utc()
}

export const formatDate = value => (value ? moment(value).format(getDateFormat()) : value)

export const formatTime = value => (value ? moment(value).format(getTimeFormat()) : value)

export const formatDateTime = (value, format = 'date time', withSeconds = false) => {
  if (!value) return value
  const finalFormat = format
    .replace('date', getDateFormat())
    .replace('time', withSeconds ? 'HH:mm:ss' : getTimeFormat())
  return moment(value).format(finalFormat)
}

export const formattedDateToISO = value =>
  value ? moment(value, getDateFormat()).toISOString() : value

export const isValidDateFormat = value => moment(value, getDateFormat(), true).isValid()

export const unixTimestamp = value => +new Date(value)

export const getDifference = (valA, valB) => moment(valA).diff(valB, 'days')
