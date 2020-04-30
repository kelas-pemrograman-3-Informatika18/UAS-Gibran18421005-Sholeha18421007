<template>
  <q-page class="bg-grey-3">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
        <q-card-section>
          <div class="text-h2 text-center text-weight-medium text-blue-grey-8 q-pb-md">
            <q-img
              src="../img/gambar 4.jpg"
              style="height: 60px;width: 420px"
            >
            Ghel's Salon
            </q-img>
          </div>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
            >
            <q-input
              filled
              v-model="username"
              label="Username"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type username']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type your password',
              ]"
            />

            <div class="button">
              <q-btn label="Login" type="submit" color="black"/>
            <!--  <q-btn label="Register" to="/register" type="submit" color="black" flat class="q-ml-sm"/> -->
            </div>
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
      if (this.username === 'gibran' && this.password === '123') {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Login Berhasil'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Gagal Login, Username/Password Anda Salah'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.button {
  margin-left : 365px;
}
</style>
