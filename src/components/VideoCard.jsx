import React from 'react'
import { convertViewsToMillionBillion } from '../utils/helper';

const VideoCard = ({info}) => {
    //this will give error because data is not present on first rendering
    // const { snippet,statistics} = info;

    // const { title, thumbnails, channelTitle} = snippet;

    // const { viewCount } = statistics

    const { title,thumbnails,channelTitle } = info?.snippet || {};
    const { viewCount } = info?.statistics || {};

    return (
    <div className="w-64 p-2 m-2">  
       <img className="rounded-lg hover:rounded-none" src={thumbnails?.high?.url} alt="thumbnail" />
       <ul>
        <li className='font-semibold text-sm'>{title}</li>
        <li className='text-xs font-semibold text-gray-600 my-1'>{channelTitle}</li>
        <li className='text-xs font-semibold text-gray-600'>{convertViewsToMillionBillion(viewCount)} views </li>

       </ul>
    </div>
  )
}

//example of Higher Order Component
// export const AdVideoCard = ({info}) => {
//   return (
//     <div className='border border-black-100'>
//       <VideoCard info = {info}/>
//     </div>
//   )
// }

export default VideoCard