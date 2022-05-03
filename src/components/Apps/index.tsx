import React from 'react';
import { AppItem, AppItems } from '../../core/interfaces/Apps';
import * as IconModule from '../../core/data/CustomSvg/CustomSvg'
import {Link} from 'react-router-dom';
import { SvgProps } from '../../core/interfaces/Svg';
import logo from '../../logo.svg';

const Apps = (props: AppItems) => {
  const IconSVG = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
    return (
      <div className="flex flex-col justify-between items-between bg-white">
        <div className ="header flex flex-col">
            <div className="title text-center mt-5">
            <h3 className="text-19 font-semibold">Apps</h3>
            </div>
            <div className="mt-10 grid grid-cols-1 divide-y">
              {
                
                props.appitems.map((item: AppItem, index) => {
                  const Icon = IconSVG[`${item.icon}`];
                  // let imgurl = require(`${item.icon}`);
                  // console.log(imgurl);
                  return (
                    <div className={`w-full flex  mb-10 py-10`}>
                        <div className="flex flex-center flex-row">
                          <img src={item.icon} className="rounded-full mx-auto my-auto" width="50px" height="50px" alt="logo" />
                        </div>
                        <div className=" pl-10">
                        <a className="flex items-center cursor-pointer grab hover:text-alto" key={item.name} href={item.url}>
                        <span className="text-blueviolet text-17 font-semibold">{item.name}</span>
                        </a>
                        <p  className="pt-5">{item.description}</p>
                        </div>
                    </div>
                  )
                })
              }
          </div>
          
        </div>
      </div>
    )
  }
  
  export default Apps;