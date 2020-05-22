import React,{useState}from "react";
import {inject, observer} from "mobx-react";
import './CurrentBasket.css'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {createBasket,addProductBasket} from "../../Api/BasketApi";
import history from "../../history";

const useStyles = makeStyles((theme)=>({
    button:{
        width: "10%",
        height: "3rem",
        marginTop: '2rem',
    }
}))
function CurrentBasket(props) {
    const classes = useStyles()
    const [newbasket,setNewBasket] = useState({})
    const finalizeCart = async ()=>{
        if(!props.user.userIdentity){
            alert("zaloguj sie")
            return
        }
        let dane = await createBasket({description:"",
        user_id:props.user.userIdentity.id
        }).then(res=>res.json())
        console.log(dane)
        setNewBasket(dane)
        let arrayOfId = []
        for(let i of props.basket.products){
            arrayOfId.push(i["id"])
        }
        await addProductBasket({
            'basket_id': dane.id,
            'arrayofid': arrayOfId
        }).then(resfordatabase=>console.log(resfordatabase))
        console.log(newbasket)
        history.push(`/finalizeoffer/${dane.id}`)
    }
    return (
        <div className='basketFormat'>
            {
                props.basket.productsInBasket ?
                    (props.basket.products.map(p => {
                            return (
                                <div className='product'>
                                    <div className='product-info'>
                                        <div className='product-name'>
                                            {p.name}
                                        </div>
                                        <div>
                                            Cena: {p.cost} PLN
                                        </div>
                                    </div>
                                    <div className='delete-icon'>
                                        <IconButton onClick={()=> props.basket.removeProduct(p)} edge="end" aria-label="delete">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        })
                    ) : (<div>Pusty koszyk</div>)
            }
            {
                props.basket.productsInBasket?(<Button className={classes.button} onClick={finalizeCart} variant='contained' color='secondary'>Kup</Button>):("")
            }
        </div>
    )

}

export default inject(stores => ({
    basket: stores.basketStore,
    user: stores.userStore
}))(observer(CurrentBasket))