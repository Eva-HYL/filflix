import React, { useEffect, useState } from 'react'
import { Panel } from 'rsuite'
import { getMyVideo, Videos } from '../../services/video'
import Layout from '../../components/layout'
import VideoBox from '../../components/video-box'

import './index.less'
const MyVideo = () => {
  const [page] = useState(1)
  const [limit, setLimit] = useState(200)

  const [data, setData] = useState<Videos>({} as Videos)

  useEffect(() => {
    getVideoList(page, limit)
  }, [limit, page])

  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const container = event.currentTarget.firstChild?.lastChild?.lastChild as Element
    const height = container.scrollHeight - container.scrollTop - container.clientHeight

    if (height <= 0) {
      const limitC = limit + 200
      setLimit(limitC)
    }
  }

  const getVideoList = async (page: number, limit: number) => {
    const data = await getMyVideo(page, limit)
    setData(data)
  }

  return (
    <div onScroll={onScroll}>
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
