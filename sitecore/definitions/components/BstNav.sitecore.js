import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BstNav',
    displayName: 'BstNav',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Logo_Link',
        type: 'General Link',
        standardValue:
          "<link text='Link' linktype='external' url='/' anchor='' target=''/>",
      },
      {
        name: 'List',
        type: 'Treelist',
        source:
          'DataSource=/Sitecore/Content&IncludeTemplatesForSelection=BstNavList',
      },
    ],
  })
}
