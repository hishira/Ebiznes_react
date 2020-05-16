import React from "react";
import {getImagesById} from "../../Api/ImagesApi";

class Image extends React.Component{
    constructor() {
        super();
        this.state = {
            iamge: []
        }
    }
    async componentDidMount() {
        const {match: {params}} = this.props
        getImagesById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.url}
                        </div>
                        <div>
                            {d.description}
                        </div>
                    </div>

                )
            })
            this.setState({iamge: com})

        }).catch(e => this.setState({iamge: []}))
    }

    render() {
        return (
            <div>
                {this.state.iamge}
            </div>
        )
    }
}
export default Image