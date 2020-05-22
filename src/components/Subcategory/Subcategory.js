import {getSubcategoriesByCateogryId} from "../../Api/Subcategory";

import React,{Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ActiveLastBreadcrumb from "../ActiveLastBreadcrumb";
import history from "../../history";
import '../Category/Categories.css'
class Subcategory extends Component{
    constructor() {
        super();
        this.state = {
            subcategories : []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id){
        history.entries = []
        history.index = 0
        history.push(`/subcat/${id}/products`)
    }
    componentDidMount() {
        const {match:{params}} = this.props
        getSubcategoriesByCateogryId(params.id).then(data=>{
            this.setState({subcategories: data})
        })
    }
    render() {
        return (
            <div>
                <div className="breadcumb">
                    <ActiveLastBreadcrumb alldata={[{name:"Home"},{name:"Kategorie"}]}/>
                </div>
                <h1>Podkategorie: </h1>
                <div className="categories">
                    {this.state.subcategories.map(cat=>{
                        return (
                            <Card onClick={this.handleClick.bind(this,cat.id)} key={cat.id} className="root" >
                                <CardActionArea>
                                    <CardContent key={cat.id}>
                                        <Typography  gutterBottom variant="h5" component="h2">
                                            {cat.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {cat.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Subcategory