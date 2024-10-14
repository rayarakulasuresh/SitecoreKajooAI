/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './PopUp.module.css'

const PopUp = (props) => {
  return (
    <Container
      className={` ${styles['pop-up']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['button']}>
        <Container className={styles['cta']}>
          <Text text="Add to cart" className={styles['text']} />
        </Container>
        <Container className={styles['frame-5']}>
          <Container className={styles['frame-11']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDEwLjY2NjdDMTEuNDc0NyAxMC42NjY3IDExIDEwLjg3MzQgMTAuNjQ0IDExLjIwNDdMNS45NCA4LjQ2NjcxQzUuOTczMzMgOC4zMTMzNyA2IDguMTYwMDQgNiA4LjAwMDA0QzYgNy44NDAwNCA1Ljk3MzMzIDcuNjg2NzEgNS45NCA3LjUzMzM3TDEwLjY0IDQuNzkzMzdDMTEgNS4xMjY3MSAxMS40NzMzIDUuMzMzMzcgMTIgNS4zMzMzN0MxMy4xMDY3IDUuMzMzMzcgMTQgNC40NDAwNCAxNCAzLjMzMzM3QzE0IDIuMjI2NzEgMTMuMTA2NyAxLjMzMzM3IDEyIDEuMzMzMzdDMTAuODkzMyAxLjMzMzM3IDEwIDIuMjI2NzEgMTAgMy4zMzMzN0MxMCAzLjQ5MzM3IDEwLjAyNjcgMy42NDY3MSAxMC4wNiAzLjgwMDA0TDUuMzYgNi41NDAwNEM1IDYuMjA2NzEgNC41MjY2NyA2LjAwMDA0IDQgNi4wMDAwNEMyLjg5MzMzIDYuMDAwMDQgMiA2Ljg5MzM3IDIgOC4wMDAwNEMyIDkuMTA2NzEgMi44OTMzMyAxMCA0IDEwQzQuNTI2NjcgMTAgNSA5Ljc5MzM3IDUuMzYgOS40NjAwNEwxMC4wNTg3IDEyLjIwNTRDMTAuMDIxMSAxMi4zNTYzIDEwLjAwMTQgMTIuNTExMiAxMCAxMi42NjY3QzEwIDEzLjA2MjMgMTAuMTE3MyAxMy40NDg5IDEwLjMzNzEgMTMuNzc3OEMxMC41NTY4IDE0LjEwNjcgMTAuODY5MiAxNC4zNjMxIDExLjIzNDYgMTQuNTE0NUMxMS42MDAxIDE0LjY2NTggMTIuMDAyMiAxNC43MDU0IDEyLjM5MDIgMTQuNjI4M0MxMi43NzgxIDE0LjU1MTEgMTMuMTM0NSAxNC4zNjA2IDEzLjQxNDIgMTQuMDgwOUMxMy42OTM5IDEzLjgwMTIgMTMuODg0NCAxMy40NDQ4IDEzLjk2MTYgMTMuMDU2OUMxNC4wMzg3IDEyLjY2ODkgMTMuOTk5MSAxMi4yNjY4IDEzLjg0NzggMTEuOTAxM0MxMy42OTY0IDExLjUzNTkgMTMuNDQgMTEuMjIzNSAxMy4xMTExIDExLjAwMzhDMTIuNzgyMiAxMC43ODQgMTIuMzk1NiAxMC42NjY3IDEyIDEwLjY2NjdWMTAuNjY2N1onIGZpbGw9J3doaXRlJy8+Cjwvc3ZnPgo="
              alt="gridiconsshareI117"
              className={styles['gridiconsshare']}
            />
            <Text text="Share" className={styles['text1']} />
          </Container>
          <Container className={styles['frame-12']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEwLjA4IDdMMTEuMDggOEwxNC41MiA0LjU1TDExIDFMMTAgMkwxMS44IDMuOEgyLjAwMDA0VjUuMkgxMS44MkwxMC4wOCA3Wk01Ljg2MDA0IDlMNC44NjAwNCA4TDEuNDIwMDQgMTEuNUw0LjkxMDA0IDE1TDUuOTEwMDQgMTRMNC4xMDAwNCAxMi4ySDE0VjEwLjhINC4xMDAwNEw1Ljg2MDA0IDlaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K"
              alt="comparesvgrepocom1I117"
              className={styles['comparesvgrepocom-1']}
            />
            <Text text="Compare" className={styles['text2']} />
          </Container>
          <Container className={styles['frame-10']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTcuOTk5NzMgMTQuMDM2MUMtNS4zMzMzMyA2LjY2NjY5IDMuOTk5OTkgLTEuMzMzMzEgNy45OTk3MyAzLjcyNTM5QzEyIC0xLjMzMzMxIDIxLjMzMzMgNi42NjY2OSA3Ljk5OTczIDE0LjAzNjFaJyBzdHJva2U9J3doaXRlJyBzdHJva2Utd2lkdGg9JzEuOCcvPgo8L3N2Zz4K"
              alt="HeartI117"
              className={styles['heart']}
            />
            <Text text="Like" className={styles['text3']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

PopUp.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

PopUp.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default PopUp
