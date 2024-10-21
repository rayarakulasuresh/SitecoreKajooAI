import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BstBannerImage',
    displayName: 'BstBannerImage',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Title',
        type: 'Single-Line Text',
        standardValue: 'A Bootstrap 5 template for modern businesses',
      },
      {
        name: 'Description',
        type: 'Single-Line Text',
        standardValue:
          'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!',
      },
      {
        name: 'LinkButton1',
        type: 'Single-Line Text',
        standardValue: 'Get Started',
      },
      {
        name: 'LinkButton2',
        type: 'Single-Line Text',
        standardValue: 'Learn More',
      },
      {
        name: 'Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
    ],
  })
}
