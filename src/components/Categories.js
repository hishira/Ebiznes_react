import React,{Component} from "react";
import {getCategoriesWithSub,getCategories} from '../Api/Categories'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Categories.css'
import history from "../history";
class Categories extends Component{
    constructor() {
        super();
        this.state = {
            categories : []
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(id){
        history.entries = []
        history.index = 0
        history.push(`/cat/${id}/subcategories`)
    }
        async componentDidMount(){
            getCategories()
                .then(data=>{
                    let cc = data
                    this.setState({categories:cc})
                })
        }
        render(){
            return (
                <div>
                    <h1>Kategorie: </h1>
                    <div className="categories">
                        {this.state.categories.map(cat=>{
                            return (
                                <Card onClick={this.handleClick.bind(this,cat.id)} key={cat.id} className="root">
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
export default Categories