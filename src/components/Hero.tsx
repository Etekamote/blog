import React from 'react'
import hero from "../assets/hero.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.webp"
import HeroItem from './HeroItem'


type Feed = {
    id: number,
    img: string,
    title: string
}

const Hero = () => {


    const feed: Feed[] = [
        {   
            id: 1,
            img: hero,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laudantium.1"
        },
        {   
            id: 2,
            img: hero2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laudantium.2"
        },
        {
            id: 3,
            img: hero3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laudantium.3"
        },
    ]

    
  return (
    <section className='mt-10'>
    <h2 className='px-2 text-2xl mb-4 uppercase text-blue-700 font-bold'>Najnowsze wpisy</h2>
    <div className='flex flex-col gap-7 lg:grid lg:grid-cols-2 lg:gap-0'>
    {
            feed.map((item:Feed) => <HeroItem key={item.id}  img={item.img} title={item.title}/>)
        }
    </div>
        
    </section>
  )
}

export default Hero