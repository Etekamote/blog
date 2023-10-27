import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import Layout from "../layout/Layout";
import Loading from "../components/Loading";
import { useEffect } from "react";
import FeedPost from "../components/FeedPost";

const TagsComponent = () => {
    const {tag} = useParams();
    const navigate = useNavigate()
    const {data, isLoading, error} = useFetch("posts")
    const filteredData = data?.filter((item:any) => item.attributes.tags.includes(tag))
    console.log(filteredData)

    useEffect(()=>{
        if(!tag){
            navigate("/")  
        }
    },[tag])

    
    if(isLoading){
        return <Loading />
    }
    if(error){
        navigate("/error")
    }
  return (
    <section className='flex flex-col gap-4'>
  {
  data && filteredData.map((item:any) =>   
     
     <FeedPost
  key={item.id}
  id={item.id}
  title={item.attributes.title}
  content={item.attributes.content}
  tags={item.attributes.tags}
  date={item.attributes.publishedAt}
  img={item.attributes.img.data?.attributes.url}
 />
 
 )
  }
  </section>
  )
}

const Tags = () =>{
    return <Layout component={<TagsComponent />} hero={false}/>
}

export default Tags