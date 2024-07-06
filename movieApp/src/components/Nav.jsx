// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import { green } from '@mui/material/colors'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Nav = () => {

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static"style={{width :'700 px',background:('pink')}}>
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//           {/* <MenuIcon/> */}
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           MOVIE APP
//         </Typography>
//         <Link style={{color:'white'}}  to='/'><Button color="inherit">View movie</Button></Link>
//         <Link style={{color:'white'}}  to='/add'><Button color="inherit">Add movie</Button></Link>
//       </Toolbar>
//     </AppBar>
//   </Box>
  
//   )
// }

// export default Nav


import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{width :'700 px',background:('cadetblue')}} position="static">
      <Toolbar>
        <Typography style={{color:'white'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          movieApp
        </Typography>
       <Link style={{color:'black',backgroundColor:'pink'}}  to='/'> <Button color="inherit" >ViewMovie</Button></Link>

       <Link style={{color:'black',backgroundColor:'pink'}}  to='/Add'> <Button color="inherit" >AddMovie</Button></Link>
      {/* <Link style={{color:'white'}}  to='/Mcard'> <Button color="inherit">Card</Button></Link>*/}
      </Toolbar>
    </AppBar>
  </Box>

    </div>
  )
}

export default Navbar