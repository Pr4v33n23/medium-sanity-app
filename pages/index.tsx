import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="text-bold">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/medium-logo.svg" />
      </Head>
      <Header/>
    </div>
  )
}

export default Home
