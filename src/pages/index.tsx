import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SelectInputSection } from '../components/SelectInputSection'
import { GraphSection } from '../components/GraphSection'
import { SWRConfig } from 'swr'
import { fetcher } from '../libs/fetcher'

const Home: NextPage = () => {
  return (
   <>

    <SWRConfig value={{
      suspense:true,
      fetcher
    }}>

      <header>都道府県人口推移アプリ</header>
      <SelectInputSection/>
      {/* <GraphSection/> */}
    </SWRConfig>
   </>
  )
}

export default Home
