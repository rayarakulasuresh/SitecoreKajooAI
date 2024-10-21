/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstNewsLetter.module.css'

const BstNewsLetter = (props) => {
  return (
    <Container
      tag="aside"
      className={` ${styles['bst-news-letter']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Text text="New products, delivered to you." />
          </Container>
          <Container className={styles['div3']}>
            <Text text="Sign up for our newsletter for the latest updates." />
          </Container>
        </Container>
        <Container className={styles['div4']}>
          <Container className={styles['div5']}>
            <input
              type="text"
              placeholder="Email address..."
              aria-label="Email address..."
              aria-describedby="button-newsletter"
              className={styles['input']}
            />
            <button
              id="button-newsletter"
              type="button"
              className={styles['button']}
            >
              <Text text="Sign up" />
            </button>
          </Container>
          <Container className={styles['div6']}>
            <Text text="We care about privacy, and will never share your data." />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstNewsLetter.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstNewsLetter.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstNewsLetter)
