import { Link } from "react-router-dom"

type PostProps = {
  id: number,
  title: string,
  content: string,
  tags: string,
  date: string,
  img: string | undefined,
}



const FeedPost = ({id, title, content, tags, date, img} : PostProps) => {

const newDate = new Date(date)
const year = newDate.getFullYear()
const month = String(newDate.getMonth() + 1).padStart(2, '0')
const day = String(newDate.getDate()).padStart(2, '0')
const hours = String(newDate.getHours()).padStart(2, '0')
const minutes = String(newDate.getMinutes()).padStart(2, '0')
const formattedDate = `${year}-${month}-${day}`
const formattedTime = `${hours}:${minutes}`
const arrayTags = tags.split(", ")


  
  return (
      <article className='bg-white p-2 lg:p-4'>
        <Link to={`post/${id}`}><h2 className='text-blue-500 text-xl font-bold py-1'>{title}</h2></Link>
        <div className='text-gray-500 text-xs'>{formattedDate} {formattedTime}</div>
        {img && <img src={`http://localhost:1337${img}`} alt={title} className='w-full h-36 object-top object-cover mt-4 lg:h-64'></img>}
        <div className='text-gray-500 mt-4 mb-4'>{content.length > 500 ? `${content.slice(0,500)}...` : content}</div>
        {content.length>500 &&<Link to={`post/${id}`}><span className="text-blue-500 font-bold">Czytaj więcej...</span></Link> }
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
        <span>Komentarze (0)</span>
        <span>Tagi: {arrayTags.map((tag:string, i) => <Link to={`/tags/${tag}`} key={i}><span className="text-gray-700">{tag} </span></Link>)}</span>
        </div>
      </article>
    )
  }
  

export default FeedPost