// 欢迎页
const Home = r => require.ensure([], () => r(require('./view/home.vue')), 'group-home');

var routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  }
];

export default routes;
