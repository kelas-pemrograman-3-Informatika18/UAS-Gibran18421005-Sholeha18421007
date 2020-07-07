<template>
  <q-layout class="bg-grey-4" view="lHh Lpr Lff">
    <div class="q-pa-md">
      <div class="text-h2 text-center text-weight-medium text-black q-pb-md">
        Ghel's Salon
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
            <q-td key="tanggal" :props="props">
                {{ props.row.tanggal }}
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
                  <q-btn label="Edit" :to="{ name: 'EditPesanan', params: { id: props.row._id}}" color="orange" icon="edit"></q-btn>
                </div>
                <div class="col">
                  <q-btn label="Hapus" @click="hapus(props.row._id)" color="negative" icon="deleted"></q-btn>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-layout>
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
          name: 'tanggal',
          align: 'left',
          label: 'Tanggal',
          field: 'tanggal',
          sortable: true 
        },
        { 
          name: 'perawatan',
          align: 'left',
          label: 'Perawatan',
          field: 'perawatan',
          sortable: true
        },
        { 
          name: 'harga',
          align: 'left',
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

      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pesanan/tampil')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    hapus (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah anda yakin menghapus data?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('pesanan/delete/' + id)
          .then((res) => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan
              })
              this.getData()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan
              })
            }
          })
      })
    }
  }
}
</script>
