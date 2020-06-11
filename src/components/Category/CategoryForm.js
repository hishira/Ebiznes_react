import React from "react";
import {createCategory} from "../../Api/Categories";
import Container from "@material-ui/core/Container";
import history from "../../history";
import FormInput from "../FormInput";
import {inject, observer} from "mobx-react";
class CategoryForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            unauthorized: false
        }
        this.createCateogry = this.createCateogry.bind(this)
    }
    async createCateogry(event){
        event.preventDefault()
        console.log("categoru")
        console.log(this.state.name,this.state.description)
        await createCategory({id:-1,name:this.state.name,description: this.state.description},this.props.userStore.userIdentity.token)
            .then(request=> {
                if (request.status > 400) {
                    alert("Unauthorized")
                    this.setState({unauthorized:true})
                }else{
                    this.setState({unauthorized:false})
                }
            })
        if (this.state.unauthorized){
            return
        }
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
export default inject(stores => ({
    userStore: stores.userStore
}))(observer(CategoryForm))