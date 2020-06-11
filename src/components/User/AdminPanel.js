import React from "react";
import {inject,observer} from "mobx-react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import history from "../../history";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
function AdminPanel(){
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <div>
            Admin panel
            </div>
            <Button variant="contained" onClick={()=>history.push('/createcategory')} color="primary">
                Dodaj kategorie
            </Button>
            <Button variant="contained" onClick={()=> history.push('/createproduct')} color="primary">
                Dodaj Produkt
            </Button>
        </Container>
    )
}
export default inject(stores => ({
    userStore: stores.userStore
}))(observer((AdminPanel)))