import Hero from "../components/Hero"
const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-8 p-5 gap-x-16">
    <div className="lg:col-span-full"><Hero /></div>
    <div className="bg-slate-950 mt-8 lg:col-start-1 lg:col-end-6">content</div>
    <div className="bg-slate-500 mt-8 lg:col-start-6 lg:col-end-9">sidebar</div> 
    </div>
  )
}

export default Home