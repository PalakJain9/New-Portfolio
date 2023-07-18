import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Jost } from 'next/font/google'
import Head from 'next/head'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
 })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  React.useEffect(() => {
    Aos.init({
      delay: 30,
      duration: 1200,
    });
  },[])

  return (
    <div className={`flex flex-col ${jost.variable} font-sans`}>
      <Head>
        <title>Palak Jain</title>
        <meta name="description" content="Palak Jain" />
        {/* <link rel="icon" href="/logo.svg" type="image/svg+xml" /> */}
        <meta property="og:title" content="Palak Jain" />
        <meta property="og:description" content="Palak Jain" />
        {/* <meta property="og:image" content="/logo.svg" /> */}
        <meta property="og:url" content="https://heypalakjain.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      { children }
    </div>
  )
}
