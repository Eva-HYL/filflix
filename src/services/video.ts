import Cookies from 'js-cookie'
import { Alert } from 'rsuite'
import { get, postFile } from './service'

export interface Video {
  id: number
  uid: number
  title: string
  imageUrl: string
  price: string
  size: number
  status: number
  cid: string
  saveAddress: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface Videos {
  count: number
  videos: Video[]
}

const getVideo = (page: number, limit: number) => {
  return get('/video/list?page=' + page + '&limit=' + limit)
    .then(data => {
      if (data.code === 200) {
        return {
          videos: data.msg.rows,
          count: data.msg.count,
        }
      } else {
        return data.msg
      }
    })
    .catch(error => {
      return error
    })
}

const getMyVideo = (page: number, limit: number) => {
  return get('/video/user?page=' + page + '&limit=' + limit, { token: Cookies.get('token') ?? '' })
    .then(data => {
      if (data.code === 200) {
        return {
          videos: data.msg.rows,
          count: data.msg.count,
        }
      } else {
        return data.msg
      }
    })
    .catch(error => {
      return error
    })
}

export interface VideoUploadModel {
  title: string
  video: File | undefined
}

const postVideo = (model: VideoUploadModel) => {
  const data = new FormData()
  data.append('title', model.title)
  data.append('video', model.video as Blob)
  postFile('/video/upload', data, { token: Cookies.get('token') ?? '' })
    .then(data => {
      if (data) {
        Alert.info(data.msg)
      }
    })
    .catch(error => {
      Alert.error(error)
    })
}

export { getVideo, getMyVideo, postVideo }
