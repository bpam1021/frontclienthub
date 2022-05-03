import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollapseIcon } from '../../core/data/CustomSvg/CustomSvg';
import {
  toggleSideBar,
} from '../../app/appSlice';

import logo from '../../logo.svg';
const Nav = () => {
    const dispatch = useDispatch();
    return (
      <div className="flex flex-row justify-between items-center w-full h-55 mb-20 bg-white md:h-55 md:pb-10">
        <div className=" items-center h-40 rounded">       
          <h3 className="text-darkviolet text-22 font-semibold">Hello, Sara</h3>
          <p>Today is Monday, 20 October 2021</p>
        </div>
        <div className="flex justify-center items-center h-40 ">
          <div className="flex justify-center items-center cursor-pointer bg-gray w-40 h-40 rounded m-5"
          onClick = {()=>dispatch(toggleSideBar())}>       
            <CollapseIcon width="20px" fill='blackviolet'/>
          </div>
          <input className="rounded text-gray pl-10 bg-darkblue h-40 " type="text" value="New Message"></input>
        </div>
      </div>
    )
  }
  
  export default Nav;