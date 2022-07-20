import Head from 'next/head'
import Image from 'next/image'
import ShowTransaction from '../component/ShowTransaction'
import styles from '../styles/Home.module.css'
import AddExpensive from '../component/AddExpensive'
// import AddExpensive from './addTransaction/addTransaction'

export default function Home() {
  return (
    <>
      <ShowTransaction/>
      <AddExpensive/>
    </>
  )
}
