/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './OurProducts.module.css'

const OurProducts = (props) => {
  return (
    <Container
      className={` ${styles['our-products']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Text text={props.fields.Title} className={styles['text']} />
      <Container className={styles['our-products1']}>
        <Container className={styles['frame-7']}>
          <Container className={styles['repeater']}>
            {props.fields.List.map((item, index) => (
              <Container key={index} className={styles['featured-products']}>
                <Container className={styles['description']}>
                  <Container className={styles['price']}>
                    <Container className={styles['frame-6']}>
                      <Text
                        text={item.fields.ProductDiscountedPrice}
                        className={styles['discounted-price']}
                      />
                      <Text
                        text={item.fields.Product_Original_Price}
                        className={styles['original-price']}
                      />
                    </Container>
                  </Container>
                  <Container className={styles['productname']}>
                    <Text
                      text={item.fields.Product_Name}
                      className={styles['text1']}
                    />
                    <Text
                      text={item.fields.Product_Desc}
                      className={styles['text2']}
                    />
                  </Container>
                </Container>
                <Container className={styles['images']}>
                  <Container className={styles['image-5']} />
                  <Image
                    src={item.fields.Product_Image}
                    alt="image11174"
                    className={styles['image-1']}
                  />
                </Container>
                <Container className={styles['label']}>
                  <Container className={styles['discount']}>
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALeSURBVHgB1ZlNbtNQEMfnPSqEWLkbIsSiyQkaTkB6g/QEhRPUyQXqXqBxT0A4Adyg6QkaTlCzQKiwCZsKCdWP//hLTuL4K4nx/BZx7LxIM57/2G9mFO2Ae9u2XhANDVFfEx0ppfqKyMK5lVrmGWM8n+grfpvjfPbadT3aEkU1YaNfEp3DyAEMHlA95r4x17SFM5UdiA2H0fbKHd4OY6aIzmVVRyo58GDbFzs3fBVjnI7rXpZdXsqBH7bd1Up9xtc+NYMHaZ2UiYYuWvBzNDp7ptQdNWc8wzfs7rttD4sW5jrwazy+gFyme5XMZqwDRJ1lm7doo4TYeITRoTaQkxeZDnDoDkLNtwYY+v7VZPIp4/oynLCs+f8kmzwWUMTb1cReywEkz00LjWcsnaGKJQdY9zh0qb30oRAnfSGRUPSsv6f2s3g0ptdz3QWfpCPgkAx442jHJ0EEBN39mCQKcQQGJIskCoEDeGyekzAgnXfBUaB8EiCjQ47AgITCVaBWze4ydwrbriGfY5KKUl2NMq5HQkEEjllCRyQXq7AiazniHSCW0IIEw0n8m+TiadSbcxIKKrRvnAMeCYV7rNqEjVaRsO0a+4kvJJeZPkRRgFDMSB5z7lAE7wGj1C0JI2rLhwXNc993Bb4PZvwROMAyQhSuSQho8U/jBleylZAUhSffT/qkiQNSogDtL01x1nqjmAdwX7StVZrXmUyW6pe13eiTMadtlJIKm7snq9fXHODwwIkRtYy/xnzIGjll1gNYOEWqlx607RvW/RvXzdwx5A75HsZjB7vV3BHPvomS1tn0e+GUEjOqIZ67H5ueGbDmWcqBGvLXFRN1726oudkBT/BPy4xZqw269ywpvuv8LupcXTkV/lONKBoOvp7RjogNf8RuIB5cVPhvPdgRHAZwhtvctbp7yKtb5NesjuExtR1IEzsT9FmV4rd4N90wC15CYfNgDgl6XEn9QSFV1+g0/wBrMiSzzhqGKgAAAABJRU5ErkJggg=="
                      alt="Ellipse31174"
                      className={styles['ellipse-3']}
                    />
                    <Text
                      text={item.fields.Discount_Percentage}
                      className={styles['discount-percentage']}
                    />
                  </Container>
                </Container>
              </Container>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

OurProducts.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

OurProducts.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(OurProducts)
