// 欢迎页
const Home = r => require.ensure([], () => r(require('./view/home.vue')), 'group-home');

const Teacher = r => require.ensure([], () => r(require('./view/teacher/teacher.vue')), 'group-teacher');

var routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/teacher',
    component: Teacher
  }
];

export default routes;
