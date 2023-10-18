import Hero from "../components/Hero"
import Feed from "./Feed"
const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-8 p-5 gap-x-16">
    <div className="lg:col-span-full"><Hero /></div>
    <div className="mt-8 lg:col-start-1 lg:col-end-6"><Feed /></div>
    <div className="mt-8 lg:col-start-6 lg:col-end-9">sidebar</div> 
    </div>
  )
}

export default Home