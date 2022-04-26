
<template>
  <div class="container">
    <div class="grid grid-cols-5 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>

