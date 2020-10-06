import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { Button, Panel } from 'rsuite'
import Svg from '../Svg'
import './index.less'

interface VideoBoxProps {
  title: string
  fil?: string
  img: string
  url: string
  size: 'sm' | 'lg'
}

const VideoBox = ({ title, fil, img, url, size }: VideoBoxProps) => {
  const [show, setShow] = useState(false)
  const width = size === 'lg' ? 292 : 185
  const height = size === 'lg' ? 195 : 124
  const fontSize = size === 'lg' ? 16 : 14
  const margin = size === 'lg' ? '12px 0 16px 0' : '8px 0 8px 0'
  const route = useRouter()
  const onEnter = () => {
    setShow(true)
  }
  const onLeave = () => {
    setShow(false)
  }

  const onClick = () => {
    route.push('/play')
    return url
  }
  return (
    <Panel
      className='video-box'
      style={{ width: width + `px`, fontSize: fontSize }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className='img-box'>
        <img src={img ?? 'banner.png'} height={height} alt='card' />
        {show ? (
          <div className='play-btn'>
            <Button appearance='link' onClick={onClick}>
              <Svg name='btn-play-h' width={40} height={40} />
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <span className='title' style={{ margin: margin }}>
        {title}
      </span>
      <p>{fil ? <b>{fil} fil</b> : <b>free</b>}</p>
    </Panel>
  )
}

export default VideoBox
