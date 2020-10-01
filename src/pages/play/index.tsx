import React from 'react'
import VideoBox from '../../components/video-box'
import Layout from '../../components/layout'
import './index.less'
const play = () => {
  return (
    <Layout>
      <div className='play'>
        <div className='video-play-box'>
          <video controls>
            <source src='1.mp4'></source>
            <track kind='captions'></track>
          </video>
          <div className='video-title'>
            <p>
              This is a video about blockchain，this is a video about blockchain，this is a video about blockchain，this
              is a video about blockchain.yep!ssssssss
            </p>
          </div>
        </div>
        <div className='video-list'>
          <VideoBox
            size='sm'
            title='This is a video about blockchain，this dddd'
            fil='2K'
            url='www.baidu.com'
            img='/banner.png'
          />
          <VideoBox
            size='sm'
            title='This is a video about blockchain，this dddd'
            fil='2K'
            url='www.baidu.com'
            img='/banner.png'
          />
          <VideoBox
            size='sm'
            title='This is a video about blockchain，this dddd'
            fil='2K'
            url='www.baidu.com'
            img='/banner.png'
          />
          <VideoBox
            size='sm'
            title='This is a video about blockchain，this dddd'
            fil='2K'
            url='www.baidu.com'
            img='/banner.png'
          />
        </div>
      </div>
    </Layout>
  )
}

export default play
