// 欢迎页
const Home = r => require.ensure([], () => r(require('./view/home.vue')), 'group-home');

const teacher_studentmanagelist = r => require.ensure([], () => r(require('./view/teacher/studentmanage/list.vue')), 'group-teacher');

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
    path: '/teacher/studentmanage/list',
    component: teacher_studentmanagelist
  }
];

export default routes;
