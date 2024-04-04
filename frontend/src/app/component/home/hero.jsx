"use client"
import React, { useEffect, useState } from 'react';
import { FaBriefcase } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import Modal from '../modal';

const ModalData = () => {



    return (
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h3>Contact Form</h3>
            <form action="" className='ml-auto w-96 block'>
                <div className='from_group my-2'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                    <input class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                </div>
                <div className='from_group my-2'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                    <input class="shadow appearance-none border rounded w-2/3  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
                </div>
                <div className='from_group my-2'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Message</label>
                    {/* <textarea class="resize-y rounded-md" cool="60" rows='10'></textarea> */}
                    <textarea name="" id="" cols="40" rows="7"></textarea>

                </div>
                <button class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
            </form>
        </div>
    )
}

const Hero = () => {
    const [modalActive, setModalActive] = useState(false);
    const [profile, setProfile] = useState()
    const profileDetails = async () => {
        let data = await fetch('http://localhost:8000/api/user')
        let { profile_details } = await data.json();
        setProfile(profile_details);
    }

    useEffect(() => {
        profileDetails()
    }, [])


    return (
        <div>
            <div className='relative'>
                <div className=''>
                    <img src={'http://localhost:8000/storage' + '/' + profile?.cover_img} className='w-full h-64 bg-cover bg-center' alt="" />
                </div>
                <div className='absolute -bottom-20 left-10'>
                    <img src={'http://localhost:8000/storage' + '/' + profile?.profile_img} alt="" className='object-contain rounded-full w-52 h-55' />
                </div>
            </div>

            <div className='relative feature_button'>
                <button className='absolute right-20 top-10' onClick={() => setModalActive(true)}>Contact</button>
                <button className='absolute right-0 top-10'>Subscribe</button>
            </div>

            <div className='grid grid-cols-6 ml-10  mt-24'>
                <h3 className=' text-2xl col-span-6 m-0'>{profile?.name} &#128187;</h3>
                <p className=' text-xl text-gray-600 col-span-6 m-1'>Brings ideas to life with code! ✨.</p>
                <p className=' text-l text-gray-600 col-span-6 m-1'> {profile?.bio} </p>

            </div>
            <div className='flex justify-around lg:mx-10 mt-5'>
                <div><FaBriefcase className='mr-1' /> Available</div>
                <div> <IoIosLink className='mr-1' /> Links</div>
                <div><FaBirthdayCake className='mr-1' />Auguest 24th</div>
                <div><GrUserWorker /> <span >2+ yrs</span> </div>
            </div>

            {
                modalActive && <Modal active={modalActive} setModalActive={setModalActive}>
                    <ModalData />
                </Modal>

            }



        </div>

    );
}

export default Hero;
