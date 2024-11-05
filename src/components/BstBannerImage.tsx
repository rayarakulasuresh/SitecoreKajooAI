/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstBannerImage.module.css'

const BstBannerImage = (props) => {
  return (
    <Container
      tag="header"
      className={` ${styles['bst-banner-image']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Text
                tag="h1"
                text={props.fields.Title}
                className={styles['h-1']}
              />
              <Text
                tag="p"
                text={props.fields.Description}
                className={styles['p']}
              />
              <Container className={styles['div4']}>
                <Link
                  href="#features"
                  text={props.fields.LinkButton1}
                  className={styles['a']}
                />
                <Link
                  href="#!"
                  text={props.fields.LinkButton2}
                  className={styles['a1']}
                />
              </Container>
            </Container>
          </Container>
          <Container className={styles['div5']}>
            <Image
              src={props.fields.Image}
              alt="..."
              className={styles['img']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstBannerImage.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstBannerImage.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstBannerImage)
