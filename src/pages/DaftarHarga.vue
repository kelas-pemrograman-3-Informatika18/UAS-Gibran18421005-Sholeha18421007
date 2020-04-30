<template>
  <div class="q-pa-md">
    <div class="text-h2 text-center text-weight-medium text-blue-grey-8 q-pb-md">
      <q-img
        src="../img/gambar 4.jpg"
        style="height: 60px;width: 100%"
      >
      Ghel's Salon
      </q-img>
    </div>
    <q-table
      title="Daftar Harga"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
    />
    <q-btn label="Pesan" to="/inputPelanggan" type="submit" color="black"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'perawatan',
          required: true,
          label: 'Perawatan',
          align: 'left',
          field: row => row.perawatan,
          format: val => `${val}`,
          sortable: true
        },
        { 
          name: 'harga', 
          align: 'center', 
          label: 'Harga', 
          field: 'harga',
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) 
          }
      ],
      data: [
        {
          perawatan: 'Potong Rambut',
          harga: '50000'
        },
        {
          perawatan: 'Creambath',
          harga: '40000'
        },
        
        {
          perawatan: 'Cuci Rambut',
          harga: '30000'
        }
      ]
    }
  }
}
</script>


data: [
        
        {
          perawatan: 'Creambath ',
          harga: '40000'
        },
        {
          perawatan: 'Cuci Rambut',
          harga: '30000'
        }
      ]