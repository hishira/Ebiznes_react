import {getSubcategoriesByCateogryId} from "../Api/Subcategory";

import React,{Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Subcategory extends Component{
    constructor() {
        super();
        this.state = {
            subcategories : []
        }
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
                <h1>Podkategorie: </h1>
                <div >
                    {this.state.subcategories.map(cat=>{
                        return (
                            <Card  key={cat.id} >
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