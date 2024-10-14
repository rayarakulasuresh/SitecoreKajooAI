import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'OurProducts',
    displayName: 'OurProducts',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Title',
        type: 'Single-Line Text',
        standardValue: 'Our Products',
      },
      {
        name: 'List',
        type: 'Treelist',
        source:
          'DataSource=/Sitecore/Content&IncludeTemplatesForSelection=OurProductsList',
      },
    ],
  })
}
