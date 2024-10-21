/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstFeatureTile.module.css'

const BstFeatureTile = (props) => {
  return (
    <Container
      tag="section"
      id="features"
      className={` ${styles['bst-feature-tile']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div01']}>
          <Container className={styles['div02']}>
            <Text
              tag="h2"
              text="A better way to start building."
              className={styles['h-2']}
            />
          </Container>
          <Container className={styles['div03']}>
            <Container className={styles['div04']}>
              <Container className={styles['div05']}>
                <Container className={styles['div06']}>
                  <i className={styles['i']} />
                </Container>
                <Text
                  tag="h2"
                  text="Featured title"
                  className={styles['h-21']}
                />
                <Text
                  tag="p"
                  text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
                  className={styles['p']}
                />
              </Container>
              <Container className={styles['div07']}>
                <Container className={styles['div08']}>
                  <i className={styles['i1']} />
                </Container>
                <Text
                  tag="h2"
                  text="Featured title"
                  className={styles['h-22']}
                />
                <Text
                  tag="p"
                  text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
                  className={styles['p1']}
                />
              </Container>
              <Container className={styles['div09']}>
                <Container className={styles['div10']}>
                  <i className={styles['i2']} />
                </Container>
                <Text
                  tag="h2"
                  text="Featured title"
                  className={styles['h-23']}
                />
                <Text
                  tag="p"
                  text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
                  className={styles['p2']}
                />
              </Container>
              <Container className={styles['div11']}>
                <Container className={styles['div12']}>
                  <i className={styles['i3']} />
                </Container>
                <Text
                  tag="h2"
                  text="Featured title"
                  className={styles['h-24']}
                />
                <Text
                  tag="p"
                  text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
                  className={styles['p3']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstFeatureTile.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstFeatureTile.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstFeatureTile)
