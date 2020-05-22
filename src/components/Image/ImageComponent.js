import React from "react";
import {Route} from "react-router-dom";
import Images from "./Images";
import Image from "./Image";
import ImageUpdateForm from "./ImageUpdateForm";
import ImageForm from "./ImageForm";

class ImageComponent extends React.Component{
    render() {
        return(
            <div>
                <Route path='/images' component={Images}/>
                <Route path='/image/:id' component={Image}/>
                <Route path='/updateimage/:id' component={ImageUpdateForm}/>
                <Route path='/createimage' component={ImageForm}/>
            </div>
        )
    }
}
export default ImageComponent