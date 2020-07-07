<template>
  <q-layout class="bg-grey-4" view="lHh Lpr Lff">
    <q-toolbar unelevated style="height: 70px;" class="bg-red text-black-14">
      <div class="text-h6 q-ml-lg">Ghel's Salon</div>

      <q-space/>
      <div>
        <q-btn size="medium" @click="home()" flat>Home</q-btn>
        <q-btn size="medium" @click="input()" flat>Input Pelanggan</q-btn>
        <q-btn size="medium" @click="daftar()" flat>Daftar Pelanggan</q-btn>
        <q-btn flat round>
          <q-avatar>
            <img src="statics/logo admin.png">
          </q-avatar>
          <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Admin Ghel's Salon</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout()">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'MenuUtama' })
    },
    input () {
      this.$router.push({ name: 'InputPelanggan' })
    },
    daftar () {
      this.$router.push({ name: 'DaftarPelanggan' })
    },
    logout () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
