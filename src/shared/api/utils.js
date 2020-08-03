import { omit } from 'lodash'

export const buildQuery = (query = {}) =>
  `${Object.keys(query)
    .reduce(
      (items, item) =>
        query[item] || query[item] === 0 ? [...items, `${item}=${query[item]}`] : items,
      []
    )
    .join('&')}`

export const buildUrl = (path, query = {}) => {
  query = buildQuery(query)
  return `${path}${query ? '?' : ''}${query}`
}

export const paginateQuery = (query = {}) => {
  const { page = 1, perPage = 1000 } = query
  return omit(
    {
      ...query,
      take: perPage,
      skip: perPage * (page - 1)
    },
    ['page', 'perPage']
  )
}
