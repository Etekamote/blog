import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import FeedPost from '../components/FeedPost'
import Loading from '../components/Loading'




const Feed = () => {
const {data, isLoading, error} = useFetch("posts")
const trimmedData = data.slice(3)

if(isLoading){
  return  <Loading />
}



  return (<section className='flex flex-col gap-4'>
  {
  data && trimmedData.map((item:any) => <FeedPost
  key={item.id}
  id={item.id}
  title={item.attributes.title}
  content={item.attributes.content}
  tags={item.attributes.tags}
  date={item.attributes.publishedAt}
  img={item.attributes.img.data?.attributes.url}
 />)
  }
  </section>
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