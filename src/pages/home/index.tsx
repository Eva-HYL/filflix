import React from 'react'
import Layout from '../../components/layout'
import { Button, Panel } from 'rsuite'
import './index.less'
import VideoBox from '../../components/video-box'
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
        <Panel className='container'>
          <VideoBox
            title='This is a video about blockchain，this dddd'
            fil='2K'
            url='www.baidu.com'
            img='/banner.png'
          />
          <VideoBox
            title='This is a video about blockchain，this dddd'
            fil='12K'
            url='www.baidu.com'
            img='/banner.png'
          />
        </Panel>
      </Layout>
    </>
  )
}

export default Home
