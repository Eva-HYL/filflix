import React from 'react'
import { SWRConfig } from 'swr'
import { AppProps } from 'next/app'
const fetcher = (url: string) => fetch(url).then(res => res.json())
function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
