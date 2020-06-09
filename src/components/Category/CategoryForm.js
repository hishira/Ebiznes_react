import React from "react";
import {createCategory} from "../../Api/Categories";
import Container from "@material-ui/core/Container";
import history from "../../history";
import FormInput from "../FormInput";
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
        console.log("categoru")
        console.log(this.state.name,this.state.description)
        await createCategory({name:this.state.name,description: this.state.description})
        history.push('/categories')
    }
    render() {
        return(
            <Container component="main" maxWidth="xs">
                Utowrz kategorie
                <form  onSubmit={this.createCateogry}  autoComplete="off">
                    <FormInput firstlabel={"Nazwa kategori"}
                               secondlabel={"Opis"}
                               firstfunction={(event) => this.setState({name: event.target.value})}
                               secondfunction={(event) => this.setState({description: event.target.value})}
                    />
                </form>
            </Container>
        )
    }
}
export default CategoryForm