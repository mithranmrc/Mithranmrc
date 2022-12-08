import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="success" sx={{color:'yellow'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Typography varient="h6" component="div" sx={{flexGrow:1}}>
            <Link herf="/home">Home</Link>
            <Link herf="/aboutus">AboutUs</Link>
            <Link herf="/contactus">ContactUs</Link>   
          </Typography>
          <IconButton color="primary" aria-lable="add to shopping cart">
            <AddShopingCartIcon>
              <Link herf="/login">Login</Link>
            </AddShopingCartIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
