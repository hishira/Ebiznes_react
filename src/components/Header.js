import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import history from '../history'
import CartBadge from "./CartBadge";
import {inject,observer} from "mobx-react";
import Cookies from 'js-cookie'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    //const {authTokens,setAuthTokens} = useAuth()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogin = () =>{
        history.push('/login')
    }
    const  handleKategorie = (event) =>{
        history.push('/categories')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () =>{
        props.userStore.setUser(null)
        Cookies.remove('user')

        history.push('/')
    }
    const handleProdukty = ()=>{
        history.push('/products')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleKategorie}>Kategorie</MenuItem>
                        <MenuItem onClick={handleProdukty}>Produkty</MenuItem>
                        <MenuItem onClick={handleClose}>Kontakt</MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        E-Sklep
                    </Typography>
                    <CartBadge/>
                    {props.userStore.userIdentity?
                        (<Button color="inherit" onClick={handleLogout}>Log out</Button>):(<Button color="inherit" onClick={handleLogin}>Login</Button>)}
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default inject(stores => ({
    basketStore: stores.basketStore,
    userStore: stores.userStore
}))(observer((ButtonAppBar)))