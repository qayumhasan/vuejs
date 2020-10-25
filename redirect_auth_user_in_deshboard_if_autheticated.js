
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

## you need to set meta in route
 {
    path: '/todo',
    name: 'todo',
    component: App,
    meta: {
      requiresAuth: true,
    }
  },
  
    {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true,
    }
  },
  
    {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
  },
