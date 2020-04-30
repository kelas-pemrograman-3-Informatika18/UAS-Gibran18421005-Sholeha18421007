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
          <div class="text-h5 text-weight-light">Form Pemesanan</div>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
            <q-input
              standard
              v-model="nama"
              label="Nama"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan nama anda']"
            />

            <q-input
              standard
              v-model="usia"
              label="Usia"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan usia anda']"
            />

            <q-input
              standard
              v-model="perawatan"
              label="Perawatan"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong isikan perawatan anda']"
            />

            <q-input
              standard
              v-model="harga"
              label="Harga"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || '']"
            />
            <div>
              <q-btn label="Pesan" type="submit" color="black"/>
              <!-- <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" /> -->
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
      nama: null,
      usia: null,
      perawatan: null,
      harga: null
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
          type: 'positive',
          message: 'Berhasil di Pesan'
        })
        this.$router.push('/home')
    },
    onReset () {
      this.nama = null
      this.usia = null
      this.perawatan = null
      this.harga = null
    }
  }
}
</script>
