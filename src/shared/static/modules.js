import { goToCopy } from 'shared/lib/intl'

const copy = goToCopy('shared.modules')

export const getModules = id =>
  !id
    ? []
    : [
        {
          title: copy('Claims'),
          key: 'claims',
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
            },
            {
              title: copy('Overview'),
              icon: 'pie-chart',
              link: `/overview`
            }
          ]
        },
        {
          title: copy('Underwriting'),
          key: 'underwriting',
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
              link: `/underwriting/${id}/policy-documents`
            },
            {
              title: 'Cover Summary',
              link: `/underwriting/${id}/cover-summary`,
              icon: 'notification'
            },
            {
              title: 'Endorsements',
              link: `/underwriting/${id}/endorsments`,
              icon: 'mail'
            },
            {
              title: 'SASRIA for Councilors',
              link: `/underwriting/${id}/sasria`,
              icon: 'number'
            },

            {
              title: 'Policy Structure',
              link: `/underwriting/${id}/policy-structure`,
              icon: 'project'
            },
            {
              title: 'Outstanding Invoices',
              link: `/underwriting/${id}/outstanding-invoices`,
              icon: 'filter'
            },
            {
              title: 'Additional Insurance Policy',
              link: `/underwriting/${id}/additional-insurance`,
              icon: 'filter'
            }
          ]
        }
      ]
