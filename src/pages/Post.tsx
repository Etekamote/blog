import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"
import Layout from "../layout/Layout"
import useFormatDate from "../hooks/useFormatDate"
import useFormatTags from "../hooks/useFormatTags"




  


const PostComponent = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data, isLoading, error} = useFetch("posts", id);
    const formattedDate = useFormatDate(data?.attributes.publishedAt)
    const arrayTags = useFormatTags(data?.attributes.tags)
    useEffect(()=>{
        if(!id){
            navigate("/")
        }
    }, [id])

    if(isLoading){
        return <Loading />
    }
    if(error){
        navigate("/error")
    }
    return(<>
        {data && 
        <article className='bg-white p-2  lg:p-4'>
        <h2 className='text-blue-500 text-xl font-bold py-1'>{data.attributes.title}</h2>
        <div className='text-gray-500 text-xs'>{formattedDate}</div>
        {data.attributes.img.data && <img src={`http://localhost:1337${data.attributes.img.data.attributes.url}`} alt={data?.attributes.title} className='w-full h-36 object-top object-cover mt-4 lg:h-64'></img>}
        <div className='text-gray-500 mt-4 mb-4'>{data.attributes.content}</div>
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
        <span>Komentarze (0)</span>
        <span>Tagi: {arrayTags.map((tag:string, i) => <Link to={`/tags/${tag}`} key={i}><span className="text-gray-700">{tag} </span></Link>)}</span>
        </div>
      </article>
        }
        </>
    )
}

const Post = () =>{

    return(
        <Layout component={<PostComponent />} hero={false}/>
    )
}

export default Post