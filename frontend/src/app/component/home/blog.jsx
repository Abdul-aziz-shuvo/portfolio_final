import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-8 gap-4 lg:w-7/8 my-10'>
            <div className='border-solid border-gray-100 shadow-sm p-3 lg:col-span-4 col-span-8'>
                <h2>Blog title</h2>
                <p>blog description</p>
                <img src="" alt="" />
            </div>
            <div className='border-solid border-gray-100 shadow-sm p-3 col-span-8 lg:col-span-4'>
                <img src="/img/blog.jpg" alt="" className=' mx-auto block object-contain w-full' />
                <h2>Blog title</h2>
                <p>blog description</p>
               
            </div>

        </div>
    );
}

export default Blog;
