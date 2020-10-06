import React, { useEffect, useState } from 'react'
import { Panel } from 'rsuite'
import { getMyVideo, Videos } from '../../services/video'
import Layout from '../../components/layout'
import VideoBox from '../../components/video-box'
import './index.less'
const MyVideo = () => {
  const [data, setData] = useState<Videos>({} as Videos)

  useEffect(() => {
    getVideoList(1, 1000)
  }, [])

  const getVideoList = async (page: number, limit: number) => {
    const data = await getMyVideo(page, limit)
    setData(data)
  }
  return (
    <div>
      <Layout>
        <div className='myVideo'>
          <Panel header='My video'>
            {data?.videos?.map(item => {
              return (
                <VideoBox
                  key={item.id}
                  size='lg'
                  title={item.title}
                  url={item.saveAddress}
                  img={item.imageUrl}
                  fil={item.price}
                />
              )
            })}
          </Panel>
        </div>
      </Layout>
    </div>
  )
}
export default MyVideo
