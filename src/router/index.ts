import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  
  //PATHS WITHOUT LAYOUT
  {
    path: '',
    redirect: {name: 'home'}
  },
  {
    //PATH WITH LAYOUT
    path: '',
    component: () => import('@/layout/layout.vue'),
    children: [
      
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/users/pages/home/index.vue'),
         meta: {
          public: true
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/users/pages/home/index.vue'),
         meta: {
          public: true
        }
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/users/pages/home/index.vue'),
         meta: {
          public: true
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
