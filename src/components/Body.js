import React,{Component} from "react";
import {operateOnData,getCategoriesWithSub} from '../Api/Categories'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

class Body extends Component{
    constructor() {
        super();
        this.state = {
            categorywithsub: []
        }
    }
    async componentDidMount() {
        let finalaray = await getCategoriesWithSub()
        let arr = operateOnData(finalaray)

        this.setState({categorywithsub: arr})

    }
    render() {
        return(
            <TreeView

                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                {
                    this.state.categorywithsub.map(cat=>
                    <TreeItem key={cat.id} nodeId={cat.id} label={cat.name}>
                        {cat.children.map(child=>
                        <TreeItem key={child.id} nodeId={toString(child.id)} label={child.name}/>)}
                    </TreeItem>
                )}
            </TreeView>
        )
    }
}
export default Body