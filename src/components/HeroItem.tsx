import React from 'react'
import { Link } from 'react-router-dom'

type HeroItemProps = {
    img: string,
    title: string
}


const HeroItem = ({img, title}:HeroItemProps) => {
    console.log(img)
  return (
    <article style={{
        backgroundImage: `url(${img})`
    }}
    className='h-52 bg-cover bg-center relative lg:first-of-type:h-full lg:first-of-type:row-start-1 lg:first-of-type:row-end-4 lg:first-of-type:text-2xl'
    >
        <div
        className='bg-opacity-70 bg-black h-1/3 absolute bottom-0 left-0 right-0 px-4 flex items-center text-white hover:underline'
        >
            <Link to={`/article/${title}`}>{title}</Link>
        </div>

    </article>
  )
}

export default HeroItem