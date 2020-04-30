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
              @reset="onReset"
              class="q-gutter-md"
            >
            <q-input
              standard
              v-model="fullName"
              label="Nama Lengkap"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan nama lengkap anda']"
            />

            <q-input
              standard
              v-model="username"
              label="Username"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan username anda']"
            />

            <q-input
              standard
              v-model="noHp"
              label="No Hp"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan nomor handphone anda']"
            />

            <q-input
              standard
              type="password"
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Tolong isikan password anda']"
            />
            <div>
              <q-btn label="Register" type="submit" color="black"/>
              <q-btn label="Login" to="/" type="submit" color="black" flat class="q-ml-sm"/>
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
      fullName: null,
      username: null,
      noHp: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Register Berhasil'
        })
        this.$router.push('/')
    },
    onReset () {
      this.fullName = null
      this.username = null
      this.noHp = null
      this.password = null
    }
  }
}
</script>
