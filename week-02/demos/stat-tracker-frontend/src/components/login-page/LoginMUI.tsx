import { CssBaseline, Card, Typography, Box, FormControl, FormLabel, TextField, FormControlLabel, Checkbox, Button, Divider, Stack, styled } from '@mui/material';
import axios from 'axios';
import React, { useContext } from 'react'
import { authContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
  }));
  

function LoginMUI() {
    const [usernameError, setusernameError] = React.useState(false);
    const [usernameErrorMessage, setusernameErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const auth = useContext(authContext)
    const navigate = useNavigate();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      if (usernameError || passwordError) {
        event.preventDefault();
        return;
      }
      event.preventDefault()
      let username = (document.getElementById("username") as HTMLInputElement).value
      let password = (document.getElementById("username") as HTMLInputElement).value
      
      login(username, password);
    };

    let login = (username: string, password: string) => {
        // Here is where the logic for our login method will live
        // The main thing will be sending an axios request and interpreting the results
        console.log("Login clicked!")

        // So we can do some validation to make sure the username and password fields are actually filled out
        if (!username){
            alert("Please enter a username")
            return;
        }

        if(!password){
            alert("Please enter a password")
            return;
        }

        // Next thing is sending the actual request
        axios.post("http://localhost:8080/users/login", 
            {username, password},
            {withCredentials: true}
            // WithCredentials allows the JSESSION cookie to be set and sent with requests so we need to include
            // this on any methods that require the session
        ).then((res) => {
            console.log(res.data)
            // We'll add onto this in a few minutes
            auth?.setUsername(res.data.username)
            auth?.setRole(res.data.role)
            navigate('/favorites')
        }).catch((err) => {
            console.log(err)
            // Inside of this we could make certain error message appear on the screen 
        })
    }
  
    const validateInputs = () => {
      const username = document.getElementById('username') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
  
      let isValid = true;
  
      if (!username.value ) {
        setusernameError(true);
        setusernameErrorMessage('Please enter a valid username address.');
        isValid = false;
      } else {
        setusernameError(false);
        setusernameErrorMessage('');
      }
  
      if (!password.value || password.value.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage('Password must be at least 6 characters long.');
        isValid = false;
      } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
      }
  
      return isValid;
    };
  
    return (
        <SignInContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="username">username</FormLabel>
                <TextField
                  error={usernameError}
                  helperText={usernameErrorMessage}
                  id="username"
                  type="username"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={usernameError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign in
              </Button>
            </Box>
          </Card>
        </SignInContainer>
    );
  }

export default LoginMUI
