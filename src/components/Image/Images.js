import React from "react";
import {getImages} from "../../Api/ImagesApi";
import Button from "@material-ui/core/Button";
import history from "../../history";
class Images extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.updateImageHandle = this.updateImageHandle.bind(this)
    }
    updateImageHandle(id){
        history.push(`/updateimage/${id}`)
    }

    async componentDidMount() {
        getImages().then(dane=>{
            let imagesTmp = dane.map(im=>{
                return(
                    <div key={im.id}>
                        <div>{im.url}</div>
                        <div>{im.description}</div>
                        <Button onClick={this.updateImageHandle.bind(this,im.id)}>
                            update
                        </Button>
                    </div>
                )
            })
            this.setState({images:imagesTmp})
        })
    }
    render() {
        return(
            <div>
                {this.state.images}
            </div>
        )
    }
}
export default Images
