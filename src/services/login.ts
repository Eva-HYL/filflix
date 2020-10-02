import { setLocalCookie, setLocalStorage } from '../utils/cookie'
import { post } from './service'

export interface User {
  email: string
  nickname: string
}

export interface Account {
  email: string
  pwd: string
}

const postRegist = async ({ email, pwd }: Account) => {
  try {
    const data = await post('/user/regist', { email, pwd })
    return data
  } catch (error) {
    return error
  }
}

const postLogin = async ({ email, pwd }: Account) => {
  try {
    const data = await post('/user/login', { email, pwd })
    if (data.code === 200) {
      setLocalCookie('token', data.msg.token)
      setLocalStorage('email', data.msg.user.email)
    }
    return data
  } catch (error) {
    return error
  }
}

export { postLogin, postRegist }
