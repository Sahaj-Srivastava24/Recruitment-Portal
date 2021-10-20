import React,{ useState, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import UserContext from '../component/UserContext';


export default function Signin() {

    const [ email, setEmail ] = useState("")
    const [ pass, setPass ] = useState("")
    let history = useHistory();
    var { user, setUser } = useContext(UserContext)
    console.log(user)

    const handleSubmit = () => {
        // Uncomment it for post req
        // fetch('http://localhost:3001/userLoginRequest', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     username: email,
        //     password: pass,
        // }),
        // })
        // .then((res) => res.json())
        // .then((result) => console.log(result))
        // .catch((err) => console.log(err))

        fetch('http://localhost:3001/userLoginResponse')
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            setUser(result)
        })
        .catch((err) => console.log(err))
        history.push("/");
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
                    <Link to="/">
                        <Button variant="outlined">Go Back</Button>
                    </Link>
                </Stack>
            </Box>
        </div>
    )
}
