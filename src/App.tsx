import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import NoPage from "./pages/NoPage";



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Home />} />
      <Route path="/post" element={<Post />}>
       <Route path=":id" element={<Post />}/>
       </Route>
       <Route path="*" element={<NoPage />} />
    </Route>
  ))
  return (
<RouterProvider router={router}></RouterProvider>
  );
}


const Root = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}


export default App;
