import React,{useState} from 'react'
import {AppBar, Avatar, InputBase, makeStyles, Tooltip} from '@material-ui/core'
import { Toolbar,Typography } from '@material-ui/core'
import { Cancel, Search } from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import { Mail } from '@material-ui/icons'
import { Notifications } from '@material-ui/icons'

const useStyle = makeStyles((theme)=>({

    toolbar:{
        display:'flex',
        justifyContent: 'space-between'
    },

    logoLg:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block',
        }
    },
    logoSm:{
        display:'block',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center' ,
        backgroundColor: '#82b1ff',
        borderRadious: '15px',
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            display:(props)=>(props.open ? 'flex':'none'),
            width:'55%'
        },
    },
    
    input:{
        color:'#fff',
        marginLeft: theme.spacing(1),
        
    },
    cancel:{
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    searchButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
        
    },
    icons:{
        alignItems:'center',
        display:(props)=>(props.open ? 'none':'flex')
    },
    Badge:{
        marginRight:theme.spacing(3)
    },
    
}))


function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyle({open})
    return (
        <AppBar position='fixed'>
           <Toolbar className={classes.toolbar}>
           <Typography variant="h6" className={classes.logoLg}>
                commerceo lg
           </Typography>

           <Typography variant="h6" className={classes.logoSm}>
                social sm
           </Typography>

{/* *****************************  imp  ****************/}

           <div className={classes.search}>
               <Search />
               <InputBase placeholder='search...' className={classes.input}/>
               <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
           </div>

           <div className={classes.icons}>
               <Search className={classes.searchButton} 
               onClick={()=>setOpen(true)}/>
           <Badge badgeContent={4} color="secondary" className={classes.Badge}>
                <Mail />
           </Badge>

            <Badge badgeContent={2} color="secondary"  className={classes.Badge}>
                <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGUlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
           </div>
           </Toolbar>
        </AppBar>
    )
}

export default Navbar;


/// NOTE ///
// 1st try to get real time issue , why you should to do this 
// after that code bcs if you will not understand issue then you will not able to code
// practice more and more 
// imp  -->  34/45/52/59/87/92