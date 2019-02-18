import React from 'react'
import { navigate } from 'gatsby'
import { Menu, Container, Button } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state
    const { mobile } = this.props
    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed} 
        size="tiny"
        style={{
          position: 'absolute',
          width: '100vw',
          zIndex: 1000,
        }}
      >
        {mobile && mobile ? (
          false
        ) : (
          <Container>
            <Menu.Item as="a" onClick={() => navigate('/')}>
              HOME
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as="a" onClick={() => navigate('/editorial')}>
                EDITORIAL
              </Menu.Item>
              <Menu.Item as="a" onClick={() => navigate('/catalog')}>
                CATÁLOGO
              </Menu.Item>
              <Menu.Item as="a" onClick={() => navigate('/contacto')}>
                CONTACTO
              </Menu.Item>
            </Menu.Menu>
          </Container>
        )}
      </Menu>
    )
  }
}

export default NavBar
