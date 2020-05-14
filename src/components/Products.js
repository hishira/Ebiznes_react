import React,{Component} from "react";

class Products extends Component{
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let url = "http://localhost:9090/productsjson"
        let fetchObject = {
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: "GET"
        }
        fetch(url,fetchObject)
            .then(data=>data.json())
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