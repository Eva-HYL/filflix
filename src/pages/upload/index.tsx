import React, { useState } from 'react'
import { Form, ButtonToolbar, Button, FormControl, ControlLabel, FormGroup, Uploader, InputGroup, Schema } from 'rsuite'
import Svg from '../../components/Svg'
import Layout from '../../components/layout'
import './index.less'

interface UploadProps {
  video: string
  title: string
  price: number
  cover: string
}
const { StringType, NumberType } = Schema.Types
const Upload = () => {
  const model = Schema.Model({
    title: StringType(),
    price: NumberType(),
  })

  const [formValue, setFormValue] = useState<UploadProps>({} as UploadProps)

  const [titleLen, setTitleLen] = useState(0)

  const onChange = (values: unknown) => {
    const { title, price, video, cover } = values as UploadProps
    setTitleLen(title?.length ?? 0)
    setFormValue({ title, price, video, cover })
  }

  const onSubmit = () => {
    return false
  }
  return (
    <Layout>
      <div className='upload'>
        <Form model={model} formValue={formValue} onSubmit={onSubmit} onChange={onChange}>
          <FormGroup>
            <FormControl name='video' accepter={Uploader}>
              <Uploader draggable>
                <div style={{ width: 616, height: 410 }}>点击或拖拽文件到此区域上传</div>
              </Uploader>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <InputGroup inside>
              <FormControl name='title' label='Title'></FormControl>
              <InputGroup.Addon style={{ color: '#A9AFB3' }}>{titleLen}/40</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <InputGroup inside>
              <FormControl name='price' label='Price' />
              <InputGroup.Addon>Fil</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Cover</ControlLabel>
            <FormControl name={'cover'} accepter={Uploader}>
              <Uploader>
                <button
                  style={{
                    width: 150,
                    height: 150,
                  }}
                >
                  <Svg name='btn-add-h' />
                  <div>Upload video cover</div>
                </button>
              </Uploader>
            </FormControl>
          </FormGroup>
          <ButtonToolbar>
            <Button appearance='primary' color='violet' type='submit'>
              Submit
            </Button>
            <Button appearance='ghost' type='reset'>
              Cancel
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    </Layout>
  )
}
export default Upload
