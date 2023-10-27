import React from 'react'
import hero from "../assets/hero.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.webp"
import HeroItem from './HeroItem'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'




const Hero = () => {
const {data, isLoading, error} = useFetch("posts")
const trimmedData = data.slice(0,3)

if(isLoading){
    return  <Loading />
  }
    
  return (
    <section className='mt-10'>
    <h2 className='px-2 text-2xl mb-4 uppercase text-blue-700 font-bold'>Najnowsze wpisy</h2>
    <div className='flex flex-col gap-7 lg:grid lg:grid-cols-2 lg:gap-0'>
    { 
     data && trimmedData.map((item: any) => <HeroItem key={item.id} id={item.id} img={item.attributes.img.data?.attributes.url} title={item.attributes.title}/>)
         }
    </div>
        
    </section>
  )
}

export default Hero