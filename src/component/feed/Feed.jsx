import React from 'react'
import './Feed.css'
import FeedTopCard from './FeedTopCard'
import Shared from './shop/Shared'



const Feed = () => {
  return (
    <div className='feed'>

        <FeedTopCard />
        <Shared />
    </div>
  )
}

export default Feed