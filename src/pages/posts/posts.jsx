import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Brand = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
      console.log(response)
      setPosts(response.data)
    })
  },[])
  return (
    <div className='posts'>
      <h1 className='text-center my-3'>Posts</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>UserId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          
        </tr>
      </thead>
      <tbody>
        {
          posts.map((item,index)=>(
            <tr key={index}>
            <td>{item.UserId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Brand
