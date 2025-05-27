import React from 'react'
import Header from './components/Header'
import CategoryBar from './components/CategoryBar'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
// import CarouselD from './components/CarouselD';

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>jhgsdfhg</div>
  },
]);

export default function App() {
  // return <RouterProvider router={router}/>

  return (
    <div className=''>
      <Header />
      {/* <CarouselD/> */}
      <CategoryBar />
      <Home/>
    </div>
  )
}