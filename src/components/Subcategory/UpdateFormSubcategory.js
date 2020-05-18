import React from "react";
import {getSubcategoryById,updateSubcategory} from "../../Api/Subcategory";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SubcategoryUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedSubcategoryId: -1,
            subcategory: [],
            name: "",
            description: "",
            categoryId: 0,
        }
        this.updateSubcategory = this.updateSubcategory.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedSubcategoryId: params.id})
        await getSubcategoryById(params.id).then(dane => this.setState({subcategory: dane}))
        this.setState({
            name: this.state.subcategory.name,
            description: this.state.subcategory.description,
            categoryId: this.state.subcategory.categoryId
        })
        console.log(this.state)
    }

    async updateSubcategory(event) {
        event.preventDefault()
        console.log(this.state)
        await updateSubcategory(this.state.updatedSubcategoryId,{
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.categoryId
        })
        history.push('/subcategories')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz pod ketegori
                <form onSubmit={this.updateSubcategory} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa podkategori"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        placeholder={this.state.name}
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Opis"
                        variant="outlined"
                        margin="normal"
                        placeholder={this.state.description}
                        fullWidth
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Update subcategory
                    </Button>
                </form>
            </Container>
        )
    }
}

export default SubcategoryUpdateForm