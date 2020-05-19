import React,{Component} from "react";
import {getSubCategories,deleteSubcategory} from "../../Api/Subcategory";
import Button from "@material-ui/core/Button";
import history from "../../history";

class Subcategories extends Component{
    constructor() {
        super();
        this.state = {
            subcategories : []
        }
        this.updateSubcategoryHandle = this.updateSubcategoryHandle.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
    }
    async deleteHandle(id){
        await deleteSubcategory(id)
        history.go(0)
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
                            <Button onClick={this.deleteHandle.bind(this,cat.id)}>Delete</Button>
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