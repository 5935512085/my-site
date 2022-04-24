import Layout from '../components/Layout'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return ( <Layout>
      <SessionProvider session={session}>
      <Component {...pageProps}/>
      </SessionProvider>
      </Layout>
      )
}

