import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='p-2 m-2'> 
      <h1 className='bg-slate-100 w-60 h-60'></h1>
      <h1 className='bg-slate-100 py-2 my-2 w-60 h-5'></h1>
      <h1 className='bg-slate-100 py-2 my-2 w-40 h-5'></h1>
    </div>
  )

}

const Shimmer = () => {
    return (
    
         Array(10).fill("").map((e,index)=>(<div key={index} className="flex"><ShimmerCard/></div>))

     
       
    )
}




export default Shimmer


// Array(10).fill("").map((e,index)=>(<div key={index} className="shimmer"></div>))
