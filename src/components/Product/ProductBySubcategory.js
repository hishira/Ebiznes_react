import React, {Component} from "react";
import {getProductsBySubCategoryId} from "../../Api/Products";
import ActiveLastBreadcrumb from "../ActiveLastBreadcrumb";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import '../Category/Categories.css'
import Button from "@material-ui/core/Button";
import {inject, observer} from "mobx-react";
import history from "../../history";
import {getImages} from "../../Api/ImagesApi";
import CardMedia from "@material-ui/core/CardMedia";
class ProductsBySubcategory extends Component {
    constructor() {
        super();
        this.state = {
            prodsubcat: [],
            images: [],
        }
        this.getImages = this.getImages.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getProductsBySubCategoryId(params.id).then(dane => {
            this.setState({prodsubcat: dane})
        })
        getImages().then(dane=>{

            this.setState({images: dane})
        })
    }
    getImages(id){
        for(let i of this.state.images){
            if(i.productId === id){
                return i
            }
        }
        return null
    }

    render() {
        return (
            <div>
                <div className="breadcumb">
                    <ActiveLastBreadcrumb alldata={[{name: "Home"}, {name: "Kategorie"}]}/>
                </div>
                <h1>Produkty: </h1>
                <div className="categories">
                    {this.state.prodsubcat.map(prod => {
                        return (
                            <div className='product'>
                                <Card key={prod.id} className="root">
                                    <CardActionArea style={{height:"15rem"}} onClick={() => history.push(`/product/${prod.id}`)}>
                                        {
                                            this.getImages(prod.id)?(
                                                <CardMedia style={{height: 140,width:"15rem"}}
                                                        image={this.getImages(prod.id).url}
                                                />
                                                        ):(<div/>)
                                        }
                                        <CardContent key={prod.id}>
                                            <Typography gutterBottom>
                                                {prod.name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {prod.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Button onClick={() => {
                                    this.props.basket.addProductToBasket(prod)
                                }}>Add to cart</Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default inject(stores => ({
    basket: stores.basketStore
}))(observer(ProductsBySubcategory))