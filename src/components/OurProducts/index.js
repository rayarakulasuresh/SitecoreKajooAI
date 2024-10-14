/* eslint-disable */
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import './style.css'

const OurProducts = (props) => {
  return (
    <Container className={`our-products-our-products ${props.rootClassName} ${props.params?.styles} `}>
      <Text text="Our Products" className="our-products-text" />
      <Container className="our-products-our-products1">
        <Container className="our-products-frame-7">
          <Container className="our-products-repeater">
            {props.fields.List.map((item, index) => (
              <Container key={index} className="our-products-featured-products">
                <Container className="our-products-description">
                  <Container className="our-products-price">
                    <Container className="our-products-frame-6">
                      <Text
                        text={item.fields.ProductDiscountedPrice}
                        className="our-products-discounted-price"
                      />
                      <Text
                        text={item.fields.Product_Original_Price}
                        className="our-products-original-price"
                      />
                    </Container>
                  </Container>
                  <Container className="our-products-productname">
                    <Text
                      text={item.fields.Product_Name}
                      className="our-products-text1"
                    />
                    <Text
                      text={item.fields.Product_Desc}
                      className="our-products-text2"
                    />
                  </Container>
                </Container>
                <Container className="our-products-images">
                  <Container className="our-products-image-5" />
                  <Image
                    src={item.fields.Product_Image}
                    alt="image11174"
                    className="our-products-image-1"
                  />
                </Container>
                <Container className="our-products-label">
                  <Container className="our-products-discount">
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALeSURBVHgB1ZlNbtNQEMfnPSqEWLkbIsSiyQkaTkB6g/QEhRPUyQXqXqBxT0A4Adyg6QkaTlCzQKiwCZsKCdWP//hLTuL4K4nx/BZx7LxIM57/2G9mFO2Ae9u2XhANDVFfEx0ppfqKyMK5lVrmGWM8n+grfpvjfPbadT3aEkU1YaNfEp3DyAEMHlA95r4x17SFM5UdiA2H0fbKHd4OY6aIzmVVRyo58GDbFzs3fBVjnI7rXpZdXsqBH7bd1Up9xtc+NYMHaZ2UiYYuWvBzNDp7ptQdNWc8wzfs7rttD4sW5jrwazy+gFyme5XMZqwDRJ1lm7doo4TYeITRoTaQkxeZDnDoDkLNtwYY+v7VZPIp4/oynLCs+f8kmzwWUMTb1cReywEkz00LjWcsnaGKJQdY9zh0qb30oRAnfSGRUPSsv6f2s3g0ptdz3QWfpCPgkAx442jHJ0EEBN39mCQKcQQGJIskCoEDeGyekzAgnXfBUaB8EiCjQ47AgITCVaBWze4ydwrbriGfY5KKUl2NMq5HQkEEjllCRyQXq7AiazniHSCW0IIEw0n8m+TiadSbcxIKKrRvnAMeCYV7rNqEjVaRsO0a+4kvJJeZPkRRgFDMSB5z7lAE7wGj1C0JI2rLhwXNc993Bb4PZvwROMAyQhSuSQho8U/jBleylZAUhSffT/qkiQNSogDtL01x1nqjmAdwX7StVZrXmUyW6pe13eiTMadtlJIKm7snq9fXHODwwIkRtYy/xnzIGjll1gNYOEWqlx607RvW/RvXzdwx5A75HsZjB7vV3BHPvomS1tn0e+GUEjOqIZ67H5ueGbDmWcqBGvLXFRN1726oudkBT/BPy4xZqw269ywpvuv8LupcXTkV/lONKBoOvp7RjogNf8RuIB5cVPhvPdgRHAZwhtvctbp7yKtb5NesjuExtR1IEzsT9FmV4rd4N90wC15CYfNgDgl6XEn9QSFV1+g0/wBrMiSzzhqGKgAAAABJRU5ErkJggg=="
                      alt="Ellipse31174"
                      className="our-products-ellipse-3"
                    />
                    <Text
                      text={item.fields.Discount_Percentage}
                      className="our-products-discount-percentage"
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

export default OurProducts
