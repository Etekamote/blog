import React from 'react'
import Hero from '../components/Hero'

type LayoutProps = {
    component: React.ReactNode,
    hero: boolean
}


const Layout = ({component, hero} : LayoutProps) => {
  return (
    <div className="lg:grid lg:grid-cols-8 p-5 gap-x-16">
    {hero && <div className="lg:col-span-full"><Hero /></div>}
    <div className="mt-8 lg:col-start-1 lg:col-end-6">{component}</div>
    <div className="mt-8 lg:col-start-6 lg:col-end-9">sidebar</div> 
    </div>
  )
}

export default Layout