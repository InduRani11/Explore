import React, { useState } from 'react'

export default function BlogCard( {data}) {
    const [state, setState] = useState(true);
  const color="red";
  function handleClick(e){
    if(state){
      e.target.classNameList.add("fa-solid");
      console.log(e);
      setState(false);
    }else{
      setState(true);
      console.log(e);
      e.target.classNameList.remove("fa-solid");
    }
  }


    return (
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data.map((val )=>{
                return <div className="bg-gray-800 p-4 grow-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative">
                    <img alt="title" className="w-full h-48 object-cover rounded-t-2xl" src={val.src} />
                    <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{val.category}</span>
                </div>
                <div className="p-6 flex flex-col h-full">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            {val.title}</h3>
                        <p className="text-gray-400 mb-4">{val.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-all">
                        <i onClick={handleClick} className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            })

}
        </div>
    )
}
