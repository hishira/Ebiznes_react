import React from "react";
import {getCategories} from "../../Api/Categories";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {createSubcategory} from "../../Api/Subcategory";

class SubcategoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            categoryId: 0,
            categories: []
        }
        this.createSubcategory = this.createSubcategory.bind(this)
    }

    async componentDidMount() {
        await getCategories().then(dane => {
            console.log(dane)
            this.setState({categoryId: dane[0].id})
            this.setState({categories: dane})
        })
    }

    async createSubcategory(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.description, this.state.categoryId)
        await createSubcategory({
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
                <form onSubmit={this.createSubcategory} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa podkategori"
                        variant="outlined"
                        margin="normal"
                        fullWidth
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
                        fullWidth
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={this.state.categoryId}
                        fullWidth
                        onChange={(event) => this.setState({categoryId: event.target.value})}
                        className="selectStyle"
                    >
                        {this.state.categories.map(cat => {
                            return (
                                <MenuItem key={cat.id} value={cat.id}>
                                    {cat.name}
                                </MenuItem>
                            )
                        })}
                    </Select>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Create iamge
                    </Button>
                </form>
            </Container>
        )
    }

}

export default SubcategoryForm