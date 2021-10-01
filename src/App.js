import React from 'react'
import './App.css'
import {Grid, makeStyles} from '@material-ui/core'
import Navbar from './Component/Navbar'
import Leftbar from './Component/Leftbar'
import Feed from './Component/Feed'
import Rightbar from './Component/Rightbar'
import Add from './Component/Add'

const useStyle = makeStyles((theme)=>({
    right:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))


function App() {
    const classes = useStyle()
    return (
        <div>
           <Navbar/>
           <Grid container >
               <Grid item sm={2} xs={2}>
                   <Leftbar/>
               </Grid>
               <Grid item sm={7} xs={10}>
                    <Feed/>
               </Grid>
               <Grid item sm={3} className={classes.right}>
                    <Rightbar/>
               </Grid>
           </Grid>
            <Add/>
        </div>
    )
}

export default App
