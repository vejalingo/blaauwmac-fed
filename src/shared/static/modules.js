import { goToCopy } from 'shared/lib/intl'

const copy = goToCopy('shared.modules')

export const getModules = id =>
  !id
    ? []
    : [
        {
          title: copy('Claims'),
          key: 'modules',
          icon: 'exclamation-circle',
          link: `/claims/`,
          sub: [
            {
              title: copy('New Claim Registration'),
              icon: 'form',
              link: `/claims/${id}/create`
            },
            {
              title: copy('Claim Forms'),
              icon: 'file-pdf',
              link: `/claims/${id}/forms`
            },
            {
              title: copy('Claims Report'),
              icon: 'project',
              link: `/claims/${id}/reports`
            }
          ]
        },
        {
          title: copy('Underwriting'),
          key: 'modules',
          icon: 'snippets',
          link: `/underwriting/${id}`,
          sub: [
            {
              title: copy('Overview'),
              icon: 'control',
              link: `/underwriting/${id}/overview`
            },
            {
              title: copy('Policy Documents'),
              icon: 'control',
              link: `/underwriting/${id}/overview`
            },
            {
              title: 'Cover Summary',
              link: `/underwriting/${id}/overview`,
              icon: 'notification'
            },
            {
              title: 'Endorsements',
              link: `/underwriting/${id}/overview`,
              icon: 'mail'
            },
            {
              title: 'SASRIA for Councilors',
              link: `/underwriting/${id}/overview`,
              icon: 'number'
            },

            {
              title: 'Policy Structure',
              link: `/underwriting/${id}/overview`,
              icon: 'project'
            },
            {
              title: 'Outstanding Invoices',
              link: `/underwriting/${id}/overview`,
              icon: 'filter'
            },
            {
              title: 'Additional Insurance Policy',
              link: `/underwriting/${id}/overview`,
              icon: 'filter'
            }
          ]
        }
      ]
