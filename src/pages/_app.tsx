import { AppProps } from 'next/app'
import Head from 'next/head'

import { AnimateSharedLayout } from 'framer-motion'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Inicio | Rofran Portfólio</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  )
}

export default App
