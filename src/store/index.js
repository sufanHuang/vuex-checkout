import Vue from 'vue'
import Vuex from 'vuex'
import products from '../products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    addedItems: [],
    products
}

const getters = {
    allProducts: state => state.products,
    getNumberOfProducts: state => (state.products) ? state.products.length : 0,
    cartProducts: state => {
        return state.addedItems.map(({ id, quantity }) => {
            const product = state.products.find(item => item.id === id)

            return {
                name: product.name,
                price: product.price,
                quantity
            }
        })
    }
}

const actions = {
    addToCart({ commit }, product){
        commit( 'addOneItem', {
            id: product.id
        })
    }
}

const mutations = {

    addOneItem (state, { id }) {
        const currentItem = state.addedItems.find(item => item.id === id)

        if (!currentItem) {
            state.addedItems.push({
                id,
                quantity: 1
            })
        } else {
            currentItem.quantity++
        }
    }
}

export default new Vuex.Store({
    state,
    strict: debug,
    getters,
    actions,
    mutations
})
