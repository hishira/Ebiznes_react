import React,{Component} from "react";
import {getCategoriesWithSub,getCategories} from '../Api/Categories'
class Categories extends Component{
    constructor() {
        super();
        this.state = {
            categories : []
        }
    }
        async componentDidMount(){
            getCategories()
                .then(data=>{
                    let cc = data.map(cat=>{
                        return (
                            <div key={cat.id}>
                                <div className="name"><h1>{cat.name}</h1></div>
                                <div className="description"><h2>{cat.description}</h2></div>
                            </div>
                        )
                    })
                    this.setState({categories:cc})
                })
        }
        render(){
            return (
                <div className="categories">
                    {this.state.categories}
                </div>
            )
        }
}
export default Categories