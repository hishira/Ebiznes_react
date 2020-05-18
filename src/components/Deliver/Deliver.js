import React from "react";
import {getDeliveById} from "../../Api/DeliverApi";
import Button from "@material-ui/core/Button";
import history from "../../history";
class Deliver extends React.Component {

    constructor() {
        super();
        this.state = {
            deliver: []
        }
        this.updateDeliverHandle = this.updateDeliverHandle.bind(this)
    }
    updateDeliverHandle(id){
        history.push(`/updatedeliver/${id}`)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getDeliveById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.name}
                        </div>
                        <div>
                            {d.cost}
                        </div>
                        <div>
                            {d.description}
                        </div>
                        <Button onClick={this.updateDeliverHandle.bind(this,d.id)}>
                            Update deliver
                        </Button>
                    </div>

                )
            })
            this.setState({deliver: com})

        }).catch(e => this.setState({deliver: []}))
    }

    render() {
        return (
            <div>
                {this.state.deliver}
            </div>
        )
    }
}
export default Deliver