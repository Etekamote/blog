import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Home />} />
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
