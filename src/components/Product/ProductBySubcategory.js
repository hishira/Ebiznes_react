import React,{Component} from "react";
import {getProductsBySubCategoryId} from "../../Api/Products";
import ActiveLastBreadcrumb from "../Breadcumb";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import '../Category/Categories.css'
import Button from "@material-ui/core/Button";
import {inject,observer} from "mobx-react";

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
                <h1>Produkty: </h1>
                <div className="categories">
                    {this.state.prodsubcat.map(prod=>{
                        return (
                            <Card  key={prod.id} className="root">
                                <CardActionArea>
                                    <CardContent key={prod.id}>
                                        <Typography  gutterBottom variant="h5" component="h2">
                                            {prod.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {prod.description}
                                        </Typography>
                                        <Button onClick={()=>{this.props.basket.addProductToBasket(prod)}}>Add to cart</Button>
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
export default  inject(stores => ({
    basket: stores.basketStore
}))(observer(ProductsBySubcategory))