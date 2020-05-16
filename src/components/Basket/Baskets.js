import React from "react";
import {getBasktes} from "../../Api/BasketApi";

class Baskets extends React.Component{
    constructor() {
        super();
        this.state = {baskets: []}
    }
    async componentDidMount() {
        getBasktes().then(b=>{
            let del = b.map(p=>{
                return(
                    <div  key={p.id} >
                        <div>
                            Opis: {p.description}
                        </div>
                    </div>
                )
            })
            this.setState({baskets:del})
        })
    }
    render() {
        return(
            <div>
                {this.state.baskets}
            </div>
        )
    }
}
export default Baskets