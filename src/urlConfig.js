//ajax配置
var BASE_URL = 'http://139.129.37.224:8080';
window.urlConfig =  function(url){
  switch(url){
    //班级列表
    case 'classList':
      return BASE_URL + '/view/i/college/class/list';
    //专业列表
    case 'majorList':
      return BASE_URL + '/view/i/college/major/list';
    // case expression:
    // case 'studentlist'

  }
  console.log("地址参数错误");
}
