<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Ghel's Salon
        </q-toolbar-title>
      </q-toolbar>
    </q-header> 

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8">
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name : 'MenuUtama'}">
          <!-- <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section> -->
          
          <q-item-section>
            Menu Utama
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item clickable active-class="active" exact v-ripple :to="{ name : 'InputPelanggan'}">
          <q-item-section>
            Input Data Pelanggan
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item clickable active-class="active" exact v-ripple :to="{ name : 'DaftarPelanggan'}">
          <q-item-section>
            Daftar Pelanggan
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item clickable active-class="active" exact v-ripple :to="{ name : 'DaftarHarga'}">
          <q-item-section>
            Daftar Harga
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container> 
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
