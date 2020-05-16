import React from "react";
import {getCategoriesById} from "../../Api/Categories";

class Category extends React.Component {
    constructor() {
        super();
        this.state = {category: []}
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getCategoriesById(params.id).then(dane => {
            console.log(dane)
            let da = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.name}
                        </div>
                        <div>
                            {d.description}
                        </div>
                    </div>

                )
            })
            this.setState({category: da})

        }).catch(e=> this.setState({category: []}))
    }

    render() {
        return (
            <div>
                {this.state.category}
            </div>
        )
    }
}

export default Category