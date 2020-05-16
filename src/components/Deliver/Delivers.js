import React from "react";
import {getDelivers} from "../../Api/DeliverApi";
import './Delivers.css'

class Delivers extends React.Component{
    constructor() {
        super();
        this.state = {delivers:[]}
    }
    async componentDidMount() {
        getDelivers().then(dane=>{
            let del = dane.map(p=>{
                return(
                    <div className="deliver" key={p.id} >
                        <div>
                            Nazwa: {p.name}
                        </div>
                        <div>
                            Koszt: {p.cost}
                        </div>
                        <div>
                            Opis{p.description}
                        </div>
                    </div>
                )
            })
            this.setState({delivers:del})
        })
    }
    render() {
        return(
            <div>
                {this.state.delivers}
            </div>
        )
    }
}
export default Delivers