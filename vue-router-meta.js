var vm = this;
router.afterEach(() => {
    const role = localStorage.getItem('UserRole');

    EventBus.$emit("changeRoute",role);
    // Remove initial loading
    // const appLoading = document.getElementById('loading-bg')
    // if (appLoading) {
    //     appLoading.style.display = "none";
    // }
});

router.beforeEach((to, from, next) => {
    if (to.meta.guest) {
        if (to.meta.guard == '1001' && auth.isAuthenticated('1001')) {
            router.push({ name: 'admin.dashboard' }).catch(() => { });
        } else if (to.meta.guard != '1001' && auth.isAuthenticated()) {
            router.push('/').catch(() => { });
        }
    }
    if (to.meta.auth) {
        if (to.meta.guard == '1001' && !auth.isAuthenticated('1001')) {
            router.push({ name: 'admin.login' }).catch(() => { });
        } else if (to.meta.guard != '1001' && !auth.isAuthenticated()) {
            router.push({ name: 'page-login' }).catch(() => { });

        }
    }



    return next();
});



  {
                            path: '/admin/forgot-password',
                            name: 'admin.forgot-password',
                            component: () => import('@views/admin/auth/ForgotPassword.vue'),
                            meta: {
                                guest: true,
                                guard: '1001',
                            },
                        },
