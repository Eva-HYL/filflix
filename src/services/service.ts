const baseUrl = ' https://01226aa8120b.ngrok.io/api/v1'
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
export const get = (url: string, headers?: Headers | string[][] | Record<string, string> | undefined) => {
  return request(url, {
    method: 'GET',
    headers: { ...headers },
  })
}

// POST请求
export const post = (
  url: string,
  data: unknown,
  headers?: Headers | string[][] | Record<string, string> | undefined
) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    method: 'POST',
  })
}

export const postFile = (
  url: string,
  data: FormData,
  headers?: Headers | string[][] | Record<string, string> | undefined
) => {
  return request(url, {
    body: data,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'multipart/form-data',
      ...headers,
    },
    method: 'POST',
  })
}
