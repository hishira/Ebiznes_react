import React from "react";
import {getProductById} from "../../Api/Products";

class Product extends React.Component{
    constructor() {
        super();
        this.state = {
            product: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getProductById(params.id).then(dane => {
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
                            {d.count}
                        </div>
                        <div>
                            {d.producer}
                        </div>
                    </div>

                )
            })
            this.setState({product: com})

        }).catch(e => this.setState({product: []}))
    }

    render() {
        return (
            <div>
                {this.state.product}
            </div>
        )
    }
}
export default Product;