import React from 'react'
import Layout from '../../components/layout'
import { Button, Panel } from 'rsuite'
import './index.less'
const Home = () => {
  return (
    <>
      <Layout>
        <Panel className='banner'>
          <h1>Welcome to Filflix</h1>
          <Button className='upload-btn' size='lg'>
            <img src='btn-upload-h.svg' alt='upload' />
            Upload video
          </Button>
        </Panel>
        <Panel className='container'>container</Panel>
      </Layout>
    </>
  )
}

export default Home
