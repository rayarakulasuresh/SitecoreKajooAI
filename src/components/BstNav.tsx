/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Link, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstNav.module.css'

const BstNav = (props) => {
  return (
    <Container
      tag="nav"
      className={` ${styles['bst-nav']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Link
          href={props.fields['Logo_Link']}
          text="Start Bootstrap"
          className={styles['a']}
        />
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className={styles['button']}
        >
          <Text className={styles['span']} />
        </button>
        <Container id="navbarSupportedContent" className={styles['div1']}>
          <ul className={styles['ul']}>
            <Container className={styles['repeater']}>
              {props.fields.List.map((item, index) => (
                <li key={index} className={styles['li']}>
                  <Link
                    href="index.html"
                    text="Home"
                    className={styles['a1']}
                  />
                </li>
              ))}
            </Container>
          </ul>
        </Container>
      </Container>
    </Container>
  )
}

BstNav.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstNav.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstNav)
