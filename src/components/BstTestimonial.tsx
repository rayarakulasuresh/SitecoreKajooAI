/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstTestimonial.module.css'

const BstTestimonial = (props) => {
  return (
    <Container
      className={` ${styles['bst-testimonial']} ${styles[props.rootClassName]} component ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <Text text='"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"' />
              </Container>
              <Container className={styles['div5']}>
                <Image
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                  className={styles['img']}
                />
                <Container className={styles['div6']}>
                  <Text text="\n                                        Tom Ato\n                                        " />
                  <Text text="/" className={styles['span']} />
                  <Text text="\n                                        CEO, Pomodoro\n                                    " />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstTestimonial.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstTestimonial.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstTestimonial)
