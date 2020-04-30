<template>
  <div class="q-pa-md">
    <q-img
      src="../img/gambar 4.jpg"
      style="height: 100%;width: 100%"
    >
      <h1 class="text-blue-grey-8 text-weight-medium text-center">Ghel's Salon</h1>
      <div>
      <p class="text-white text-h5">We will always giving the best things for our beloved customer</p> <br>
      <p class="text-white text-h5">Outer beauty is transient, but the inner beauty of a kind heart gets brighter with time.
        Be kind and get prettier forever.</p>
      <q-btn label="Daftar Harga" to="/daftarHarga" type="submit" color="black"/>
      <q-btn label="Pesan" to="/inputPelanggan" type="submit" color="black" class="q-ml-sm"/>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
