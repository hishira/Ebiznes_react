import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './MainSite.css'
import history from "../history";
class MainSite extends React.Component{
    constructor() {
        super();
        this.handleCatClick = this.handleCatClick.bind(this)
        this.handleProductClick = this.handleProductClick.bind(this)
        this.handleInfoClick = this.handleInfoClick.bind(this)
    }
    handleCatClick(){
        history.push('/categories')
    }
    handleProductClick(){
        history.push('/products')
    }
    handleInfoClick(){
        history.push('/')
    }
    render() {
        return (
            <div className='flexCards'>
                <Card className='Card' onClick={this.handleCatClick.bind(this)} >
                    <CardActionArea >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Kategorie
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nasz sklep zawiera spora liczbe kategorii
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className='Card'onClick={this.handleProductClick} >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Produkty
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nasz sklep zawiera miliony produktów
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className='Card' onClick={this.handleInfoClick} >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Kontakt
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Chesz wiedzieć więcej, zadzwońnapisz lub skontaktuj się z nami osobiście
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}
export default MainSite