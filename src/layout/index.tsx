import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../app/store';

import {
    toggleSideBar,
} from '../app/appSlice';

import Navbar from '../components/Nav/index'
import SideBar from '../components/SideBar/index'
import { menuitems, socialitems, externalitems } from '../core/data/Sidebar';

const Layout = ({children}:{children:any}) => {
    const dispatch = useDispatch();
    const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);
    const closeSidebar = ()=>
    {
        if(isCollapsed === false)
            dispatch(toggleSideBar());
    }
    return(
        <div className='w-full h-screen'>
            {/* <div className="w-full fixed z-10" onClick={closeSidebar}>
                <Navbar/>
            </div> */}
            <div className="flex flex-grow overflow-hidden bg-white">
                <div className={`h-full md:block fixed md:static z-20 lg:left-0 ${isCollapsed ? '-left-280': 'left-0'}`}>
                    <SideBar menuitems={menuitems} socialitems={socialitems} externalitems={externalitems}/>
                </div>
                <div className="flex-grow w-full h-full mr-280
                pt-45 md:pt-45 px-35 pb-10 overflow-y-auto scrollbar-hide">{children}</div>
            </div>
        </div>
    )
}
export default Layout;