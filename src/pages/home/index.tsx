import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { Button, Panel } from 'rsuite'
import VideoBox from '../../components/video-box'
import Svg from '../../components/Svg'
import { useRouter } from 'next/dist/client/router'
import { getVideo, Videos } from '../../services/video'

import './index.less'

const Home = () => {
  const route = useRouter()
  const toUpload = () => {
    route.push('/upload')
  }
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
    const data = await getVideo(page, limit)
    setData(data)
  }
  return (
    <div onScroll={event => onScroll(event)}>
      <Layout>
        <Panel className='banner'>
          <h1>Welcome to Filflix</h1>
          <Button className='upload-btn' size='lg' onClick={toUpload}>
            <Svg name='btn-upload-h' width='18' height='18' offsetY='4' style={{ marginRight: 10 }} />
            <span>Upload video</span>
          </Button>
        </Panel>
        <Panel className='container'>
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
      </Layout>
    </div>
  )
}

export default Home
