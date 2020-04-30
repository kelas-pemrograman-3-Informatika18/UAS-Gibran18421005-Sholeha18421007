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
      title="Daftar Pelanggan"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nama" :props="props">
            {{ props.row.nama }}
          </q-td>
          <q-td key="usia" :props="props">
              {{ props.row.usia }}
          </q-td>
          <q-td key="perawatan" :props="props">
              {{ props.row.perawatan }}
          </q-td>
          <q-td key="harga" :props="props">
              {{ props.row.harga }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Edit" color="orange" icon="edit"></q-btn>
              </div>
              <div class="col">
                <q-btn label="Hapus" color="negative" icon="deleted"></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'nama',
          required: true,
          label: 'Nama',
          align: 'left',
          field: 'nama',
          sortable: true
        },
        { 
          name: 'usia',
          align: 'center',
          label: 'Usia',
          field: 'usia',
          sortable: true 
        },
        { 
          name: 'perawatan',
          align: 'center',
          label: 'Perawatan',
          field: 'perawatan',
          sortable: true
        },
        { 
          name: 'harga',
          align: 'center',
          label: 'Harga',
          field: 'harga',
          sortable: true
        },
        { 
          name: 'aksi',
          label: 'Aksi',
          field: 'aksi',
          align: 'center'
        }
      ],

      data: [
        {
          nama: 'Agnes',
          usia: 20,
          perawatan: 'Creambath',
          harga: '40000'
        },
        {
          nama: 'Bella',
          usia: 19,
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
          nama: 'Agnes',
          usia: 20,
          perawatan: 'Creambath',
          harga: '40000'
        },
        
        {
          nama: 'Bella',
          usia: 19,
          perawatan: 'Cuci Rambut',
          harga: '30000'
        }
      ]