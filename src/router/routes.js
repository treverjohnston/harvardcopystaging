
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/account', name: 'Account', component: () => import('pages/Account.vue') },
      { path: '/about', name: 'About', component: () => import('pages/About.vue') },
      { path: '/services', name: 'Print/Copy Services', component: () => import('pages/Services.vue') },
      { path: '/litigation', name: 'Litigation Services', component: () => import('pages/Litigation.vue') },
      { path: '/contact', name: 'Contact', component: () => import('pages/Contact.vue') },
      { path: '/reviews', name: 'Reviews', component: () => import('pages/Reviews.vue') },
      { path: '/admin', name: 'Admin', component: () => import('pages/Admin.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: 'Not Found',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
