import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Responsive } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import NavBar from '../components/NavBar'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Responsive
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <NavBar mobile />
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, { mobile: true })
          )}
        </Responsive>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <NavBar />
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, { mobile: false })
          )}
        </Responsive>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
