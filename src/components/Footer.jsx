import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        /* footer */
        <Box sx={{ padding: "10px", textAlign: "center", height: "45px" }} position="static" className='bg-dark'>
            <Typography sx={{ color: "white" }}>&copy; Ashik Biju | 2025</Typography>
        </Box >
    )
}

export default Footer