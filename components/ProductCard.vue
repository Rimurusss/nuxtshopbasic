<template>
  <div>
    <div class="card h-100 shadow-lg">
      <img :src="product.image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link :to="`/product/${product.id}`">
            {{ product.title }}
          </nuxt-link>
        </h4>
        <p class="card-text">
          {{ product.content }}
        </p>
        <h5 class="card-text">
          ราคา {{ product.price }} บาท
        </h5>
        <div class="card-grid">
          <button class="btn btn-outline-paimary" @click="addToCart()">
            หยิบ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  // async fetch (store) {
  //   const response = await axios.get('http://localhost:3800/products')
  //   const products = response.data

  //   store.commit('SET_PRODUCTS', products)
  // },

  methods: {
    addToCart () {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        amount: 1
      })
    }
  }
}
</script>

<style>
.card-title {
  font-size: 36px;
  height: 2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-text {
  height: 2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-grid {
  text-align: center;
}
.card-grid .btn {
  width: 90%;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  border-color: cornflowerblue;
}
.card-grid .btn:hover {
  color: #fff;
  background-color: cornflowerblue;
}
</style>
