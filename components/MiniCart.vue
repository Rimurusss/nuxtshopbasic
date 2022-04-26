
<template>
  <div
    id="offcanvasRight"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    data-off-canvas
    data-content-scroll="false"
    aria-labelledby="offcanvasRightLabel"
  >
     <div class="offcanvas-header ">
      <h5 id="offcanvasRightLabel">
        Cart
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
<!--โชวสินค้าว่าง-->
     <div>
      <button v-if="cart.length" class="btn btn-success" :disabled="isProcessing" @click="placeOrder">
        <span v-if="!isProcessing">Chackout: ({{ cartTotalPrice }}) บาท</span>
        <div v-else class="spinner-border" role="status" />
      </button>
    </div>
     <div v-if="!cart.length && !isProcessing" class="alert alert-secondary" role="alert">
      Empty Cart!
    </div><!-- แสดงราคาสินค้่าและกดซื้อทั้งหมด-->
    <div v-for="item in cart" :key="item.product.id">
      <hr>
      <div class="offcanvas-body">
        <div class="d-flex justify-content-between">
          <strong>{{ item.product.title }}</strong>
          <button class="btn" @click.prevent="removeProductFromCart(item.product)">
            <i class="fa fa-trash" /> Remove
          </button>
        </div>
        <div>
          <img
            :src="item.product.image"
            class="card-img-left"
            width="200px"
            height="150px"
          >
          <button class="btn" @click="addAmount(item.product)">
            <i class="fa fa-plus" />
          </button>
          {{ item.amount }}
          <button class="btn" @click="reduceAmount(item.product)">
            <i class="fa fa-minus" />
          </button>
          <br>
          <span>{{ item.amount }} x {{ item.product.price }} = {{ item.amount * item.product.price }}บาท</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
      <button class="btn" @click="emptyCart()">
        <i class="fa fa-trash" /> Clear
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      isProcessing: false,
      orderPlaced: false
    }
  },//ลูกเล่น
  computed: {
    ...mapGetters(['cart']),
    cartTotalPrice () {
      return this.cart.reduce((a, b) => a + (b.amount * b.product.price), 0)
    }//แสดงสิ้นค้า
  },
  methods: {
    ...mapActions(['addAmount', 'reduceAmount', 'removeProductFromCart', 'emptyCart']),
    placeOrder () {
      this.isProcessing = true
      setTimeout(() => {
        this.orderPlaced = true
        this.isProcessing = true
        this.emptyCart()
        alert('Order successfully placed!')
        location.reload()
      }, 1000)
    }
  }
}
</script>

<style>
.offcanvas {
  overflow-y: auto;
}
</style>

