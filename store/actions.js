import axios from 'axios'

export const getProducts = ({ commit }) => {
  axios.get('http://localhost:3800/products').then((response) => {
    commit('SET_PRODUCTS', response.data)
  })
}

// export const getProduct = ({ commit }, productID) => {
//   axios.get(`http://localhost:3800/products/${productID}`).then((response) => {
//     commit('SET_PRODUCT', response.data)
//   })
// }

export const addProductToCart = ({ commit }, { product, amount }) => {
  commit('ADD_TO_CART', { product, amount })
}

export const removeProductFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product)
}//ลบสินค้า 

export const addAmount = ({ commit }, product) => {
  commit('ADD_AMOUNT_PRODUCT', product)
}

export const reduceAmount = ({ commit }, product) => {
  commit('REDUCE_AMOUNT_PRODUCT', product)
}

export const emptyCart = ({ commit }) => {
  commit('EMPTY_CART')
}
