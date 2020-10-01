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
          <div className='info'>
            <p>【版权保护声明】</p>
            <p>我们就网站上某些视频的版权保护作如下声明： 该视频是网站的用户自行上传，我们无法确定具体的版权人；</p>
            <p>
              如果相关版权人在能证明其权属的情况下，欢迎各位权利人积极联系我们，我们承诺会根据权利人的要求作相应的处理，以协助权利人自我版权的保护；
            </p>
            <p>
              我们保证正当合法的保存和使用该视频。如果在使用该视频的过程中产生收益，我们承诺会按照一定的收益比例分成给相关权利人。
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
