import React from "react";
import {inject, observer} from "mobx-react";
import './CurrentBasket.css'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

function CurrentBasket(props) {
    function get() {
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
                                        <IconButton onClick={()=>props.basket.removeProduct(p)} edge="end" aria-label="delete">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        })
                    ) : (<div>Pusty koszyk</div>)
            }
        </div>
    )

}

export default inject(stores => ({
    basket: stores.basketStore
}))(observer(CurrentBasket))