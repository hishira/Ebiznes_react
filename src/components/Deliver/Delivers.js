import React from "react";
import {getDelivers} from "../../Api/DeliverApi";
import './Delivers.css'
import Button from "@material-ui/core/Button";
import history from "../../history";

class Delivers extends React.Component{
    constructor() {
        super();
        this.state = {delivers:[]}
        this.updateDeliverHandle = this.updateDeliverHandle.bind(this)
    }
    updateDeliverHandle(id){
        history.push(`/updatedeliver/${id}`)
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
                        <Button onClick={this.updateDeliverHandle.bind(this,p.id)}>
                            Update deliver
                        </Button>
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