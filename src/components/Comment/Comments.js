import React from "react";
import {getComments} from "../../Api/CommentApi";
class Comments extends React.Component{
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    async componentDidMount() {
        await getComments()
            .then(response=>{
                let prod = response.map(p=>{
                    return(
                        <div key={p.id} >
                            <div>
                                {p.title}
                            </div>
                            <div>
                                {p.content}
                            </div>
                        </div>
                    )
                })
                this.setState({comments:prod})
            })

    }

    render() {

        return (
            <div className="categories">
                {this.state.comments}
            </div>
        )
    }

}
export default Comments