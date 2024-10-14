import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'OurProductsList',
    displayName: 'OurProductsList',
    fields: [
      {
        name: 'Product_Name',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
      {
        name: 'Discount_Percentage',
        type: 'Single-Line Text',
        standardValue: '-30%',
      },
      {
        name: 'Product_Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
      {
        name: 'Product_Desc',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
      {
        name: 'ProductDiscountedPrice',
        type: 'Single-Line Text',
        standardValue: 'Rp 2.500.000',
      },
      {
        name: 'Product_Original_Price',
        type: 'Single-Line Text',
        standardValue: 'Rp 3.500.000',
      },
    ],
  })
}
