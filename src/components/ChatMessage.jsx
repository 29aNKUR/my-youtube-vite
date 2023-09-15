import React from 'react'
import { getRandomImage } from '../utils/helper'


const ChatMessage = ({userImage,name,message}) => {
  return (
    <div className='flex item-center py-2 shadow-md'>
        <span>
        {/* <img
          className="h-6 col-span-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc_TaWjbx-6Sfcq3nBfaAMTqMurH3xJ0JO2hoc6wvWQ6hFYkhxW1wxSd_DQwwSn7cAfk&usqp=CAU"
          alt="user"
        /> */}
        <img src={userImage} className="h-6 col-span-1 mr-1" alt="" />
        </span>
        <span className='font-bold px-2'>
            {name}
        </span>
        <span className='px-2'>
            {message}
        </span>
    </div>
  )
}

export default ChatMessage