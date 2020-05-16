import React from "react";
import {getSubcategoryById} from "../../Api/Subcategory";

class Subcategoryid extends React.Component {
    constructor() {
        super();
        this.state = {
            subcategory: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getSubcategoryById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
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
            this.setState({subcategory: com})

        }).catch(e => this.setState({subcategory: []}))
    }

    render() {
        return (
            <div>
                {this.state.subcategory}
            </div>
        )
    }
}

export default Subcategoryid