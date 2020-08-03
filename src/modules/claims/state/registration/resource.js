import { formatDate, formatDateTime } from 'shared/lib/dates'

export const toClient = item => ({
  ...item,
  date_loss: formatDate(item.date_loss),
  date_registration: formatDate(item.date_registration),
  date_acquired: formatDateTime(item.date_acquired),
  createdAt: formatDateTime(item.createdAt),
  updatedAt: formatDateTime(item.updatedAt)
})
