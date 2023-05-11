import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue'
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import PageNotFound from './pages/PageNotFound.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/:pathMatch(.*)',
		name: 'PageNotFound',
		component: PageNotFound,
	},
	{
		path: '/auth/:provider/callback',
		component: {
		template: '<div class="auth-component"></div>'
		}
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;