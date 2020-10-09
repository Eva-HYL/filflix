import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Avatar, Button, Content, Dropdown, Header, Input, InputGroup, Nav, Navbar } from 'rsuite'
import { Container } from 'next/app'
import Svg from '../Svg'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { getLocalStore, getValueFromLocal } from '../../utils/cookie'
import { User } from '../../services/login'

import '../../styles/default.less'
import './index.less'
import NavLink from '../nav-link'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const route = useRouter()
  const [user, setUser] = useState<User>({} as User)
  useEffect(() => {
    const token = getValueFromLocal('token')
    if (token) {
      setUser({ email: getLocalStore('email') ?? '', nickname: '' })
    }
  }, [])

  const toLogin = () => {
    route.push('/login')
  }
  const toSignUp = () => {
    route.push('/sign-up')
  }
  return (
    <div>
      <Head>
        <title>filflix</title>
      </Head>
      <div className='app'>
        <Container>
          <Header className='app-header'>
            <Navbar appearance='inverse' className='navbar'>
              <Navbar.Header>
                <Link href='/'>
                  <div className='logo'>
                    <Svg name='logo' color='#fff' />
                    <Svg name='logo-font' color='#fff' width='52' height='24' />
                  </div>
                </Link>
              </Navbar.Header>
              <Navbar.Body>
                <InputGroup inside className='search'>
                  <InputGroup.Addon>
                    <Svg name='nav-btn-search-h' />
                  </InputGroup.Addon>
                  <Input size='lg' />
                </InputGroup>

                {user ? (
                  <Nav pullRight>
                    <Dropdown
                      className='avatar'
                      placement='bottomEnd'
                      renderTitle={() => {
                        return (
                          <Avatar style={{ background: '#7B1FA2' }} circle>
                            {user.email?.slice(0, 1)}
                          </Avatar>
                        )
                      }}
                    >
                      <NavLink href='/'>My Account</NavLink>
                      <NavLink href='/my-video'>My Video</NavLink>
                      <NavLink href='/login'>Sign Out</NavLink>
                    </Dropdown>
                  </Nav>
                ) : (
                  <Nav pullRight>
                    <Nav.Item>
                      <Button appearance='link' className='btn' onClick={toLogin}>
                        Sign in
                      </Button>
                    </Nav.Item>
                    <Nav.Item>
                      <Button color='violet' className='btn' onClick={toSignUp}>
                        Sign up
                      </Button>
                    </Nav.Item>
                  </Nav>
                )}
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
