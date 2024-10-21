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
          href="index.html"
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
            <li className={styles['li']}>
              <Link href="index.html" text="Home" className={styles['a01']} />
            </li>
            <li className={styles['li01']}>
              <Link href="about.html" text="About" className={styles['a02']} />
            </li>
            <li className={styles['li02']}>
              <Link
                href="contact.html"
                text="Contact"
                className={styles['a03']}
              />
            </li>
            <li className={styles['li03']}>
              <Link
                href="pricing.html"
                text="Pricing"
                className={styles['a04']}
              />
            </li>
            <li className={styles['li04']}>
              <Link href="faq.html" text="FAQ" className={styles['a05']} />
            </li>
            <li className={styles['li05']}>
              <Link
                id="navbarDropdownBlog"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                text="Blog"
                className={styles['a06']}
              />
              <ul
                aria-labelledby="navbarDropdownBlog"
                className={styles['ul1']}
              >
                <li className={styles['li06']}>
                  <Link
                    href="blog-home.html"
                    text="Blog Home"
                    className={styles['a07']}
                  />
                </li>
                <li className={styles['li07']}>
                  <Link
                    href="blog-post.html"
                    text="Blog Post"
                    className={styles['a08']}
                  />
                </li>
              </ul>
            </li>
            <li className={styles['li08']}>
              <Link
                id="navbarDropdownPortfolio"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                text="Portfolio"
                className={styles['a09']}
              />
              <ul
                aria-labelledby="navbarDropdownPortfolio"
                className={styles['ul2']}
              >
                <li className={styles['li09']}>
                  <Link
                    href="portfolio-overview.html"
                    text="Portfolio Overview"
                    className={styles['a10']}
                  />
                </li>
                <li className={styles['li10']}>
                  <Link
                    href="portfolio-item.html"
                    text="Portfolio Item"
                    className={styles['a11']}
                  />
                </li>
              </ul>
            </li>
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
