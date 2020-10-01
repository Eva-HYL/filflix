import React from 'react'
import Layout from '../../components/layout'
import { Button, Panel } from 'rsuite'
import './index.less'
import VideoBox from '../../components/video-box'
import Svg from '../../components/Svg'
import { useRouter } from 'next/dist/client/router'
const Home = () => {
  const route = useRouter()
  const toUpload = () => {
    route.push('/upload')
  }
  return (
    <>
      <Layout>
        <Panel className='banner'>
          <h1>Welcome to Filflix</h1>
          <Button className='upload-btn' size='lg' onClick={toUpload}>
            <Svg name='btn-upload-h' width='18' height='18' offsetY='4' style={{ marginRight: 10 }} />
            <span>Upload video</span>
          </Button>
        </Panel>
        <Panel className='container'>
          <VideoBox
            size='lg'
            title='This is a video about blockchain，this dddd'
            url='www.baidu.com'
            img='/banner.png'
          />
          <VideoBox
            size='lg'
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
