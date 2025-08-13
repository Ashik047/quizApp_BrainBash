import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const Header = () => {
    return (
        /* header navbar */
        <Box>
            <AppBar position="static" className='bg-dark'>
                <Toolbar className="d-flex justify-content-between">
                    <Link id="nav__logo" href="/" color="inherit" sx={{ textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold" }}>
                        BrainBash
                    </Link>
                    <Link id="nav__quiz" href="/" color="inherit" sx={{ textDecoration: "none" }}>Home</Link>
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header