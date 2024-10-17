/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleFooter.module.css'

const AppleFooter = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Container className={styles['footer']}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAzMicgaGVpZ2h0PScyJyB2aWV3Qm94PScwIDAgMTAzMiAyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8bGluZSBvcGFjaXR5PScwLjInIHgxPSc0LjM3MTE0ZS0wOCcgeTE9JzAuNjg3NScgeDI9JzEwMzInIHkyPScwLjY4NzU5JyBzdHJva2U9JyM2RTZFNzMnLz4KPC9zdmc+Cg=="
          alt="Line11140"
          className={styles['line-1']}
        />
        <Container className={styles['frame-33']}>
          <Container className={styles['frame-28']}>
            <Text text="Shop and Learn" className={styles['text']} />
            <Container className={styles['frame-27']}>
              <Container tag="span" className={styles['text01']}>
                <Text text="Store" className={styles['text02']} />
                <Text text="Mac" className={styles['text03']} />
                <Text text="iPad" className={styles['text04']} />
                <Text text="iPhone" className={styles['text05']} />
                <Text text="Watch" className={styles['text06']} />
                <Text text="AirPods" className={styles['text07']} />
                <Text text="TV &amp; Home" className={styles['text08']} />
                <Text text="AirTag" className={styles['text09']} />
                <Text text="Accessories" className={styles['text10']} />
                <Text text="Gift Cards" className={styles['text11']} />
              </Container>
            </Container>
          </Container>
          <Container className={styles['frame-35']}>
            <Container className={styles['frame-331']}>
              <Text text="Services" className={styles['text12']} />
              <Container className={styles['frame-2701']}>
                <Container tag="span" className={styles['text13']}>
                  <Text text="Apple Music" className={styles['text14']} />
                  <Text text="Apple TV+" className={styles['text15']} />
                  <Text text="Apple Fitness+" className={styles['text16']} />
                  <Text text="Apple News+" className={styles['text17']} />
                  <Text text="Apple Arcade" className={styles['text18']} />
                  <Text text="iCloud" className={styles['text19']} />
                  <Text text="Apple One" className={styles['text20']} />
                  <Text text="Apple Card" className={styles['text21']} />
                  <Text text="Apple Books" className={styles['text22']} />
                  <Text text="Apple Podcasts" className={styles['text23']} />
                  <Text text="App Store" className={styles['text24']} />
                </Container>
              </Container>
            </Container>
            <Container className={styles['frame-34']}>
              <Text text="Account" className={styles['text25']} />
              <Container className={styles['frame-2702']}>
                <Container tag="span" className={styles['text26']}>
                  <Text
                    text="Manage Your Apple ID"
                    className={styles['text27']}
                  />
                  <Text
                    text="Apple Store Account"
                    className={styles['text28']}
                  />
                  <Text text="iCloud.com" className={styles['text29']} />
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className={styles['frame-36']}>
            <Text text="Apple Store" className={styles['text30']} />
            <Container className={styles['frame-2703']}>
              <Container tag="span" className={styles['text31']}>
                <Text text="Find a Store" className={styles['text32']} />
                <Text text="Genius Bar" className={styles['text33']} />
                <Text text="Today at Apple" className={styles['text34']} />
                <Text text="Apple Camp" className={styles['text35']} />
                <Text text="Apple Store App" className={styles['text36']} />
                <Text
                  text="Refurbished and Clearance"
                  className={styles['text37']}
                />
                <Text text="Financing" className={styles['text38']} />
                <Text text="Apple Trade In" className={styles['text39']} />
                <Text text="Order Status" className={styles['text40']} />
                <Text text="Shopping Help" className={styles['text41']} />
              </Container>
            </Container>
          </Container>
          <Container className={styles['frame-37']}>
            <Container className={styles['frame-332']}>
              <Text text="For Business" className={styles['text42']} />
              <Container className={styles['frame-2704']}>
                <Container tag="span" className={styles['text43']}>
                  <Text
                    text="Apple and Business"
                    className={styles['text44']}
                  />
                  <Text text="Shop for Business" className={styles['text45']} />
                </Container>
              </Container>
            </Container>
            <Container className={styles['frame-341']}>
              <Text text="For Education" className={styles['text46']} />
              <Container className={styles['frame-2705']}>
                <Container tag="span" className={styles['text47']}>
                  <Text
                    text="Apple and Education"
                    className={styles['text48']}
                  />
                  <Text text="Shop for K-12" className={styles['text49']} />
                  <Text text="Shop for College" className={styles['text50']} />
                </Container>
              </Container>
            </Container>
            <Container className={styles['frame-351']}>
              <Text text="For Healthcare" className={styles['text51']} />
              <Container className={styles['frame-2706']}>
                <Container tag="span" className={styles['text52']}>
                  <Text
                    text="Apple in Healthcare"
                    className={styles['text53']}
                  />
                  <Text
                    text="Health on Apple Watch"
                    className={styles['text54']}
                  />
                  <Text
                    text="Health Records on iPhone"
                    className={styles['text55']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['frame-361']}>
              <Text text="For Government" className={styles['text56']} />
              <Container className={styles['frame-2707']}>
                <Container tag="span" className={styles['text57']}>
                  <Text
                    text="Shop for Government"
                    className={styles['text58']}
                  />
                  <Text
                    text="Shop for Veterans and Military"
                    className={styles['text59']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className={styles['frame-38']}>
            <Container className={styles['frame-333']}>
              <Text text="For Business" className={styles['text60']} />
              <Container className={styles['frame-2708']}>
                <Container tag="span" className={styles['text61']}>
                  <Text text="Accessibility" className={styles['text62']} />
                  <Text text="Education" className={styles['text63']} />
                  <Text text="Environment" className={styles['text64']} />
                  <Text
                    text="Inclusion and Diversity"
                    className={styles['text65']}
                  />
                  <Text text="Privacy" className={styles['text66']} />
                  <Text
                    text="Racial Equity and Justice"
                    className={styles['text67']}
                  />
                  <Text
                    text="Supplier Responsibility"
                    className={styles['text68']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['frame-352']}>
              <Text text="About Apple" className={styles['text69']} />
              <Container className={styles['frame-2709']}>
                <Container tag="span" className={styles['text70']}>
                  <Text text="Newsroom" className={styles['text71']} />
                  <Text text="Apple Leadership" className={styles['text72']} />
                  <Text
                    text="Career Opportunities"
                    className={styles['text73']}
                  />
                  <Text text="Investors" className={styles['text74']} />
                  <Text
                    text="Ethics &amp; Compliance"
                    className={styles['text75']}
                  />
                  <Text text="Events" className={styles['text76']} />
                  <Text text="Contact Apple" className={styles['text77']} />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container tag="span" className={styles['text78']}>
          <Text text="More ways to shop:" className={styles['text79']} />
          <Text text=" Find an Apple Store" className={styles['text80']} />
          <Text text=" or" className={styles['text81']} />
          <Text text=" other retailer " className={styles['text82']} />
          <Text
            text="near you. Or call 1-800-MY-APPLE."
            className={styles['text83']}
          />
        </Container>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAzMicgaGVpZ2h0PScyJyB2aWV3Qm94PScwIDAgMTAzMiAyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8bGluZSBvcGFjaXR5PScwLjInIHkxPScwLjY4NzUnIHgyPScxMDMyJyB5Mj0nMC42ODc1JyBzdHJva2U9JyM2RTZFNzMnLz4KPC9zdmc+Cg=="
          alt="Line21186"
          className={styles['line-2']}
        />
        <Container className={styles['frame-41']}>
          <Container className={styles['frame-39']}>
            <Text text="Privacy Policy" className={styles['text84']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg=="
              alt="Line31190"
              className={styles['line-3']}
            />
          </Container>
          <Container className={styles['frame-40']}>
            <Text text="Terms of Use" className={styles['text85']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg=="
              alt="Line31193"
              className={styles['line-31']}
            />
          </Container>
          <Container className={styles['frame-411']}>
            <Text text="Sales and Refunds" className={styles['text86']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg=="
              alt="Line31196"
              className={styles['line-32']}
            />
          </Container>
          <Container className={styles['frame-42']}>
            <Text text="Legal" className={styles['text87']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg=="
              alt="Line31199"
              className={styles['line-33']}
            />
          </Container>
          <Container className={styles['frame-43']}>
            <Text text="Site Map" className={styles['text88']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg=="
              alt="Line31202"
              className={styles['line-34']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppleFooter.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

AppleFooter.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(AppleFooter)
