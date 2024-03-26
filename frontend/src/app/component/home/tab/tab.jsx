"use client"
import React, { useEffect, useState } from 'react';
import ActiveTab from './activeTab';

const Feature = () => {
    const [activeTab, setActiveTab] = useState('feed')
   

    const tabToggle = (e) => {
            setActiveTab(e.target.dataset.name)
    }

    return (
        <div>
            <div className='md:mx-auto md:w-1/2 w-full my-14'>
                <ul className='parent_tab flex justify-around list-none relative cursor-pointer'>
                    <li onClick={(e) => tabToggle(e)} data-name='feed' className={
                        activeTab != undefined && activeTab == 'feed' ? 'tab_link' : ''
                        }>Feed </li>
                    <li onClick={(e) => tabToggle(e)} data-name='about' className={
                        activeTab != undefined && activeTab == 'about' ? 'tab_link' : ''
                        }>About </li>
                    <li onClick={(e) => tabToggle(e)} data-name='work' className={
                        activeTab != undefined && activeTab == 'work' ? 'tab_link' : ''
                        }>Work </li>
                    <li onClick={(e) => tabToggle(e)} data-name='blog' className={
                        activeTab != undefined && activeTab == 'blog' ? 'tab_link' : ''
                        }>Blog </li>
                </ul>
            </div>

            {
                activeTab != undefined ? <ActiveTab  activeTab={activeTab} /> : ''
            }

        </div>
    );
}

export default Feature;
