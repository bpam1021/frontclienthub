import { useSelector } from 'react-redux';
import React, { useEffect, useState, memo } from 'react';
import { Paper, Grid, Zoom } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { RootState } from '../../app/store';
import Navbar from '../../components/Nav/index'
import Task from '../../components/Task/index'
import Apps from '../../components/Apps/index'
import { todaytaskitmes} from '../../core/data/Task';
import { appitems} from '../../core/data/Apps';
const Home = memo(() => {
    const wrapper = React.createRef();
    const appData = useSelector((state: RootState) => state.app);
  return (
    <div className="w-full h-full">
        <div>
            <Navbar/>
        </div>
        <Zoom in={true} ref={wrapper}>
          <Grid container spacing={3} className="flex items-center">
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper className="flex justify-evenly flex-wrap bg-darkviolet rounded-xl border-transparent border-3 py-20 min-w-200 h-200" ref={wrapper}>
                    Tasks
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper className="flex justify-evenly flex-wrap bg-cornflowerblue rounded-xl border-transparent border-3 py-20 min-w-200 h-200">
                Messages
              </Paper>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper className="flex justify-evenly flex-wrap bg-coral rounded-xl border-transparent border-3 py-20 min-w-200 h-200">
                Files
              </Paper>
            </Grid>
          </Grid>
        </Zoom>
        <div className = "content pt-100 flex w-full">
            <div className="today-task w-full pr-80">
                <Task todaytaskitmes={todaytaskitmes}/>
            </div>
            <div className="apps border-l-2 pl-80 border-blueviolet w-full">
                <Apps appitems={appitems}/>
            </div>
        </div>
    </div>
  )
})

export default Home;