import React from "react";
import {getCommentById} from "../../Api/CommentApi";

class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getCommentById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.title}
                        </div>
                        <div>
                            {d.content}
                        </div>
                    </div>

                )
            })
            this.setState({comment: com})

        }).catch(e => this.setState({comment: []}))
    }

    render() {
        return (
            <div>
                {this.state.comment}
            </div>
        )
    }
}

export default Comment