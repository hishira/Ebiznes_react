import {observable, computed, reaction, action, decorate} from 'mobx';

export default class BasketStore{
    basket = observable([])
    user = null
    get productsInBasket(){
        return this.basket.length
    }
    addProductToBasket(product){
        this.basket.push(product)
    }
    setUser(user){
        this.user = user;
    }
    get userIdentity(){
        return this.user
    }

}
decorate(BasketStore,{
    basket:observable,
    user:observable,
    setUser:action,
    userIdentity:computed,
    productsInBasket:computed,
    addProductToBasket:action
})
