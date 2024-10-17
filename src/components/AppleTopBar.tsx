/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleTopBar.module.css'

const AppleTopBar = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Container className={styles['top-nav']}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNCA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzFfNCknPgo8cGF0aCBkPSdNMTMuMDcyOSAxNy41MjE0QzEyLjk3OTkgMTcuNTkzNyAxMS4zNDgxIDE4LjUxMjkgMTEuMzQ4MSAyMC41NTc4QzExLjM0ODEgMjIuOTIyOSAxMy40MjQgMjMuNzU5NSAxMy40ODYgMjMuNzgwMUMxMy40NzU3IDIzLjgzMTcgMTMuMTU1NSAyNC45MjY1IDEyLjM5MTIgMjYuMDQxOUMxMS43MDk2IDI3LjAyMzEgMTAuOTk2OSAyOC4wMDQyIDkuOTEyNDggMjguMDA0MkM4LjgyODA4IDI4LjAwNDIgOC41NDkxOCAyNy4zNzQyIDcuMjk5NDggMjcuMzc0MkM2LjA4MDc4IDI3LjM3NDIgNS42NDY5OCAyOC4wMjQ5IDQuNjU1NDggMjguMDI0OUMzLjY2Mzk4IDI4LjAyNDkgMi45NzE5OCAyNy4xMTYgMi4xNzY3OCAyNi4wMDA2QzEuMjU3NTggMjQuNjg4OSAwLjUxMzk3NyAyMi42NTQzIDAuNTEzOTc3IDIwLjcyM0MwLjUxMzk3NyAxNy42MjQ2IDIuNTI3OTggMTUuOTgyNCA0LjUxMDg4IDE1Ljk4MjRDNS41NjQzOCAxNS45ODI0IDYuNDQyMTggMTYuNjc0NCA3LjEwMzE4IDE2LjY3NDRDNy43MzMxOCAxNi42NzQ0IDguNzE0MzggMTUuOTQxMSA5LjkxMjM4IDE1Ljk0MTFDMTAuMzY2OSAxNS45NDEyIDExLjk5ODggMTUuOTgyNiAxMy4wNzI5IDE3LjUyMTRaTTkuMzQ0NDggMTQuNjI5NkM5Ljg0MDE4IDE0LjA0MDkgMTAuMTkxNCAxMy4yMjUgMTAuMTkxNCAxMi40MDkxQzEwLjE5MTQgMTIuMjk1NSAxMC4xODExIDEyLjE4MTkgMTAuMTYwNCAxMi4wODg5QzkuMzU0NzggMTIuMTE5OSA4LjM5NDI4IDEyLjYyNiA3LjgxNTg4IDEzLjI5NzNDNy4zNjE0OCAxMy44MTM3IDYuOTM3OTggMTQuNjI5NiA2LjkzNzk4IDE1LjQ1NTlDNi45Mzc5OCAxNS41Nzk4IDYuOTU4NjggMTUuNzAzOCA2Ljk2ODk4IDE1Ljc0NTFDNy4wMjA1OCAxNS43NTU0IDcuMTAzMjggMTUuNzY1OCA3LjE4NTg4IDE1Ljc2NThDNy45MDg4OCAxNS43NjU3IDguODE3NjggMTUuMjgwMyA5LjM0NDQ4IDE0LjYyOTZaJyBmaWxsPSd3aGl0ZScvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzFfNCc+CjxyZWN0IHdpZHRoPScxNCcgaGVpZ2h0PSc0NCcgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
          alt="globalnavappleimageb5er5ngrzxqqlarge14"
          className={styles['globalnavappleimageb-5-er-5-ngrzxqqlarge']}
        />
        <Container className={styles['navlinks']}>
          <Text text="Store" className={styles['text']} />
          <Text text="Mac" className={styles['text01']} />
          <Text text="IPad" className={styles['text02']} />
          <Text text="iPhone" className={styles['text03']} />
          <Text text="Wacth" className={styles['text04']} />
          <Text text="AirPods" className={styles['text05']} />
          <Text text="TV &amp; Home" className={styles['text06']} />
          <Text text="Only on Apple" className={styles['text07']} />
          <Text text="Accessories" className={styles['text08']} />
          <Text text="Support" className={styles['text09']} />
        </Container>
        <Container className={styles['group-1']}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNSAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEzLjk3OTkgMTIuNTkzMUwxMC40Nzk5IDkuMDkzMDhDMTEuMzYxNiA4LjAxMzI1IDExLjc5NDggNi42MzU5NiAxMS42ODk4IDUuMjQ1ODRDMTEuNTg0OSAzLjg1NTczIDEwLjk0OTkgMi41NTkwNiA5LjkxNjEyIDEuNjIzODJDOC44ODIzMiAwLjY4ODU3MiA3LjUyODczIDAuMTg2MjQ0IDYuMTM1MDggMC4yMjA2NTJDNC43NDE0NCAwLjI1NTA2IDMuNDE0MjggMC44MjM1NzEgMi40Mjc4OSAxLjgwODY5QzEuNDQxNTEgMi43OTM4MSAwLjg3MTI4NyA0LjEyMDI0IDAuODM1MDg3IDUuNTEzODNDMC43OTg4ODcgNi45MDc0MyAxLjI5OTQ3IDguMjYxNjggMi4yMzMzOCA5LjI5NjY4QzMuMTY3MyAxMC4zMzE3IDQuNDYzMTUgMTAuOTY4MyA1Ljg1MzEzIDExLjA3NUM3LjI0MzEgMTEuMTgxOCA4LjYyMDk1IDEwLjc1MDQgOS43MDE5MiA5Ljg3MDA4TDEzLjIwMTkgMTMuMzcwMUMxMy4zMDUxIDEzLjQ3MzMgMTMuNDQ1IDEzLjUzMTIgMTMuNTkwOSAxMy41MzEyQzEzLjczNjggMTMuNTMxMiAxMy44NzY3IDEzLjQ3MzMgMTMuOTc5OSAxMy4zNzAxQzE0LjA4MzEgMTMuMjY2OSAxNC4xNDEgMTMuMTI3IDE0LjE0MSAxMi45ODExQzE0LjE0MSAxMi44MzUyIDE0LjA4MzEgMTIuNjk1MyAxMy45Nzk5IDEyLjU5MjFWMTIuNTkzMVpNMS45NTg5MiA1LjY2ODA4QzEuOTU5MTIgNC44MTM5IDIuMjEyNTkgMy45Nzg5NyAyLjY4NzI5IDMuMjY4ODRDMy4xNjE5OCAyLjU1ODcyIDMuODM2NTkgMi4wMDUzIDQuNjI1OCAxLjY3ODU2QzUuNDE1MDEgMS4zNTE4MiA2LjI4MzM5IDEuMjY2NDMgNy4xMjExMyAxLjQzMzE5QzcuOTU4ODYgMS41OTk5NSA4LjcyODM0IDIuMDExMzggOS4zMzIyNiAyLjYxNTQ0QzkuOTM2MTkgMy4yMTk1IDEwLjM0NzQgMy45ODkwNyAxMC41MTQgNC44MjY4NUMxMC42ODA2IDUuNjY0NjMgMTAuNTk1IDYuNTMyOTkgMTAuMjY4MSA3LjMyMjEyQzkuOTQxMTMgOC4xMTEyNiA5LjM4NzU2IDguNzg1NzMgOC42NzczMiA5LjI2MDI2QzcuOTY3MDkgOS43MzQ4IDcuMTMyMDkgOS45ODgwOCA2LjI3NzkyIDkuOTg4MDhDNS4xMzI2IDkuOTg3MDIgNC4wMzQ1MSA5LjUzMTUxIDMuMjI0NzQgOC43MjE1NUMyLjQxNDk3IDcuOTExNiAxLjk1OTcxIDYuODEzNCAxLjk1ODkyIDUuNjY4MDhaJyBmaWxsPScjRjVGNUY3Jy8+Cjwvc3ZnPgo="
            alt="Vector120"
            className={styles['vector']}
          />
        </Container>
        <Container className={styles['globalnavbagimageyzte-50-i-47-ciularge']}>
          <Container className={styles['group']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxMyAxNScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMiAxMi45QzEyIDEzLjUgMTEuNSAxNCAxMC45IDE0SDIuMUMxLjUgMTQgMSAxMy41IDEgMTIuOVY1QzEgNC41IDEuNSA0IDIuMSA0SDExQzExLjYgNCAxMi4xIDQuNSAxMi4xIDUuMVYxMi45SDEyWk02LjUgMUM3LjcgMSA4LjYgMS45IDguOCAzSDQuMkM0LjQgMS45IDUuMyAxIDYuNSAxWk0xMC45IDNIOS44QzkuNiAxLjMgOC4yIDAgNi41IDBDNC44IDAgMy40IDEuMyAzLjIgM0gyLjFDMC45IDMgMCAzLjkgMCA1LjFWMTNDMCAxNC4xIDAuOSAxNSAyLjEgMTVIMTFDMTIuMSAxNSAxMy4xIDE0LjEgMTMuMSAxMi45VjVDMTMgMy45IDEyLjEgMyAxMC45IDNaJyBmaWxsPScjRjVGNUY3Jy8+Cjwvc3ZnPgo="
              alt="Vector124"
              className={styles['vector1']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppleTopBar.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AppleTopBar.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(AppleTopBar)
