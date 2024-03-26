import React from 'react';

const Nav = () => {
    return (
      
    <nav className="shadow-md border-b-2">
        <div className="grid grid-cols-12 p-2">
          <div className="col-span-3 m-auto nav_logo">ABDUL AZIZ</div>
          <div className="col-start-7 col-span-5">
              <ul className="flex justify-between nav_menu">
                <li className=" list-none">HOME</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>WORK</li>
                <li>RESUME</li>
              </ul>
          </div>
        </div>
        
      </nav>
      
    );
}

export default Nav;
