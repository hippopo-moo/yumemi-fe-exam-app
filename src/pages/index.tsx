import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <>
    <header>都道府県人口推移アプリ</header>
    <div className=''>
      <label htmlFor="">東京
        <input type="checkbox" name="" id="" />
      </label>
      <label htmlFor="">大阪
        <input type="checkbox" name="" id="" />
      </label>
      <label htmlFor="">名古屋
        <input type="checkbox" name="" id="" />
      </label>
      <label htmlFor="">福岡
        <input type="checkbox" name="" id="" />
      </label>
    </div>
    <div>
      GraphSection
    </div>
   </>
  )
}

export default Home
