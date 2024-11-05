/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstOurBolg.module.css'

const BstOurBolg = (props) => {
  return (
    <Container
      className={` ${styles['bst-our-bolg']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text="From our blog" className={styles['h-2']} />
          <Text
            tag="p"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad."
            className={styles['p']}
          />
        </Container>
      </Container>
    </Container>
  )
}

BstOurBolg.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstOurBolg.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstOurBolg)
