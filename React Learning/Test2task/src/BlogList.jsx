import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'

export default function BlogList({data, Category}) {

      let [FilterData,setFilterData]=useState([]);
      useEffect( ()=>{setFilterData(data.filter((val) => val.category == Category))
        console.log(data,FilterData)
      },[]);
  return (
    <div className=''>

      {Category==="All"?<BlogCard data={data}/>:<BlogCard data={FilterData}/>}
    </div>
  )
}
