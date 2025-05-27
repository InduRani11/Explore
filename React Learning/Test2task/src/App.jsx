import React, { useState } from 'react'
import BlogList from './BlogList'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import BlogModel from './BlogModel';
export default function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/blogmodel' element={<BlogModel />} />
    </Routes>
  </BrowserRouter>
  let obj = {
    category: "travel",
    src: "xyz",
    title: "indu",
    description: "hello all"
  }
  let [data, setData] = useState([obj]);
  let [category, setCategory] = useState("All");
  const [isBlog, setIsBlog] = useState(false)
  function handelSubmit(val) {
    setIsBlog(false)
    setData((prev) => [...prev, val]);
    console.log(data);
  }
  return (
    <div className='w-full h-screen'>
      <header className='flex flex-col gap-5 justify-between px-16 py-5 bg-gray-900 shadow-md'>
        <div className="flex items-center justify-between w-full px-4">
          <h1 className="text-3xl font-bold text-purple-400 flex items-center">
            <span className="material-icons text-4xl mr-2">My Blog</span>
            App
          </h1>
          <div className="flex items-center gap-4">
            <form className="flex items-center space-x-4 w-full max-w-6xl px-4">
              <input placeholder="Search posts..." className="flex-grow bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" />
              <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition-all">
                Search
              </button>
            </form>
            <div className="flex justify-end">
              <Link onClick={() => {
                setIsBlog(true);
              }} className="bg-pink-600 py-2 px-4 rounded-xl w-full whitespace-nowrap text-white font-bold hover:bg-pink-700 transition-all">➕ Add Blog</Link>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button onClick={() => {
            setCategory('All');
          }}>All</Button>
          <Button onClick={() => {
            setCategory('Travel');
          }}>Travel</Button>
          <Button onClick={() => {
            setCategory('Technology');
          }}>Technology</Button>
          <Button onClick={() => {
            setCategory('Food');
          }}>Food</Button>
          <Button onClick={() => {
            setCategory('Lifestyle');
          }}>Lifestyle</Button>
        </div>
      </header>
      <main>
        <BlogList data={data} Category={category} />
      </main>
      {isBlog ? (
        <div className='fixed w-screen h-screen'>
          <BlogModel handelSubmit={handelSubmit} />
        </div>
      ) : <></>}
    </div>
  )
}


export function Button(props) {
  return (
    <button className='hover:bg-purple-400 bg-gray-800 text-gray-300 px-4 py-1 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500'>{props.children}</button>

  )
}

