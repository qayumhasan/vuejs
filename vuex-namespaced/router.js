import Vue from 'vue'
import Router from 'vue-router'
import auth from "./service/authService";
import EventBus from "./service/bus";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [

        // =============================================================================
        // Frontend Routes
        // =============================================================================

        {
            path: '',
            component: () => import('@frontend/Layouts.vue'),
            children: [
                {
                    path: '/',
                    name: 'page-home',
                    component: () => import('@frontend/pages/home/home.vue')
                },
                {
                    path: '/login',
                    name: 'page-login',
                    component: () => import('@frontend/pages/login.vue')
                },
                {
                    path: '/signUp',
                    name: 'page-sign-up',
                    component: () => import('@frontend/pages/SignUp.vue')
                },

                {
                    path: '/pages/referral',
                    name: 'page-referral',
                    component: () => import('@frontend/pages/Referrals.vue')
                },
                {
                    path: '/pages/gift-cards',
                    name: 'page-gift-cards',
                    component: () => import('@frontend/pages/GiftCards.vue')
                },

                {
                    path: '/about',
                    name: 'page-about',
                    component: () => import('@frontend/pages/about/About.vue')
                },
                {
                    path: '/contact',
                    name: 'page-contact',
                    component: () => import('@frontend/pages/Contact.vue')
                },
                {
                    path: '/tearms',
                    name: 'page-tearms',
                    component: () => import('@frontend/pages/Tearms.vue')

                },
                {
                    path: '/cancellation',
                    name: 'page-cancellation',
                    component: () => import('@frontend/pages/Cancellation.vue')
                },
                {
                    path: '/privacy',
                    name: 'page-privacy',
                    component: () => import('@frontend/pages/Privacy.vue')
                },

                {
                    path: '/logout',
                    name: 'user-logout',
                    component: () => import('@frontend/pages/Logout.vue'),
                    meta: {
                        auth: true,

                    },
                },

                     // =============================================================================
                        // Owner Frontend Routes start from here
                        // =============================================================================


                {
                    path: '/owner-dashboard',
                    name: 'owner-dashboard',
                    component: () => import('@frontend/pages/owner/Dashboard.vue'),
                    meta: {
                        auth: true,

                    },




                },


                      // =============================================================================
                    // Captain Frontend Routes start from here
                    // =============================================================================



                {
                    path: '/captain-dashboard',
                    name: 'captain-dashboard',
                    component: () => import('@frontend/pages/captain/Dashboard.vue'),
                    meta: {
                        auth: true,

                    },
                },


            ]
        },





        // =============================================================================
        {
            path: '/admin',
            component: () => import('@views/Main.vue'),
            children: [
                {
                    path: '/',
                    // redirect: '/admin/dashboard',
                    meta: {
                        auth: true,
                        guard: '1001',
                    },

                },
                // =============================================================================
                // Admin ROUTES
                // =============================================================================
                {
                    path: 'admin',
                    component: () => import('@views/admin/partials/Layouts.vue'),
                    children: [
                        // =============================================================================
                        // MAIN ROUTES
                        // =============================================================================
                        {
                            path: '/',
                            name: 'admin.dashboard',
                            component: () => import('@views/admin/Dashboard.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/captains',
                            name: 'admin.captains',
                            component: () => import('@views/admin/captains'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/captains/:userId',
                            name: 'admin.captains-edit',
                            component: () => import('@views/admin/captains/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'captains',
                            },
                        },
                        {
                            path: '/admin/owners',
                            name: 'admin.owners',
                            component: () => import('@views/admin/owners'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/owners/:userId',
                            name: 'admin.owners-edit',
                            component: () => import('@views/admin/owners/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'owners',
                            },
                        },
                        {
                            path: '/admin/bids',
                            name: 'admin.bids',
                            component: () => import('@views/admin/bids'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/captain/bid/:bidId',
                            name: 'admin.bids-edit',
                            component: () => import('@views/admin/bids/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'bids',
                            },
                        },
                        {
                            path: '/admin/requests',
                            name: 'admin.requests',
                            component: () => import('@views/admin/requests'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/requests/:requestId',
                            name: 'admin.requests-edit',
                            component: () => import('@views/admin/requests/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'requests'
                            },
                        },
                        {
                            path: '/admin/trips',
                            name: 'admin.trips',
                            component: () => import('@views/admin/trips'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/owner/trip/:tripId',
                            name: 'admin.trips-edit',
                            component: () => import('@views/admin/trips/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'trips',
                            },
                        },
                        {
                            path: '/admin/reviews',
                            name: 'admin.reviews',
                            component: () => import('@views/admin/reviews'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/reviews/:reviewId',
                            name: 'admin.reviews-edit',
                            component: () => import('@views/admin/reviews/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'reviews'
                            },
                        },
                        {
                            path: '/admin/giftcards',
                            name: 'admin.giftcards',
                            component: () => import('@views/admin/giftcards'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/referrals',
                            name: 'admin.referrals',
                            component: () => import('@views/admin/referrals'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/users',
                            name: 'admin.users',
                            component: () => import('@views/admin/users'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/users/:userId',
                            name: 'admin.users-edit',
                            component: () => import('@views/admin/users/Edit.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                                parent: 'users',
                            },
                        },
                        {
                            path: '/admin/settings',
                            name: 'admin.settings',
                            component: () => import('@views/admin/Settings.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/logout',
                            name: 'admin.logout',
                            component: () => import('@views/admin/Logout.vue'),
                            meta: {
                                auth: true,
                                guard: '1001',
                            },
                        },
                    ],
                },
                // =============================================================================
                // AUTH ROUTES
                // =============================================================================
                {
                    path: 'admin',
                    component: () => import('@views/admin/auth/Layouts.vue'),
                    children: [
                        {
                            path: '/admin/login',
                            name: 'admin.login',
                            component: () => import('@views/admin/auth/Login.vue'),
                            meta: {
                                guest: true,
                                guard: '1001',
                            },
                        },
                        {
                            path: '/admin/forgot-password',
                            name: 'admin.forgot-password',
                            component: () => import('@views/admin/auth/ForgotPassword.vue'),
                            meta: {
                                guest: true,
                                guard: '1001',
                            },
                        },
                    ]
                },
            ],
        },
        // =============================================================================
        // ERROR PAGE
        // =============================================================================
        {
            path: '',
            component: () => import('@views/errors/Layouts.vue'),
            children: [
                {
                    path: '*',
                    component: () => import('@views/errors/404.vue')
                },
            ]
        },


    ],
})

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

export default router
