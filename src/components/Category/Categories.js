import React, {Component} from "react";
import {getCategories} from '../../Api/Categories'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Categories.css'
import history from "../../history";
import ActiveLastBreadcrumb from "../Breadcumb";
import Button from '@material-ui/core/Button';

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleClick(id) {
        history.entries = []
        history.index = 0
        history.push(`/cat/${id}/subcategories`)
    }
    handleUpdate(id){
        console.log(id)
        history.push(`categoryupdate/${id}`)
    }

    async componentDidMount() {
        getCategories()
            .then(data => {
                let cc = data
                this.setState({categories: cc})
            })
    }

    render() {
        return (
            <div>
                <div className="breadcumb">
                    <ActiveLastBreadcrumb alldata={[{name: "Home"}]}/>
                </div>
                <h1>Kategorie: </h1>
                <div className="categories">
                    {this.state.categories.map(cat => {
                        return (
                            <Card  key={cat.id} className="root">
                                <CardActionArea>
                                    <CardContent key={cat.id}>
                                        <Typography onClick={this.handleClick.bind(this, cat.id)} gutterBottom variant="h5" component="h2">
                                            {cat.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {cat.description}
                                        </Typography>
                                        <Button
                                            onClick={this.handleUpdate.bind(this,cat.id)}
                                        >
                                            Update
                                        </Button>
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