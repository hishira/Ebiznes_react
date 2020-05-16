import React from "react";
import {getDeliveById} from "../../Api/DeliverApi";


class Deliver extends React.Component {

    constructor() {
        super();
        this.state = {
            deliver: []
        }
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