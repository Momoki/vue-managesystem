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
const teacher_shortterm_add = r => require.ensure([], () => r(require('./view/teacher/shortterm/add.vue')), 'group-teacher');


// 学生用户
// 简历管理
const student_info_base = r => require.ensure([], () => r(require('./view/student/info/base.vue')), 'group-student');
const student_info_upload = r => require.ensure([], () => r(require('./view/student/info/upload.vue')), 'group-student');
// 实习管理
const student_intern_job = r => require.ensure([], () => r(require('./view/student/intern/job.vue')), 'group-student');
const student_intern_report = r => require.ensure([], () => r(require('./view/student/intern/report.vue')), 'group-student');
const student_intern_weekly = r => require.ensure([], () => r(require('./view/student/intern/weekly.vue')), 'group-student');
//实习管理
const student_shortterm_list = r => require.ensure([], () => r(require('./view/student/shortterm/list.vue')), 'group-student');
const student_shortterm_report = r => require.ensure([], () => r(require('./view/student/shortterm/report.vue')), 'group-student');

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
  },
  {
    path: '/student/info/base',
    component: student_info_base
  },
  {
    path: '/student/info/upload',
    component: student_info_upload
  },
  {
    path: '/student/intern/job',
    component: student_intern_job
  },
  {
    path: '/student/intern/report',
    component: student_intern_report
  },
  {
    path: '/student/intern/weekly',
    component: student_intern_weekly
  },
  {
    path: '/student/shortterm/list',
    component: student_shortterm_list
  },
  {
    path: '/student/shortterm/report',
    component: student_shortterm_report
  },
  {
    path: '/teacher/shortterm/add',
    component: teacher_shortterm_add
  }
];

export default routes;
