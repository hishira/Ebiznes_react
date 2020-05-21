import {observable, computed, reaction, action, decorate, toJS, autorun} from 'mobx';

function autosave(store, save) {
    let firstrun = true
    autorun(() => {
        const json = JSON.stringify(toJS(store))
        if (!firstrun) {
            save(json)
        }
        firstrun = false
    })

}

export default class BasketStore {
    basket = observable([])

    constructor() {
        this.load()
        autosave(this,this.save.bind(this))
    }
    load(){
        if(localStorage.getItem("basket")){
            const data = JSON.parse(localStorage.getItem("basket"))
            this.basket = data
        }
    }
    save(json){
        localStorage.setItem("basket",JSON.stringify(this.basket))
    }

    get productsInBasket() {
        return this.basket.length
    }

    get products() {
        return this.basket
    }

    addProductToBasket(product) {
        this.basket.push(product)
    }
    removeProduct(product){
        let idToRemove = -1
        for(let i=0;i<this.basket.length;i++){
            if(this.basket[i]['id'] === product['id']) {
                idToRemove = i
                break;
            }
        }
        if( idToRemove !== -1)
            this.basket.splice(idToRemove,1)
    }

}
decorate(BasketStore, {
    basket: observable,
    productsInBasket: computed,
    addProductToBasket: action,
    products: computed,
    removeProduct:action
})
