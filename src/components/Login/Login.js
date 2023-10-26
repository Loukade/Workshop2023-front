import React from "react";
import "./Login.css";
import axios from "axios";
import logo from "/Public/images/logo.png"
import withRouter from "Hook/WithRouter"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
const apiUrl =  process.env.REACT_APP_API_URL;
const theme = createTheme();
function Login() {
    let navigate = useNavigate();
    const handleSubmit = (event) =>  {

        let path;
        event.preventDefault();
        /*axios.post(apiUrl +"/api/auth/signin", {
            username: event.target.username.value,
            password: event.target.password.value
        }).then((response) => {
            const accessToken = response.data.accessToken;
            sessionStorage.setItem('isConnected' , "Connecté");
            sessionStorage.setItem('Roles', response.data.roles);
            if(response.data.roles === 1{
                path = `/admin/direction`;
            }
            else{
                path =`/user/Accueil`;
            }
            navigate(path);
            window.location.reload(false);

        }).catch(err => {
            alert("Erreur de nom d'utilisateur ou de mot de passe")
        });*/
        sessionStorage.setItem('isConnected' , "Connecté");
        sessionStorage.setItem('Roles', 1);
       /* navigate("/user/Accueil")*/
        navigate("/admin/direction")
        window.location.reload(false);
    }

        return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} width="300px"/>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        );
    }
export default withRouter(Login);

