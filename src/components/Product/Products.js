import React,{Component} from "react";
import {getProducts} from "../../Api/Products";

class Products extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    async componentDidMount() {
        await getProducts()
            .then(response=>{
                let prod = response.map(p=>{
                    return(
                        <div key={p.id}>
                            <div>
                                {p.name}
                            </div>
                        </div>
                    )
                })
                this.setState({products:prod})
            })
        
    }

    render() {

        return (
            <div className="categories">
                {this.state.products}
            </div>
        )
    }
}
export default Products