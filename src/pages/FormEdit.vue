<template>
  <q-layout class="bg-grey-4" view="lHh Lpr Lff">
    <q-page-container>
      <q-page padding>
        <div class="justify-center q-pt-xs row items-start q-gutter-md">
          <q-card class="my-card" flat>
            <q-card-section>
              <div class="text-h2 text-center bg-grey-3 text-weight-medium text-black q-pa-md">
                Ghel's Salon
              </div>
              <div class="text-h5 text-weight-light q-pt-md">Edit Pemesanan</div>
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

                <q-input filled v-model="tanggal" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="tanggal" @input="() => $refs.qDateProxy" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>

                <q-select
                  filled
                  v-model="perawatan"
                  label="Perawatan"
                  :options="optionPerawatan"
                />

                <q-input
                  standard
                  v-model="harga"
                  type="number"
                  label="Harga"
                  lazy-rules
                  :rules="[ val => val > 0 || 'Tolong isikan harga']"
                />

                <div>
                  <q-btn label="Update" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primay" flat class="q-ml-sm" />
                </div>
              </q-form>
            </q-card-section>
        </q-card>
      </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      nama: null,
      tanggal: '2020/07/02',
      perawatan: null,
      harga: 0,
      optionPerawatan: [
      'Potong Rambut',
      'Cuci Rambut',
      'Creambath'
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pesanan/tampilsingle/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.nama = data.nama
          this.tanggal = data.tanggal
          this.perawatan = data.perawatan
          this.harga = data.harga
        })
    },
    onSubmit () {
      this.$axios.put('pesanan/edit/' + this.$route.params.id, {
        nama: this.nama,
        tanggal: this.tanggal,
        perawatan: this.perawatan,
        harga: this.harga
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'DaftarPelanggan' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.nama = null
      this.tanggal = null
      this.perawatan = null
      this.harga = 0
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: max
</style>
