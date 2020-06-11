import React from "react";
import {getProductById} from "../../Api/Products";
import Paper from '@material-ui/core/Paper';
import {getCommentByProductId} from "../../Api/CommentApi";
import Button from "@material-ui/core/Button";
import {inject, observer} from "mobx-react";
import './Product.css'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import {createComment} from "../../Api/CommentApi";
import {getImageByProductId} from "../../Api/ImagesApi";

import GridImageProduct from "./GridImageProduct";

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            product: [],
            productId: -1,
            comment: [],
            open: false,
            commentTitle: "",
            commentContent: "",
            images: []
        }
        this.handleopendialog = this.handleopendialog.bind(this)
        this.handleclosedialog = this.handleclosedialog.bind(this)
        this.handleAddComment = this.handleAddComment.bind(this)

    }

    handleopendialog() {
        this.setState({open: true})
    }

    handleclosedialog() {
        this.setState({open: false})
    }
    async handleAddComment(){
        await createComment({
            title: this.state.commentTitle,
            content: this.state.commentContent,
            product_id: this.state.productId
        },this.props.user.userIdentity.token)
        await getCommentByProductId(this.state.productId).then(dane => {
            let result = dane.map(comment => {
                return (
                    <div className='comment'>
                        <div className='comment-title'>
                            {comment.title}
                        </div>
                        <div className='comment-content'>
                            {comment.content}
                        </div>
                    </div>
                )
            })
            this.setState({comment: result})
        })
        this.setState({open:false})
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        await getProductById(params.id).then(dane => {
            this.setState({productId:dane.id})
            let com = [dane].map(d => {
                return (
                    <Paper className='root' key={d.id}>
                        <div>
                            Nazwa: {d.name}
                        </div>
                        <div>
                            Koszt: {d.cost}
                        </div>
                        <div>
                            Ilośc w magazynie {d.count}
                        </div>
                        <div>
                            Producent: {d.producer}
                        </div>
                        <Button className='productButton' onClick={() => this.props.basket.addProductToBasket(d)}> Add
                            to cart</Button>
                    </Paper>

                )
            })
            this.setState({product: com})

        }).catch(e => this.setState({product: []}))
        await getImageByProductId(params.id).then(dane=>{
            this.setState({images:dane})
        })
        console.log(this.state.images)
        await getCommentByProductId(params.id).then(dane => {
            console.log(dane)
            let result = dane.map(comment => {
                return (
                    <div className='comment' key={comment.id}>
                        <div className='comment-title'>
                            {comment.title}
                        </div>
                        <div className='comment-content'>
                            {comment.content}
                        </div>
                    </div>
                )
            })
            this.setState({comment: result})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.images.length?
                        (<GridImageProduct images={this.state.images}/>):(<></>)
                }
                {this.state.product}
                <div className='comments'>
                    <div className='comments-title'>Komentarze</div>
                    <div className='comments-main'>
                        {this.state.comment}
                    </div>
                </div>
                {
                    this.props.user.userIdentity ? (
                            <div>
                                <Button color='primary' className='modalbutton' variant='contained' onClick={() => this.handleopendialog()}>
                                    Dodaj Komentarz
                                </Button>
                                <Dialog open={this.state.open} onClose={() => this.handleclosedialog()}
                                        aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Dodaj Komentarz</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Title"
                                                type="text"
                                                fullWidth
                                                autoComplete={false}
                                                onChange={e=>this.setState({commentTitle:e.target.value})}
                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="content"
                                                multiline
                                                fullWidth
                                                rows={5}
                                                onChange={e=>this.setState({commentContent:e.target.value})}
                                            />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleclosedialog()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={()=>this.handleAddComment()} color="primary">
                                            Add comment
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        ) :
                        (<div></div>)
                }
            </div>
        )
    }
}

export default inject(stores => ({
    basket: stores.basketStore,
    user: stores.userStore
}))(observer(Product));