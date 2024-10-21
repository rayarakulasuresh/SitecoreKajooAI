/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image, Text, Link } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BstBlogTitle.module.css'

const BstBlogTitle = (props) => {
  return (
    <Container
      className={` ${styles['bst-blog-title']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div01']}>
          <Image
            src="https://dummyimage.com/600x350/ced4da/6c757d"
            alt="..."
            className={styles['img']}
          />
          <Container className={styles['div02']}>
            <Container className={styles['div03']}>
              <Text text="News" />
            </Container>
            <Link href="#!" className={styles['a']}>
              <Text tag="h5" text="Blog post title" className={styles['h-5']} />
            </Link>
            <Text
              tag="p"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              className={styles['p']}
            />
          </Container>
          <Container className={styles['div04']}>
            <Container className={styles['div05']}>
              <Container className={styles['div06']}>
                <Image
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                  className={styles['img1']}
                />
                <Container className={styles['div07']}>
                  <Container className={styles['div08']}>
                    <Text text="Kelly Rowan" />
                  </Container>
                  <Container className={styles['div09']}>
                    <Text text="March 12, 2023 · 6 min read" />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={styles['div10']}>
        <Container className={styles['div11']}>
          <Image
            src="https://dummyimage.com/600x350/adb5bd/495057"
            alt="..."
            className={styles['img2']}
          />
          <Container className={styles['div12']}>
            <Container className={styles['div13']}>
              <Text text="Media" />
            </Container>
            <Link href="#!" className={styles['a1']}>
              <Text
                tag="h5"
                text="Another blog post title"
                className={styles['h-51']}
              />
            </Link>
            <Text
              tag="p"
              text="This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content."
              className={styles['p1']}
            />
          </Container>
          <Container className={styles['div14']}>
            <Container className={styles['div15']}>
              <Container className={styles['div16']}>
                <Image
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                  className={styles['img3']}
                />
                <Container className={styles['div17']}>
                  <Container className={styles['div18']}>
                    <Text text="Josiah Barclay" />
                  </Container>
                  <Container className={styles['div19']}>
                    <Text text="March 23, 2023 · 4 min read" />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={styles['div20']}>
        <Container className={styles['div21']}>
          <Image
            src="https://dummyimage.com/600x350/6c757d/343a40"
            alt="..."
            className={styles['img4']}
          />
          <Container className={styles['div22']}>
            <Container className={styles['div23']}>
              <Text text="News" />
            </Container>
            <Link href="#!" className={styles['a2']}>
              <Text
                tag="h5"
                text="The last blog post title is a little bit longer than the others"
                className={styles['h-52']}
              />
            </Link>
            <Text
              tag="p"
              text="Some more quick example text to build on the card title and make up the bulk of the card's content."
              className={styles['p2']}
            />
          </Container>
          <Container className={styles['div24']}>
            <Container className={styles['div25']}>
              <Container className={styles['div26']}>
                <Image
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                  className={styles['img5']}
                />
                <Container className={styles['div27']}>
                  <Container className={styles['div28']}>
                    <Text text="Evelyn Martinez" />
                  </Container>
                  <Container className={styles['div29']}>
                    <Text text="April 2, 2023 · 10 min read" />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BstBlogTitle.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

BstBlogTitle.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(BstBlogTitle)
