import React, { useState } from 'react'
import { Link } from 'react-router'

export default function BlogModel({handelSubmit} ) {
    const [obj,setObj]=useState({
        category:"",
        src:"",
        title:"",
        description:""});

    function takeData(e){
        e.preventDefault();
        handelSubmit(obj);
    }
    return (
        <div className='fixed top-0 w-screen flex justify-center items-center h-screen bg-[#00000020]'>
            <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg relative">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-center">
                    ➕ Create a Blog</h2>
                <Link to='/' className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">×</Link>
                <form onSubmit={takeData} className="flex flex-col gap-4">
                    <input onChange={(e) => {
                        setObj({...obj, title: e.target.value})
                    }} placeholder="Blog Title" className="bg-gray-700 text-white p-3 rounded-lg" type="text" value={obj.title} />
                    <textarea value={obj.description} onChange={(e) => {
                        setObj({...obj, description: e.target.value})
                    }} placeholder="Blog Content" className="bg-gray-700 text-white p-3 rounded-lg h-32"></textarea>
                    <select onChange={(e) => {
                        setObj({...obj, category: e.target.value})
                    }} value={obj.category} className="bg-gray-700 text-white p-3 rounded-lg">
                        <option  disabled="">Select your category</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                    <input placeholder="Tags (comma separated)" className="bg-gray-700 text-white p-3 rounded-lg" type="text"  />
                    <input onChange={(e) => {
                        setObj({...obj, src: e.target.value})
                    }} placeholder="Image URL" value={obj.src} className="bg-gray-700 text-white p-3 rounded-lg" type="text" />
                    <button onSubmit={takeData} type="submit" className="bg-pink-600 py-3 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all">Create Blog</button>
                </form>
            </div>
        </div>
    )
}
