import React from "react";
import {getOrders} from "../../Api/OrderApi";


class Orders extends React.Component{
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }
    async componentDidMount() {
        getOrders().then(dane=>{
            let ord = dane.map(d=>{
             console.log(d)
                return (
                    <div key={d[0]}>
                        <div>Czas: {d[1]}</div>
                        <div>Kurier {d[3]}</div>
                        <div>Metoda platnosci {d[4]}</div>
                        <div>Uzytkownik {d[5]}</div>
                    </div>
                )
            })
            this.setState({orders: ord})
        })
    }
    render() {
        return (
            <div>
                Orders
                {this.state.orders}
            </div>
        );
    }
}
export default Orders