import React,{Component} from "react";
import {getSubCategories} from "../../Api/Subcategory";
import Button from "@material-ui/core/Button";
import history from "../../history";

class Subcategories extends Component{
    constructor() {
        super();
        this.state = {
            subcategories : []
        }
        this.updateSubcategoryHandle = this.updateSubcategoryHandle.bind(this)
    }
    updateSubcategoryHandle(id){
        history.push(`/updatesubcategory/${id}`)
    }
    async componentDidMount(){
       await getSubCategories().then(data=>{
                let cc = data.map(cat=>{
                    return (
                        <div key={cat.id}>
                            <div className="name"><h1>{cat.name}</h1></div>
                            <div className="description"><h2>{cat.description}</h2></div>
                            <Button onClick={this.updateSubcategoryHandle.bind(this,cat.id)}>Update</Button>
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