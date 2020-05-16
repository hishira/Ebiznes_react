import React,{Component} from "react";
import {getProductsBySubCategoryId} from "../../Api/Products";
import ActiveLastBreadcrumb from "../Breadcumb";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class ProductsBySubcategory extends Component{
    constructor() {
        super();
        this.state = {
            prodsubcat: []
        }
    }
    async componentDidMount() {
        const {match:{params}} = this.props
        getProductsBySubCategoryId(params.id).then(dane=>{
            this.setState({prodsubcat:dane})
        })
    }
    render() {
        return(
            <div>
                <div className="breadcumb">
                    <ActiveLastBreadcrumb alldata={[{name:"Home"},{name:"Kategorie"}]}/>
                </div>
                <h1>Podkategorie: </h1>
                <div >
                    {this.state.prodsubcat.map(prod=>{
                        return (
                            <Card  key={prod.id} >
                                <CardActionArea>
                                    <CardContent key={prod.id}>
                                        <Typography  gutterBottom variant="h5" component="h2">
                                            {prod.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {prod.description}
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
export default  ProductsBySubcategory