import { createRouter, createWebHistory } from 'vue-router';
// @todo handle eslint error on this line
// eslint-disable-next-line import/no-unresolved
import routes from 'virtual:generated-pages';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
