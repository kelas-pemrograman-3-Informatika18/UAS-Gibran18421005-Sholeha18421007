
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'MenuUtama', component: () => import('pages/Index.vue') },
      { path: 'daftarHarga', name: 'DaftarHarga', component: () => import('pages/DaftarHarga.vue') },
      { path: 'daftarPelanggan', name: 'DaftarPelanggan', component: () => import('pages/DaftarPelanggan.vue') },
      { path: 'inputPelanggan', name: 'InputPelanggan', component: () => import('pages/InputPelanggan.vue') }
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
