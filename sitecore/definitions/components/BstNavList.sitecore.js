import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'BstNavList',
    displayName: 'BstNavList',
    fields: [
      {
        name: 'hyperLink',
        type: 'General Link',
        standardValue:
          "<link text='Home' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
