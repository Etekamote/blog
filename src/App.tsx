import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route index path="/" element={<Root />}></Route>
  ))
  return (
<RouterProvider router={router}></RouterProvider>
  );
}


const Root = () => {
  return (
    <>
    <Outlet />
    </>
  )
}


export default App;
