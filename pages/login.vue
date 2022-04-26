<template>
  <div class="container">
    <div
      class="
        bg-clip-border
        p-6
        bg-violet-600
        border-4 border-violet-300 border-dashed
      "
    >
      <form class="form" @submit="onSubmit">
        <p class="text-4xl ...">
          Log In
        </p>

        <b-form-input v-model="email" placeholder="email" />
        <b-form-input
          v-model="password"
          type="password"
          placeholder="password"
        />

        <div class="field">
          <b-button type="submit" variant="success">
            Login
          </b-button>
          <!-- <button type="submit" class="button is-primary is-fullwidth">
          Login
        </button> -->
        </div>
        <div v-show="error" class="notification is-danger">
          <p>Invalid password</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AppHeader',
  middleware: 'auth',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onSubmit (e) {
      e.preventDefault()

      const payload = {
        data: {
          email: this.email,
          password: this.password
        }
      }

      try {
        await this.$auth.loginWith('local', payload)
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>

<style scoped>
* {
  background-color: #000;
}
.form {
  width: 320px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
