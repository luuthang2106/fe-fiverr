import '@styles/globals.scss'
import 'nprogress/nprogress.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const start = () => NProgress.start()
    const stop = () => NProgress.done()
    router.events.on('routeChangeStart', start)
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
