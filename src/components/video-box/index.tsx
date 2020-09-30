import React, { useState } from 'react'
import { Button, Panel } from 'rsuite'
import './index.less'

interface VideoBoxProps {
  title: string
  fil: string
  img: string
  url: string
}

const VideoBox = ({ title, fil, img, url }: VideoBoxProps) => {
  const [show, setShow] = useState(false)
  const onEnter = () => {
    setShow(true)
  }
  const onLeave = () => {
    setShow(false)
  }

  const onClick = () => {
    return url
  }
  return (
    <Panel className='video-box' onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className='img-box'>
        <img src={img} height='195' alt='card' />
        {show ? (
          <div className='play-btn'>
            <Button appearance='link' onClick={onClick}>
              <img src='btn-play-h.svg' alt='play' />
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <span className='title'>{title}</span>
      <p>
        <b>{fil} fil</b>
      </p>
    </Panel>
  )
}

export default VideoBox
