import React from 'react';

const Feed = () => {
    return (
        <div className='lg:mx-20 mx-10 border-solid border-gray-100'>
            <div className=' lg:w-6/7   flex p-3 rounded-md user_details'>
                <div className='my-2'>
                    <img src="https://placehold.co/50x50" alt="" className=' rounded-full' />
                </div>
                <div className='mx-5  flex flex-col'>
                    <p className='my-2 m-0'><span>Abdul Aziz</span> <span className='font-xl'>-</span> <time className=''>8-09-24</time></p>
                    <p className=' bg-gray-200 rounded-full w-1/2 text-center py-1 m-0'>Chilling</p>
                </div>
            </div>

            <div className='post_details'>
                <p className='md:w-3/4 md:p-0 px-3 my-0 mx-auto'>This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.</p>
                <div className='my-2  w-5/8 p-5'>
                    <img src="/img/blog.jpg" alt="" className='  object-contain w-full ' />
                </div>

            </div>


        </div>
    );
}

export default Feed;
