import React, { useState } from 'react'
import { Form, ButtonToolbar, Button, FormControl, ControlLabel, FormGroup, Uploader, InputGroup, Schema } from 'rsuite'
import Layout from '../../components/layout'
import './index.less'
import { FileType } from 'rsuite/lib/Uploader'
import { postVideo } from '../../services/video'

interface UploadProps {
  video: File | undefined
  title: string
}
const { StringType } = Schema.Types
const Upload = () => {
  const model = Schema.Model({
    title: StringType(),
  })

  const [formValue, setFormValue] = useState<UploadProps>({} as UploadProps)

  const [titleLen, setTitleLen] = useState(0)

  const onChange = (values: unknown) => {
    const { title, video } = values as UploadProps
    setTitleLen(title?.length ?? 0)
    setFormValue({ title, video })
  }

  const onSubmit = () => {
    console.log(formValue)
    postVideo(formValue)
  }

  const onVideoChange = (files: FileType[]) => {
    setFormValue({ ...formValue, video: files[0]?.blobFile })
  }

  return (
    <Layout>
      <div className='upload'>
        <Form model={model} formValue={formValue} onSubmit={onSubmit} onChange={onChange}>
          <FormGroup>
            <FormControl name='video' accepter={Uploader}>
              <Uploader draggable autoUpload={false} onChange={onVideoChange}>
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
