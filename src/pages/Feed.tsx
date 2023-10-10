import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'




const Feed = () => {
const {data, isLoading, error} = useFetch("posts")


  return (<>
  
  </>
  )
}

export default Feed

/*    <>
   <h1>Hello</h1>
   {
    feed.map((item:any) => <div>{item.attributes.content}</div>)
   }
    </>
  )*/