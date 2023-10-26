import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";


export default function Error() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path;
        if(sessionStorage.getItem('isConnected') === "Connecté" && sessionStorage.getItem("Roles").includes("ROLE_ADMIN"))
            path = `/admin/dashboard`;
        else if(sessionStorage.getItem('isConnected') === "Connecté" && sessionStorage.getItem("Roles").includes("ROLE_USER")){
            path =`/user/dashboard`;
        }
        else{
            path = `/`;
        }
        navigate(path);
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h1" style={{ color: 'Black' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'Black' }}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={routeChange}>Back Home</Button>
        </Box>
    );
}