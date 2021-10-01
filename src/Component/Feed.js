import React from 'react'
import {Container, makeStyles} from '@material-ui/core'
import Post from './Post'


const useStyle = makeStyles((theme)=>({

    container:{
        paddingTop:theme.spacing(10)
    }
}))



function Feed() {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
        <div>
            <Post/>
            {/* <Post/> */}
            {/* <Post/>
            <Post/> */}
        </div>
        </Container>
    )
}

export default Feed
