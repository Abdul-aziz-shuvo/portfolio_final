import React,{useEffect, useState} from 'react';
import Feed from '../feed';
import About from '../about';
import Blog from '../blog';
import Work from '../work';

const ActiveTab = ({activeTab}) => {


    const componentObj = {
        'feed' : <Feed />,
        'about' : <About />,
        'work' : <Work />,
        'blog' : <Blog />,

    }

    return (
        <div>
           {
              componentObj[activeTab] 
            }
           
        </div>
    );
}

export default ActiveTab;
