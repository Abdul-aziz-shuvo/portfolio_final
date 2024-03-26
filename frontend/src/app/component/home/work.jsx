import React from 'react';

const Work = () => {
    return (
        <div className='my-16 lg:w-7/8'>
            <div className='grid grid-cols-8 gap-4'>
                <div className='cursor-pointer border-solid border-gray-500  col-span-8 lg:col-span-4 h-52  transform transition duration-500 hover:scale-110'>
                    <a href="https://www.sailor.clothing/" target='_blank'>
                        <img src="/img/website1.png" alt="" className="object-contain w-full h-full" />
                    </a>
                </div>

                <div className='border-solid border-gray-500 col-span-8 lg:col-span-4  h-52 '>
                    <a href="https://www.wholesaleclubltd.com/" target='_blank'>
                        <img src="/img/website2.png" alt="" className="object-contain w-full h-full" />
                    </a>
                </div>
               
            </div>
        </div>
    );
}

export default Work;
