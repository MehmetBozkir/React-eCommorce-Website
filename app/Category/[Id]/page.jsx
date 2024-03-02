import React from 'react'
import Navbar from '../../Component/Navbar'

function page({params}) {
  return (
    <>
    <Navbar/>
    <div>page {params.Id}</div>
    </>
  )
}

export default page