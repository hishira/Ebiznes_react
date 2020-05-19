import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from "../../history";
import {authUser} from "../../Api/UserApi";
import {useAuth} from "../../context/auth";
import {Redirect} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-ui
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function singUpHandle() {
    history.push('/register')
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonColor: {
        backgroundColor: "#ff5722"
    }
}));

export default function SignIn() {
    const classes = useStyles();
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const {setAuthTokens} = useAuth()
    const [isLoggedIn,setLoggedIn] = useState(false)
    async function hundleSubmit(event) {
        event.preventDefault();
        const data = {login:login,password:password}
        let user = {}
        await authUser(data).then(dane => user=dane)
        console.log(user)
        if(typeof user === 'string'){
            console.log("nie ma uzytkownika")
        }
        else if(Object.keys(user).length === 0){
            alert("Nie ma takiego uzythownika")
        }
        else {
            console.log("yes")
            setAuthTokens(user)
            setLoggedIn(true)
            history.push('/user')
        }


    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={hundleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(event)=>setLogin(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event)=>setPassword(event.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="#ff5722"
                        className={classes.buttonColor}
                        onClick={singUpHandle}
                    >
                        Sign Up
                    </Button>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}