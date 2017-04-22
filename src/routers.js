// 欢迎页
const Home = r => require.ensure([], () => r(require('./view/home.vue')), 'group-home');

// 用户管理
// const user_single= r => require.ensure([], () => r(require('./view/user/single/index.vue')), 'group-user');
// const user_batch= r => require.ensure([], () => r(require('./view/user/batch/index.vue')), 'group-user');

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
