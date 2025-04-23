import React from 'react'
// import { useEffect } from 'react'


const counter = () => {
    // function uesEffect( cb, dep="all"){
    //     if(dep === "all"){
    //         cb();
    //     }else{
    //         console.log("Dependency ")
    //     }
    // }
    // function effectCallbackfn(){
    //     console.log("cb fn iscalled ")
    // }
    // useEffect(effectCallbackfn, [])




    return (
        <div className='w-screen gap-1 bg-[#e4d7d7] h-screen flex-col flex justify-center items-center'>
            <h1 className='text-4xl'>Counter Task</h1>
            <span className='text-lg'>Count:</span>
            <button className='bg-amber-600 p-2 rounded-2xl' onClick={console.log("sfnd")} >Increase count</button>
        </div>
    )
}

export default counter


// import React, { useState } from 'react'
//
// export default function Counter() {
//     const [CurrCount, setCount] = useState({ count: 0, });
//     function IncrementVal(val) {
//         val.count = val.count + 1;
//         // return val;
//     }
//     function Increment() {
//         setCount((prev) => {
//             // let val = prev;
//             let val=structuredClone(prev)
//             IncrementVal(val);
//             IncrementVal(val);
//             console.log("new values", prev, val);
//             return val;
//         });
//
//         // console.log(count);
//     }
// //     function Decrement() {
// //
// //         // console.log(count);
// //     }
//     function handleClick() {
//         Increment();
//     }
//     return (
//
//         <div className='w-screen gap-1 bg-[#9e9292] h-screen flex-col flex justify-center items-center'>
//             <h1 className='text-4xl'>Counter Task</h1>
//             <span className='text-lg'>Count:{CurrCount.count}</span>
//             <button className='bg-amber-600 p-2 rounded-2xl' onClick={handleClick} >Increase count</button>
//         </div>
//     )
// }
