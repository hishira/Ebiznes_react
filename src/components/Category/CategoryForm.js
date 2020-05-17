import React from "react";
import {createCategory} from "../../Api/Categories";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../../history";
class CategoryForm extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        }
        this.createCateogry = this.createCateogry.bind(this)
    }
    async createCateogry(event){
        event.preventDefault()
        console.log(this.state.name,this.state.description)
        await createCategory({name:this.state.name,description: this.state.description})
        history.push('/categories')
    }
    render() {
        return(
            <Container component="main" maxWidth="xs">
                Utowrz kategorie
                <form  onSubmit={this.createCateogry}  autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa kategori"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event)=>this.setState({name:event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Opis"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        onChange={(event)=>this.setState({description:event.target.value})}
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
            </Container>
        )
    }
}
export default CategoryForm