import style from '../styles/Home.module.css'
import { useState,useEffect } from 'react'
import Link from 'next/link'

function ShowTransaction() {
  const [showData,setShowData] = useState()
  console.log('show data' ,showData);
  
  useEffect(()=>{
        const getData = localStorage.getItem('data')
        const ParseData = JSON.parse(getData)
        setShowData(ParseData)
  },[])

  return (
    <>
    <table className={`table ${style.table}`}>
        <thead>
            <tr>
            <th className={`${style.th}`} scope="col-3 th">Office  Transactions</th>
            <th className={`${style.th}`} scope="col-4 th"></th>
            <th className={`${style.th}`} scope="col-2 th"></th>
            <th className={`${style.th}`} scope="col-2 th"></th>
            <Link href={`/Home`}>
                <th className={`${style.th}`} scope="col-3 th"> + Add Transaction</th>
            </Link>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th className={`${style.th}`} scope="col-3 th">Date</th>
            <th className={`${style.th}`} scope="col-4 th">Description</th>
            <th className={`${style.th}`} scope="col-2 th">Credit</th>
            <th className={`${style.th}`} scope="col-2 th">Debit</th>
            <th className={`${style.th}`} scope="col-3 th">Running Balance</th>
            </tr>
           {
            showData?.map((post,i)=>{
              return(
                <>
                <tr key={post.Date}>
                  <th className={`${style.th}`} scope="row">{post.Date?.slice(0,19)}</th>
                  <td className={`${style.th}`}>{post.Discreption}</td>
                  <td className={`${style.th}`}>{post.Credit}</td>
                  <td className={`${style.th}`}>{post.Debit}</td>
                  <td className={`${style.th}`}>{post.RunningBalance}</td>
                </tr>
                </>
              )
            })
           }
        </tbody>
    </table>

    </>
  )
}

export default ShowTransaction