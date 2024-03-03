export default [
  {
    path: '/cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'pokemon.cards.show',
        component: () => import('pages/Cards/Show/index.vue'),
        meta: {
          title: 'Pokemon',
        },
      },
    ],
  },
] as Array<{
  path: string
  component: () => Promise<typeof import('layouts/MainLayout.vue')>
  children: Array<{
    path: string
    name: string
    component: () => Promise<typeof import('pages/Cards/Show/index.vue')>
    meta: {
      title: string
    }
  }>
}>
