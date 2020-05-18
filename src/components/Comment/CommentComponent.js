import React from "react";
import {Route} from "react-router-dom";
import Comments from "./Comments";
import Comment from "./Comment";
import CommentUpdateForm from "./UpdateFormComment";
import CommentForm from "./CommentForm";

class CommentComponent extends React.Component{
    render() {
        return(
            <div>
                <Route path='/comments' component={Comments}/>
                <Route path='/comment/:id' component={Comment}/>
                <Route path='/commentupdate/:id' component={CommentUpdateForm}/>
                <Route path='/createcomment' component={CommentForm}/>
            </div>
        )
    }
}
export default CommentComponent