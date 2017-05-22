//ajax配置
var BASE_URL = 'http://practice.ayuya.me/';
window.urlConfig =  function(url){
  switch(url){
    //班级列表
    case 'classlist':
      return BASE_URL + 'view/i/college/class/list';
    //专业列表
    case 'majorlist':
      return BASE_URL + 'view/i/college/major/list';
    // case expression:
    // 学生列表
    case 'studentlist':
      return BASE_URL + 'teacher/i/student/list';
    // 状态分布
    case 'statuslist':
     return BASE_URL + 'teacher/i/student/status';
    case 'location':
      return BASE_URL + 'user/i/practice/data/location/map';
    // 周记
    case 'weekly':
      return BASE_URL + 'user/i/practice/data/list';
    // 最近的周记
    case 'recentweekly':
      return BASE_URL + '/user/i/practice/data/recent'
    case 'account':
      return BASE_URL + '/user/i/account'
  }
  console.log("地址参数错误");
}
