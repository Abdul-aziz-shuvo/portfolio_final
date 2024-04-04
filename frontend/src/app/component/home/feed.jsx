'use client'
import React, { useState, useEffect } from 'react';
import date from 'date-and-time';
const Feed = () => {
    const [feeds, setFeeds] = useState()
    const GetAllFeed = async () => {
        let data = await fetch('http://localhost:8000/api/feeds')
        let { feeds } = await data.json();
        setFeeds(feeds);
    }

    useEffect(() => {
        GetAllFeed()
    }, [])
    useEffect(() => {
        console.log(feeds);
    }, [feeds])
    return (
        <div className='lg:mx-20 mx-10 border-solid border-gray-100'>
            {
                feeds != undefined ? feeds.map((feed) => {
                    return (
                        <>
                            <div className=' lg:w-6/7   flex p-3 rounded-md user_details'>
                                <div className='my-2'>
                                    <img src='https://dummyimage.com/40x40/000/fff' alt="" className=' rounded-full' />
                                </div>
                                <div className='mx-5  flex flex-col'>
                                    <p className='my-2 m-0'><span>Abdul Aziz</span> <span className='font-xl'>-</span> <time className=''>{date.format(new Date(feed?.created_at), 'ddd, MMM DD YYYY') }</time></p>
                                    <p className=' bg-gray-200 rounded-full w-1/2 text-center py-1 m-0'>Chilling</p>
                                </div>
                            </div>

                            <div className='post_details'>
                                <p className='md:w-3/4 md:p-0 px-3 my-0 mx-auto'>{feed?.content}</p>
                                <div className='my-2  w-5/8 p-5'>
                                    <img src={'http://localhost:8000/storage' + '/' + feed?.img} alt="" className='  object-contain w-full ' />
                                </div>

                            </div>
                        </>
                    )
                }) : ''
            }


        </div>
    );
}

export default Feed;
