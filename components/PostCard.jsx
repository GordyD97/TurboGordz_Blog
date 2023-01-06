import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          // loader={graphCMSImageLoader}
          src={post.featuredImage}
          alt={post.title}
          className="objkect-top absolute h-80 w-full object-cover"
        />
      </div>
    </div>
  );
}
// getting an error that url is not being defined probably because of no image url for the demo i used a normal image i think. 

export default PostCard

// error on render is becacuse of improper data transfer from graphcms most likely the dot notation in the image url link. 