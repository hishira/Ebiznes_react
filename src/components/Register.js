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
import {checkUserLogin,createUser} from "../Api/UserApi";
import history from "../history";
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

export default function SignUp() {
    const classes = useStyles();
    const [login,setLogin] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [rePassword,setRepassword] = useState("")
    async function createHandle(event) {
        event.preventDefault()
        console.log(login,email,password,rePassword)
        if(rePassword !== password){
            alert("Hasla sie nie zgadzaja")
        }
        let count = -1
        await checkUserLogin({login:login}).then(dane=>count = dane)
        if(count >0){
            alert("Uzytkownik o podanym login istnieje")
        }else if(count === 0) {
            await createUser({login:login,email:email,password:password})
            history.push('/')
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
                    Sign up
                </Typography>
                <form className={classes.form}  onSubmit={createHandle} autoComplete="off">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        onChange={(event)=>setEmail(event.target.value)}
                        required
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="username"
                        autoFocus
                        onChange={(event)=> setLogin(event.target.value)}
                        required
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
                        required
                        onChange={(event)=> setPassword(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="re-password"
                        label="Re-Password"
                        type="password"
                        id="re-password"
                        required
                        onChange={(event)=>setRepassword(event.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Create
                    </Button>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}