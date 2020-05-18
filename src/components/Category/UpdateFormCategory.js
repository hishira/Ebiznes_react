import React from 'react'
import {getCategoriesById,updateCategory} from "../../Api/Categories";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CategoryUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedCategoryId: -1,
            category: [],
            name: "",
            description: ""
        }
        this.updateCategory = this.updateCategory.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedCategoryId: params.id})
        await getCategoriesById(params.id).then(dane => this.setState({category: dane}))
        this.setState({name: this.state.category.name, description: this.state.category.description})

    }

    async updateCategory(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.description)
        console.log(this.state.updatedCategoryId)
        await updateCategory(this.state.updatedCategoryId,{
            name: this.state.name,
            description: this.state.description
        })
        history.push('/categories')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Update kategorie
                <form onSubmit={this.updateCategory} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa kategori"
                        variant="outlined"
                        margin="normal"
                        placeholder={this.state.category.name}
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Opis"
                        placeholder={this.state.category.description}
                        variant="outlined"
                        margin="normal"
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
                    >
                        Update
                    </Button>
                </form>
            </Container>
        )
    }
}

export default CategoryUpdateForm