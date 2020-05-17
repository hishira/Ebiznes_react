import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NumberFormat from "react-number-format";
import {createDeliver} from "../../Api/DeliverApi";
import history from "../../history";
class DeliverForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cost: 0,
            description: "",
        }
        this.createDeliverhandle = this.createDeliverhandle.bind(this)
    }

    async createDeliverhandle(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.cost, this.state.description)
        await createDeliver({
            name: this.state.name,
            cost: parseInt(this.state.cost),
            description: this.state.description
        })
        history.push('/delivers')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz dostawce
                <form onSubmit={this.createDeliverhandle} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa dostawcy"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <TextField
                        label="Cena"
                        onChange={(event) => {
                            this.setState({cost: event.target.value})
                        }}
                        name="Cena "
                        id="cost"
                        fullWidth
                        required
                        InputProps={{
                            inputComponent: NumberFormat,
                        }}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Opis dostawcy"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        prefix="PLN"
                        onChange={(event) => this.setState({description: event.target.value})}
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

export default DeliverForm