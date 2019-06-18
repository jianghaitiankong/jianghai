<template>
  <div>
    <towtop></towtop>
    <div class="login">
      <div class="container" style="min-height:800px">
        <div class="form row">
          <div class="form-horizontal" id="login_form">
            <h3 class="form-title">登录</h3>
            <div class="form-group">
              <i class="fa-user"></i>
              <input
                v-model="phone"
                class="form-control required"
                type="text"
                v-on:keydown="doLogin($event)"
                placeholder="请输入手机号"
                id="phone"
                name="phone"
                autofocus="autofocus"
                maxlength="11"
              >
            </div>
            <div class="form-group">
              <i class="fa-lock">|</i>
              <input
                v-model="password"
                class="form-control required"
                type="password"
                placeholder="请输入密码"
                id="password"
                name="password"
                maxlength="20"
              >
            </div>
            <div class style="margin-bottom: 30px;position: relative;">
              <label class="checkbox" for="remember-password-checkbox">
                <input
                  type="checkbox"
                  v-model="rememberPassword"
                  id="remember-password-checkbox"
                  v-on:click="doRememberPassword($event)"
                  name="remember"
                  value="1"
                >记住账号
              </label>
              <router-link to="/forgetPsw" class="resetWrod">忘记密码?</router-link>
            </div>
            <div class="form-group col-md-offset-9">
              <button
                @click="doLogin"
                type="submit"
                :disabled="btnDis"
                class="btn btn-primary"
                name="submit"
              >登录</button>
              <div style="color:red;margin:2px 0;" v-show="loginShow">{{loginWord}}</div>
            </div>
            <div>
              <div style="width:70%;float:left">
                <label class="checkbox" for="server">
                  <input type="checkbox" id="server" checked="true">
                  我已阅读并完全接受
                  <router-link
                    to="/rules"
                    tag="span"
                    style="color:rgba(15, 158, 245,0.8);cursor:pointer"
                  >服务条款</router-link>
                </label>
              </div>
              <div class="text-right">
                <router-link to="/register">
                  <div style="color:#fff">免费注册</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <towbottom></towbottom>
  </div>
</template>

<script>
import towtop from "@/components/testTop";
import towbottom from "@/components/testBottom";
export default {
  data() {
    return {
      headerBg: "headerBg",
      phone: "",
      password: "",
      rememberPassword: false,
      loginShow: false,
      loginWord: "",
      btnDis: false,
      successMsg: "", //成功的提示
      waringMsg: "", //警告的提示
      Message: "", //普通的提示
      errorMsg: "" //错误的提示
    };
  },
  created() {},
  components: {
    towtop,
    towbottom
  },
  // 相当于ready 模板编译挂载之后
  mounted: function() {
    this.loadAccountInfo();
  },
  methods: {
    doLogin: function(event) {
      var mySelf = this;
      var phone = mySelf.phone;
      var userPwd = mySelf.password;
      // 记住密码checkbox的勾选状态 和账号信息的字符串
      var rememberStatus = mySelf.rememberPassword;
      var accountInfo = "";
      accountInfo = phone + "&" + userPwd;
      if (event && event.type == "keydown" && event.keyCode != 13) {
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        mySelf.errorMsg = "手机号码不正确";
        mySelf.open4();
        return;
      } else if (this.password == "") {
        mySelf.errorMsg = "请输入密码";
        mySelf.open4();
        return;
      }
      mySelf.btnDis = true;
      var data = {
        phone: mySelf.phone,
        password: mySelf.password
      };
      mySelf.$request
        .post("user/loginByUnAndPw", data)
        .then(function(res) {
          if (res.data.success == "登录成功") {
            // 如果登录成功，则把账号信息保存在cookie当中
            window.sessionStorage.setItem("UserId", res.data.UserId);
            if (rememberStatus) {
              mySelf.$util.setCookie("accountInfo", accountInfo, 30 * 3);
            } else {
              mySelf.$util.delCookie("accountInfo");
            }
            // 若为本地环境 则手写cookie
            // if (window.location.href.indexOf('localhost') != -1){
            sessionStorage.setItem("token", res.data.token);
            mySelf.$util.setCookie("token", res.data.token, 30);
            // }
            sessionStorage.phone = mySelf.phone;
            mySelf.$router.push({
              path: "/personInfo"
            });
          } else {
            mySelf.errorMsg = res.data.error;
            mySelf.open4();
            // mySelf.loginShow = true;
            // mySelf.loginWord = res.data.error;
            mySelf.btnDis = false;
          }
        })
        .catch(function(error) {
          (mySelf.loginShow = true), (mySelf.loginWord = "登录失败");
          mySelf.btnDis = false;
        });
    },
    doRememberPassword: function(event) {
      let mySelf = this;
      let rememberStatus = mySelf.rememberPassword;
      // event.preventDefault();
      mySelf.rememberPassword = !rememberStatus;
    },
    loadAccountInfo: function() {
      let mySelf = this;
      let accountInfo = mySelf.$util.getCookie("accountInfo");
      // 如果cookie里没有账号信息
      if (Boolean(accountInfo) == false) {
        return false;
      } else {
        // 如果cookie里有账号信息
        let phone = "";
        let passWord = "";
        let index = accountInfo.indexOf("&");
        // 从cooike取出账户密码
        phone = accountInfo.substring(0, index);
        passWord = accountInfo.substring(index + 1);
        mySelf.phone = phone;
        mySelf.password = passWord;
        mySelf.rememberPassword = true;
      }
    },
    

    open1() {
      this.$notify({
        title: "成功",
        message: this.successMsg,
        type: "success"
      });
    },

    open2() {
      this.$notify({
        title: "警告",
        message: this.warningMsg,
        type: "warning"
      });
    },

    open3() {
      this.$notify.info({
        title: "消息",
        message: this.Message
      });
    },

    open4() {
      this.$notify.error({
        title: "错误",
        message: this.errorMsg,
        type: "error"
      });
    }
  }
};
</script>

<style scoped="">
.form-group {
  position: relative;
  /* margin: 5px 0; */
  height: 60px;
}
.login {
  min-height: 754px;
  width: 100%;
  background: url(../../static/images/loginBg.png);
  color: #fff;
  background-size: cover;
}

.form {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 420px;
  height: 390px;
  margin: 20% 0 0 55%;
  padding: 30px 45px;
  box-sizing: border-box;
}
.fa {
  display: inline-block;
  top: 27px;
  left: 6px;
  position: relative;
}

input[type="text"],
input[type="password"] {
  padding-left: 65px;
}

.checkbox {
  padding-left: 25px;
}

.fa-user,
.fa-lock {
  width: 23px;
  height: 26px;
  display: block;
  position: absolute;
  top: 12px;
  left: 14px;
}
.fa-user {
  background: url(../../static/images/user.png) center center;
}
.fa-lock {
  background: url(../../static/images/key.png) center center;
}
.form-control {
  height: 50px;
  width: 330px;
}

.form-title {
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
.btn-primary {
  width: 333px;
  background-color: #0546b4;
  border-color: #0546b4;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  padding: 0;
}
.checkbox {
  display: inline;
}
.form-horizontal .form-group {
  margin-left: 0;
}
.resetWrod {
  position: absolute;
  right: 15px;
  color: #fff;
}
.tipWords {
  visibility: hidden;
}
</style>
