<template>
  <div>
    <nav class="navbar fixed-top">
      <b-container fluid>
        <div class="logo">
          <nuxt-link to="/">
            กระเพราสามพ่อครัว
          </nuxt-link>
        </div>
        <div class="menu">
          <li>
            <nuxt-link to="/">
              หน้าหลัก
            </nuxt-link>
            <!-- <nuxt-link to="admin">
              ผู้ดูแลระบบ
            </nuxt-link> -->
            <nuxt-link to="about">
              เกี่ยวกับ
            </nuxt-link>
            <b-button class="btn btn-secondary" to="login">
              Login
            </b-button>
            <b-button class="btn btn-secondary" @click="logout">
              Logout
            </b-button>
            <h3
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {{ totalAmountCart }} 
              Cart
            </h3>
            <mini-cart />
          </li>
        </div>
      </b-container>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart']),
    totalAmountCart () {
      return this.cart.reduce((a, b) => a + b.amount, 0)
    }
  },
  // methods: {
  //   async logout (_e) {
  //     await this.$auth.logout()
  //     this.$router.push('/login')
  //   }
  // }
}
</script>

<style>
.navbar {
  background-color: #292929;
  height: 4rem;
}
.logo a {
  font-size: 20px;
  text-decoration: none;
  color: crimson;
  font-weight: 600;
  font-size: 40px;
}
.logo a:hover {
  color: #fff;
}
.menu a {
  text-decoration: none;
  color: crimson;
  margin-left: 20px;
  font-weight: 120;
  font-size: 20px;
}
.menu a:hover {
  color: #fff;
}
.menu .btn-secondary {
  padding: auto;
  font-weight: 500;
  margin-left: 20px;
  color: #fff;
  background-color: crimson;
}
.menu .btn-secondary:hover {
  color: crimson;
  background-color: #fff;
}
</style>
