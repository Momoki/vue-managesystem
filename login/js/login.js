/* ==========================================================
 * v
 * ==========================================================
 * Copyright aqi
 *
 *
 * ========================================================== */
(function($) {
  var ui = {
    $tip: $('#tip'),
    $account: $('#account input'),
    $password: $('#password input'),
    $loginForm: $('#loginForm'),
    $loginBtn: $('#loginBtn')
  };
  var ajaxing = false;
  var oPage = {
    init: function() {
      this.view();
      this.listen();
    },
    view: function() {
      var self = this;
    },
    listen: function() {
      var self = this;
      // input输入事件
      ui.$loginForm.on("input", "input", function() {
        // 重置error
        self.fClearError($(this).parent().attr("id"))
        // 重置tip
        ui.$tip.html("")
      })
      // 提交按钮点击事件
      ui.$loginBtn.on("click", function() {
        // 是否正在ajax
        if (ajaxing) return;
        // 获取页面数据
        let loginData = {
          "account": ui.$account.val(),
          "password": ui.$password.val()
        }
        // 表单验证
        if (!self.fCheckForm(loginData.account, loginData.password)) return;
        // ajax配置
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "http://139.129.37.224:8080/practice/auth/i/account/login",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded"
          },
          "data": loginData
        }
        // ajax状态显示
        ajaxing = true;
        ui.$loginBtn.html('<div class="spinner"></div>登录中')
        // 开始ajax
        setTimeout(function(){
          $.ajax(settings).done(function(res) {
            if (res.error == undefined) {
              ui.$loginBtn.html("登录成功:)")
			  var url = '../dist/index.html';
              // window.location = res.data.items[0].url;
			  window.location = url;
            } else {
              self.fShowAjaxError(res.error);
              ui.$loginBtn.html("登录")
              ajaxing = false;
            }
          }).fail(function() {
            ui.$tip.html("网络错误，请稍后再试")
            ui.$loginBtn.html("登录")
            ajaxing = false;
          });
        },500)

      })
    },
    fCheckForm: function(account, password) {
      var self = this;
      if(ui.$loginForm.find(".form-group").hasClass("error"))
        return false;
      if (!account) {
        self.fShowError("account", "请填写用户名");
        if (!password) {
          self.fShowError("password", "请填写密码");
          return false;
        }
        return false;
      }
      if (!password) {
        self.fShowError("password", "请填写密码");
        return false;
      }
      return true;
    },
    fShowError: function(idname, tipHtml) {
      var self = this;
      var errorInput = ui.$loginForm.find("#" + idname);
      errorInput.addClass("error");
      var errHtml = errorInput.find(".check").html();
      tipHtml = errHtml ? errHtml + "；" + tipHtml : tipHtml;
      errorInput.find(".check").html(tipHtml);
    },
    fClearError: function(idname) {
      var self = this;
      ui.$loginForm.find("#" + idname).removeClass("error").find(".check").html("")
    },
    fShowAjaxError: function(e) {
      var self = this;
      if (e.errors == undefined) {
        ui.$tip.html(e.message);
      } else {
        for (let i = 0; i < e.errors.length; i++) {
          self.fShowError(e.errors[i].domain, e.errors[i].message)
        }
      }
    }
  }
  oPage.init();
})(jQuery);
