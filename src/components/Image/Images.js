import React from "react";
import {getImages} from "../../Api/ImagesApi";

class Images extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    async componentDidMount() {
        getImages().then(dane=>{
            let imagesTmp = dane.map(im=>{
                return(
                    <div key={im.id}>
                        <div>{im.url}</div>
                        <div>{im.description}</div>
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
