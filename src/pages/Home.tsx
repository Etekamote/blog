
import Layout from "../layout/Layout"
import Feed from "../components/Feed"
const Home = () => {
  return (
    <Layout component={<Feed />} hero={true}/>
  )
}

export default Home