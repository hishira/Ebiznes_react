import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {inject,observer} from "mobx-react";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
    cart:{
        marginRight: '2rem'
    }
}))(Badge);

function CartBadge(props) {
    return (
        <IconButton className={StyledBadge.cart} aria-label="cart">
            <StyledBadge badgeContent={props.basketStore.productsInBasket} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}
export default inject(stores => ({
    basketStore: stores.basketStore
}))(observer(CartBadge))