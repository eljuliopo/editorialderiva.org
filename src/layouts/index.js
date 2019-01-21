import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Responsive } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

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
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, { mobile: true })
          )}
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
