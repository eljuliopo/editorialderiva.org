import React from 'react'
import { Link } from 'gatsby'
import { Segment, Container } from 'semantic-ui-react'


import SEO from '../components/seo'

const Editorial = () => (
  <>
    <SEO title="Deriva" />
    <Segment inverted vertical style={{ minHeight: '100vh' }}>
      <Container text textAlign='justified'>
      
      </Container>
    </Segment>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Editorial
