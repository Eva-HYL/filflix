import React from 'react'
import Head from 'next/head'
import { Button, Content, Header, Icon, Input, InputGroup, Nav, Navbar } from 'rsuite'
import '../../styles/default.less'
import { Container } from 'next/app'
import './index.less'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div>
      <Head>
        <title>filflix</title>
      </Head>
      <div className='app'>
        <Container>
          <Header className='app-header'>
            <Navbar appearance='inverse' className='navbar'>
              <Navbar.Header className='logo'>
                <img src='logo.svg' alt='logo' />
                <img src='logo-font.svg' alt='logo' />
              </Navbar.Header>
              <Navbar.Body>
                <InputGroup inside className='search'>
                  <InputGroup.Addon>
                    <img src='nav-btn-search-h.svg' alt='search' />
                  </InputGroup.Addon>
                  <Input size='lg' />
                </InputGroup>
                <Nav pullRight>
                  <Nav.Item>
                    <Button appearance='link' className='btn'>
                      Sign in
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button color='violet' className='btn'>
                      Sign up
                    </Button>
                  </Nav.Item>
                </Nav>
              </Navbar.Body>
            </Navbar>
          </Header>
          <Content className='app-content'>{children}</Content>
        </Container>
      </div>
    </div>
  )
}

export default Layout
