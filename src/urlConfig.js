//ajax配置
var BASE_URL = '139.129.37.224:8080/';
window.urlConfig =  function(url){
  switch(url){
    //班级列表
    case 'classList':
      return BASE_URL + '/view/i/college/class/list?institute=11';
    //专业列表
    case 'majorList':
      return BASE_URL + '/view/i/college/major/list?institute=11';
    // case expression:
    // case 'studentlist'

  }
  console.log("地址参数错误");
}
