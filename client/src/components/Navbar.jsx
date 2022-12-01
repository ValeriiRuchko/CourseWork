import {AppBar, Toolbar, IconButton, Menu, MenuItem, Divider} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { useState } from 'react';

function NavigationBar () {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return(
        // <Box position="static">
            <AppBar position="fixed" sx={{backgroundColor: "#54BAB9"}}>
                <Toolbar>
                        <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        >
                            <MenuItem onClick={handleCloseNavMenu}><CalendarViewMonthIcon />Завантажити розклад</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleCloseNavMenu}><MapIcon />Побачити розклад</MenuItem>
                        </Menu>
                        <IconButton sx={{ml: "93%"}} component={Link} to="/" disableRipple={true}><HomeIcon sx={{height: "40px", width: "40px", color: "black"}}/></IconButton>
                </Toolbar>
            </AppBar>
        // </Box>
    );
}

// 

export default NavigationBar;