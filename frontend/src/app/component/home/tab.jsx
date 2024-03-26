"use client"
import React, { useEffect, useState } from 'react';
import Feed from './feed';
import Work from './work';
import Blog from './blog';
import About from './about';

const Feature = () => {

    const [activeTab, setActiveTab] = useState({
        feed: true,
        about: false,
        work: false,
        work: false
    })

    const tabToggle = (e) => {
        let parentTab = document.getElementsByClassName('parent_tab');
        let tabArray = Array.from(parentTab[0].children);
        tabArray.map((tab) => {
            activeTab[tab.dataset.name] = false;
            if (tab.classList.contains('tab_link')) {
                tab.classList.remove('tab_link')
            }
        })

        if (!e.target.classList.contains('tab_link')) {
            setActiveTab({ ...activeTab, [e.target.dataset.name]: true })
            e.target.classList.add('tab_link')
        }
    }



    return (
        <div>
            <div className='md:mx-auto md:w-1/2 w-full my-14'>
                <ul className='parent_tab flex justify-around list-none relative cursor-pointer'>
                    <li onClick={(e) => tabToggle(e)} data-name='feed' className='tab_link'>Feed </li>
                    <li onClick={(e) => tabToggle(e)} data-name='about'>About </li>
                    <li onClick={(e) => tabToggle(e)} data-name='work'>Work </li>
                    <li onClick={(e) => tabToggle(e)} data-name='blog'>Blog </li>
                </ul>
            </div>

            {
                activeTab != undefined && activeTab['feed'] == true ? <Feed /> : ''
            }
            {
                activeTab != undefined && activeTab['work'] == true ? <Work /> : ''

            }

            {
                activeTab != undefined && activeTab['blog'] == true ? <Blog /> : ''
            }
            {
                activeTab != undefined && activeTab['about'] == true ? <About /> : ''
            }
        </div>
    );
}

export default Feature;
