
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/services', component: () => import('pages/Services.vue') },
      { path: '/litigation', component: () => import('pages/Litigation.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/reviews', component: () => import('pages/Reviews.vue') },
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
