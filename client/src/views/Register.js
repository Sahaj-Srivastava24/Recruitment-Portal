import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Register() {
    return (
        <div>
            Register for the Recruitment Quiz
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                my:2,
                p:2
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                    <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    />
                    <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
            </Box>
        </div>
    )
}
