
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'MenuUtama', component: () => import('pages/Index.vue') },
      { path: 'daftarPelanggan', name: 'DaftarPelanggan', component: () => import('pages/DaftarPelanggan.vue') },
      { path: 'inputPelanggan', name: 'InputPelanggan', component: () => import('pages/InputPelanggan.vue') },
      { path: 'editPesanan', name: 'EditPesanan', component: () => import('pages/FormEdit.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
