import React from "react";
import {createDeliver} from "../../Api/DeliverApi";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";
import {getDeliveById} from "../../Api/DeliverApi";
import {updateDeliver} from "../../Api/DeliverApi";

class DeliverUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedDeliverId: -1,
            deliver: [],
            name: "",
            cost: 0,
            description: "",
        }
        this.updateDeliver = this.updateDeliver.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedDeliverId: params.id})
        await getDeliveById(params.id).then(dane => this.setState({deliver: dane}))
        this.setState({
            name: this.state.deliver.name,
            cost: this.state.deliver.cost,
            description: this.state.deliver.description
        })
        console.log(this.state)
    }

    async updateDeliver(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.cost, this.state.description)
        await updateDeliver(this.state.updatedDeliverId, {
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
                <form onSubmit={this.updateDeliver} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa dostawcy"
                        variant="outlined"
                        margin="normal"
                        placeholder={this.state.name}
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
                        placeholder={this.state.cost}
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
                        placeholder={this.state.description}
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
                        Update
                    </Button>
                </form>
            </Container>
        )
    }
}

export default DeliverUpdateForm