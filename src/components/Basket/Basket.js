import React from "react";
import {getBasketById} from "../../Api/BasketApi";

class Basket extends React.Component {

    constructor() {
        super();
        this.state = {
            basket: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getBasketById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.description}
                        </div>
                    </div>

                )
            })
            this.setState({basket: com})

        }).catch(e => this.setState({basket: []}))
    }

    render() {
        return (
            <div>
                {this.state.basket}
            </div>
        )
    }
}

export default Basket