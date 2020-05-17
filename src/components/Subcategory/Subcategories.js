import React,{Component} from "react";
import {getSubCategories} from "../../Api/Subcategory";
class Subcategories extends Component{
    constructor() {
        super();
        this.state = {
            subcategories : []
        }
    }
    async componentDidMount(){
       await getSubCategories().then(data=>{
                let cc = data.map(cat=>{
                    return (
                        <div key={cat.id}>
                            <div className="name"><h1>{cat.name}</h1></div>
                            <div className="description"><h2>{cat.description}</h2></div>
                        </div>
                    )
                })
                this.setState({subcategories:cc})
            })
    }
    render(){
        return (
            <div className="subcategories">
                {this.state.subcategories}
            </div>
        )
    }
}
export default Subcategories