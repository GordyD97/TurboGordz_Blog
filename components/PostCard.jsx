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
          className="object-top absolute h-80 w-full object-cover shadoq-lg rounded-t-lg lg:rounded-lg"
        />

        {/* re add the syntax src={post.featuredImage.url} when render issue is resolved. */}
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
          {post.title}

        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 q-full lg:w-auto mr-8'>
          <img 
          alt={post.author.name}
          height="30px"
          width="30px"
          classname="align-middle rounded-full"
          src={post.author.photo.url}
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div> 
<div className='font-medium text-gray-700'>
{/* date svg goes in here  */}
</div>
      </div>
    </div>
  );
}
// getting an error that url is not being defined probably because of no image url for the demo i used a normal image i think. 

export default PostCard

// error on render is becacuse of improper data transfer from graphcms most likely the dot notation in the image url link. 