import React,{Component} from "react";
import {getProducts} from "../../Api/Products";
import Button from "@material-ui/core/Button";
import history from "../../history";
class Products extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.updateClickHandle = this.updateClickHandle.bind(this)
    }
    updateClickHandle(id){
        history.push(`/updateproduct/${id}`)
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
                            <div>{p.cost}</div>
                            <div>{p.count}</div>
                            <div>{p.producer}</div>
                            <Button onClick={this.updateClickHandle.bind(this,p.id)}>Update</Button>
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