import React,{ useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { set } from 'mongoose';


export default function Signin() {

    const [ email, setEmail ] = useState("")
    const [ pass, setPass ] = useState("")
    
    const handleSubmit = () => {
        fetch('http://localhost:3001/userLoginRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password: pass,
        }),
        })
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <Box
            component="form"
            sx={{
                maxWidth: 600,
                alignContent: 'center',
                justifyContent: 'center',
                p:1
            }}
            autoComplete="off"
            >
                <Typography variant="h4" component="div" gutterBottom>
                    Login for the Recruitment Quiz
                </Typography>
                <Stack spacing={2} sx={{ py: 2, px:1}}>
                        <TextField
                        required 
                        id="filled-required"
                        label="Username or Email"
                        onChange={ (e)=> setEmail(e.target.value) }
                        />
                        <TextField
                        required 
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        onChange={ (e)=> setPass(e.target.value) }
                        />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ px: 1}} >
                    <Button variant="contained" onClick={ handleSubmit }>Login</Button>
                    <Button variant="outlined">Go Back</Button>
                </Stack>
            </Box>
        </div>
    )
}
