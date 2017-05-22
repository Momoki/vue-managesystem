// 欢迎页
const Home = r => require.ensure([], () => r(require('./view/home.vue')), 'group-home');

// 公用
// 账户管理
const base_info = r => require.ensure([], () => r(require('./view/base/info.vue')), 'group-base');
const base_pass = r => require.ensure([], () => r(require('./view/base/pass.vue')), 'group-base');

// 教师用户
// 学生管理
const teacher_student_list = r => require.ensure([], () => r(require('./view/teacher/student/list.vue')), 'group-teacher-student');
const teacher_student_import = r => require.ensure([], () => r(require('./view/teacher/student/import.vue')), 'group-teacher-student');
// 实习管理
const teacher_intern_list = r => require.ensure([], () => r(require('./view/teacher/intern/list.vue')), 'group-teacher-intern');
const teacher_intern_chart = r => require.ensure([], () => r(require('./view/teacher/intern/chart.vue')), 'group-teacher-intern');
// 校企合作管理
const teacher_cooperation_intention = r => require.ensure([], () => r(require('./view/teacher/cooperation/intention.vue')), 'group-teacher');
const teacher_cooperation_enterprise = r => require.ensure([], () => r(require('./view/teacher/cooperation/enterprise.vue')), 'group-teacher');
const teacher_cooperation_job = r => require.ensure([], () => r(require('./view/teacher/cooperation/job.vue')), 'group-teacher');
// 短学期管理
const teacher_shortterm_list = r => require.ensure([], () => r(require('./view/teacher/shortterm/list.vue')), 'group-teacher');

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
    path: '/base/info',
    component: base_info
  },
  {
    path: '/base/pass',
    component: base_pass
  },
  {
    path: '/teacher/student/list',
    component: teacher_student_list
  },
  {
    path: '/teacher/student/import',
    component: teacher_student_import
  },
  {
    path: '/teacher/intern/chart',
    component: teacher_intern_chart
  },
  {
    path: '/teacher/intern/list',
    component: teacher_intern_list
  },
  {
    path: '/teacher/cooperation/intention',
    component: teacher_cooperation_intention
  },
  {
    path: '/teacher/cooperation/enterprise',
    component: teacher_cooperation_enterprise
  },
  {
    path: '/teacher/shortterm/list',
    component: teacher_shortterm_list
  }
];

export default routes;
