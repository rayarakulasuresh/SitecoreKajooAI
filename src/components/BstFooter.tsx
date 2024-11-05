/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstFooter.module.css'

const BstFooter = (props) => {
  return (
    <Container
      tag="footer"
      className={` ${styles['bst-footer']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Text text="Copyright © Your Website 2023" />
            </Container>
          </Container>
          <Container className={styles['div4']}>
            <Link href="#!" text="Privacy" className={styles['a']} />
            <Text text="·" className={styles['span']} />
            <Link href="#!" text="Terms" className={styles['a1']} />
            <Text text="·" className={styles['span1']} />
            <Link href="#!" text="Contact" className={styles['a2']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstFooter.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstFooter.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstFooter)
