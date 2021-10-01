import { createTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'


export const theme = createTheme({
    palette: {
        primary: {
          main: blue[500],
        },
        secondary: {
          main: '#f44336',
        },
      },
    mybutton:{
        backgroundColor:'red',
        console:'#fff',
        margin:'20px'
    }
})