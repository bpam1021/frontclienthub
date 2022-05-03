import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
import { SidebarItem, SidebarProps } from '../../core/interfaces/Sidebar';
import * as IconModule from '../../core/data/CustomSvg/CustomSvg'
import {useHistory } from 'react-router-dom';
import { SvgProps } from '../../core/interfaces/Svg';
import logo from '../../logo.svg';
import {treeData} from '../../core/data/Tree';
import '../../../node_modules/react-simple-tree-menu/dist/main.css';

const SideBar = (props: SidebarProps) => {
  const IconSVG = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
  const history = useHistory();
  const navigation = (item: any) => {
    console.log(history);
    return history.push(`${item}`)
  }
    return (
      <div className="flex flex-col justify-between items-between w-280 px-35 my-45 border-r-2 border-blueviolet h-screen bg-white">
        <div className ="header flex flex-col">
          <div className="mt-30">
              <div className="avatar">
                <a target="_blank" href="#">
                <img src={logo} className="rounded-full mx-auto" width="150px" height="150px" alt="logo" />
                </a>
              </div>
              <div className="avatar-title text-center mt-5">
                <h3>Sarah Corner</h3>
                <h4>sarahc@gmail.com</h4>
              </div>
          </div>
          <div className="ml-30 mt-30">
          <TreeMenu data={treeData} onClickItem={({ key, label, ...props }) => {
            navigation(props.url)
     // user defined prop
  }}/>
              {/* {
                
                props.menuitems.map((item: SidebarItem, index) => {
                  const Icon = IconSVG[`${item.icon}`];

                  return (
                    <a className="flex items-center my-10 cursor-pointer grab hover:text-alto" key={item.name} href={item.url}>
                      <Icon width="20px" fill="blueviolet" className="mr-10"/>
                      <span className="text-blueviolet text-17 font-semibold">{item.name}</span>
                    </a>
                  )
                })
              } */}
          </div>
          {/* <div className="ml-30 mb-40">
            <div className ="text-white mt-10 px-35">
              <p>Bond discounts</p>
              <div className = "py-5">
                <a href="/#/bonds/shib">
                  <div className="flex justify-between">
                    <p>SHIB</p>
                    <p>99.49%</p>
                  </div>
                </a>
              </div>
              <div className = "py-5">
                <a href="/#/bonds/shib">
                  <div className="flex justify-between">
                    <p>SHIB</p>
                    <p>99.49%</p>
                  </div>
                </a>
              </div>
              <div className = "py-5">
                <a href="/#/bonds/shib">
                  <div className="flex justify-between">
                    <p>SHIB</p>
                    <p>99.49%</p>
                  </div>
                </a>
              </div>
              <div className = "py-5">
                <a href="/#/bonds/shib">
                  <div className="flex justify-between">
                    <p>SHIB</p>
                    <p>99.49%</p>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className= "externalitems ml-30">
            {
              props.externalitems.map((item: SidebarItem, index) => {
                const Icon = IconSVG[`${item.icon}`];

                return (
                  <a className="flex items-center my-10 cursor-pointer grab hover:text-alto" href={item.url} key={item.name}>
                      <Icon width="20px" fill="white" className="mr-10"/>
                      <span className="text-white text-17 font-semibold">{item.name}</span>
                    </a>
                )
              })
            }
          </div> */}
        </div>
        <div className="footer flex justify-around">
          {/* {
            props.socialitems.map((item: SidebarItem, index) => {
              const Icon = IconSVG[`${item.icon}`];

              return (
                <a className="flex items-center my-10 cursor-pointer grab hover:text-alto" href={item.url} key={item.name}>
                    <Icon width="20px" fill="white" className="mr-10"/>
                  </a>
              )
            })
          } */}
        </div>

      </div>
    )
  }
  
  export default SideBar;