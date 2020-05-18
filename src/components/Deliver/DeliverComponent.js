import React from "react"
import {Route} from "react-router-dom";
import Delivers from "./Delivers";
import Deliver from "./Deliver";
import DeliverUpdateForm from "./UpdateFormDeliver";
import DeliverForm from "./DeliverForm";

class DeliverComponent extends React.Component {
    render() {
        return (
            <div>
                <Route path='/delivers' component={Delivers}/>
                <Route path='/deliver/:id' component={Deliver}/>
                <Route path='/updatedeliver/:id' component={DeliverUpdateForm}/>
                <Route path='/createdeliver' component={DeliverForm}/>
            </div>
        )
    }
}

export default DeliverComponent