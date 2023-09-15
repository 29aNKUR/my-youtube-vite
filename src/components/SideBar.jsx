import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {

  //we are subscribing to the store via useSelector which reads the data from our slice and updates the store automagically
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  //early return
  if(!isMenuOpen) return null;


  return (
    <>
     <div className='shadow-lg p-5 w-48'>
      <h1 className='font-bold'></h1>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
    </>
   
  )
}

export default SideBar