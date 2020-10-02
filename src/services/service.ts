const baseUrl = ' http://8b81de990a8f.ngrok.io/api/v1'
const request = async (url: string, config: RequestInit | undefined) => {
  try {
    const res = await fetch(baseUrl + url, config)
    if (!res.ok) {
      // 服务器异常返回
      throw Error('')
    }
    const resJson = await res.json()
    return resJson
  } catch (error) {
    // 公共错误处理
    return error
  }
}

// GET请求
export const get = (url: string) => {
  return request(url, { method: 'GET' })
}

// POST请求
export const post = (url: string, data: unknown) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  })
}
