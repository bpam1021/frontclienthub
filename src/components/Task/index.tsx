import React from 'react';
import { TaskItem, TodayTask } from '../../core/interfaces/Task';
import * as IconModule from '../../core/data/CustomSvg/CustomSvg'
import {Link} from 'react-router-dom';
import { SvgProps } from '../../core/interfaces/Svg';
import logo from '../../logo.svg';

const Task = (props: TodayTask) => {
  const IconSVG = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
    return (
      <div className="flex flex-col justify-between items-between bg-white">
        <div className ="header flex flex-col">
            <div className="title text-center mt-5">
            <h3 className="text-19 font-semibold">Tasks for today</h3>
            </div>
            <div className="mt-10">
              {
                
                props.todaytaskitmes.map((item: TaskItem, index) => {
                  const Icon = IconSVG[`${item.icon}`];

                  return (
                    <div className={`w-full box-border  shadow-xl mb-20 py-15 pl-10 border-l-8 rounded-l border-darkviolet`}>
                        <a className="flex items-center cursor-pointer grab hover:text-alto" key={item.name} href={item.url}>
                        <span className="text-blueviolet text-17 font-semibold">{item.name}</span>
                        </a>
                        <p  className="pt-5">{item.description}</p>
                    </div>
                  )
                })
              }
          </div>
          
        </div>
      </div>
    )
  }
  
  export default Task;