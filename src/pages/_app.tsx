import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden flex flex-col">
      <Head>
        <title>Palak Jain</title>
        <meta name="description" content="Palak Jain" />
        {/* <link rel="icon" href="/logo.svg" type="image/svg+xml" /> */}
        <meta property="og:title" content="Palak Jain" />
        <meta property="og:description" content="Palak Jain" />
        {/* <meta property="og:image" content="/logo.svg" /> */}
        <meta property="og:url" content="https://recruitify.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      { children } 
    </div>
  )
}
