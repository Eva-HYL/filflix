import React from 'react'
import { Panel } from 'rsuite'
import Layout from '../../components/layout'
import VideoBox from '../../components/video-box'
import './index.less'
const MyVideo = () => {
  return (
    <div>
      <Layout>
        <div className='myVideo'>
          <Panel header='My video'>
            <VideoBox
              size='lg'
              title='This is a video about blockchain，this dddd'
              fil='2K'
              url='www.baidu.com'
              img='/banner.png'
            />
          </Panel>
        </div>
      </Layout>
    </div>
  )
}
export default MyVideo
