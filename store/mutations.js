export const SET_PRODUCTS = (state, products) => {
  state.products = products
}

export const SET_PRODUCT = (state, product) => {
  state.product_current = product
}

export const ADD_TO_CART = (state, { product, amount }) => {
  const productInCart = state.cart.find((item) => {
    return item.product.id === product.id
  })
// ทำให้สินค้าสแตกกัน
  if (productInCart) {
    productInCart.amount += amount
    return
  }
  state.cart.push({
    product,
    amount
  })
}

// export const REMOVE_FROM_CART = (state, product) => {
//   state.cart = state.cart.filter(item => item.product.id !== product.id)
// }

// export const ADD_AMOUNT_PRODUCT = (state, product) => {
//   const currentItem = state.cart.find(item => item.product.id === product.id)
//   currentItem.amount++
// }

// export const REDUCE_AMOUNT_PRODUCT = (state, product) => {
//   const currentItem = state.cart.find(item => item.product.id === product.id)
//   if (currentItem.amount > 1) {
//     currentItem.amount--
//   } else {
//     state.cart = state.cart.filter(item => item.product.id !== product.id)
//   }
// }

// export const EMPTY_CART = (state) => {
//   state.cart = []
// }
