<template>
  <q-page class="bg-grey-3">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
        <q-card-section>
          <div class="text-h2 text-center text-weight-medium text-black q-pb-md">
            Ghel's Salon
          </div>
            <q-form
              @submit="onSubmit"
            >
            <q-card-section>
              <q-input v-model="username" label="Username"/>
              <q-input type="password" v-model="password" label="Password"/>
            </q-card-section>

            <q-card-section>
              <q-btn class="full-width" type="submit" unelevated color="primary" label="Login"/>
            </q-card-section>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.password
      }).then((res) => {
        if (res.data.sukses) {
          this.$router.push({ name: 'MenuUtama' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
