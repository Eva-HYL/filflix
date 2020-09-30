import React from 'react'
import '../styles/default.less'
import Layout from '../components/layout'
import { Panel } from 'rsuite'

const Home = () => {
  return (
    <>
      <Layout>
        <Panel className='banner'>
          <img src='banner.png' alt='banner' />
        </Panel>
        <Panel className='container'>container</Panel>
      </Layout>
    </>
  )
}

export default Home
