import React from 'react'
import Button from './Button'

const list = ["All","Cricket","Live","Sports","News","Songs","Gym","Nutrition","Jeremy Ether"];

const ButtonList = () => {

  return (
    <div className='flex'>
      {
        list.map((item)=><Button key={item} name={item}/>)
      }
      


    </div>
  )
}

export default ButtonList