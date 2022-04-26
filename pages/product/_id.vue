<template>
  <div class="container">
    <AppHeader />
    <div class="row mt-5">
      <div class="col-4">
        <img :src="product.image" class="w-100px h-150px">
      </div>
      <div class="col-8">
        <h1>{{ product.title }}</h1>
        <h3>{{ product.price }} บาท</h3>

        <input
          type="text"
          class="text-center col-1 mr-2 p-1"
          style="background-color: gray"
        >
        <button class="btn btn-primary" @click="addToCart()">
          Add to Cart
        </button>
        <p class="whitespace-pre">
          ข้อมูลอาหาร
          {{ product.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  async fetch ({ params, store }) {
    const response = await axios.get(
      `http://localhost:3800/products/${params.id}`
    )
    const product = response.data

    store.commit('SET_PRODUCT', product)
  },

  computed: {
    product () {
      return this.$store.state.product
    },
    ...mapState({
      product: 'product_current'
    })
  },

  mounted () {
    this.$store.dispatch('getProduct', this.id)
  },

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
</style>
