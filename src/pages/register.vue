<template>
  <div>
    <towtop></towtop>
    <div class="login">
      <div class="container" style="min-height:725px">
        <div class="form row">
          <div class id="register_form">
            <div id="register" class="form-inline">
              <h3 class="form-title">注册信息</h3>
              <div class="registerInfo">
                <label for="phoneNum">
                  <i class="new_register_red">*</i> 手机号:
                </label>
                <input
                  @blur="phoneBlur"
                  v-model="phoneNum"
                  class="form-control required"
                  type="text"
                  placeholder="请输入手机号"
                  id="phoneNum"
                  name="phoneNum"
                  maxlength="11"
                >
              </div>
              <el-tooltip class="item" effect="dark" content="密码只能含有字母和数字，长度在8-20之间" placement="right-end">
                <div class="registerInfo">
                  <label for="password">
                    <i class="new_register_red">*</i>密码:
                  </label>
                  <input
                    @blur="passwordBlur"
                    class="form-control required"
                    v-model="password"
                    type="password"
                    placeholder="请输入密码"
                    id="password"
                    name="password"
                    maxlength="20"
                  >
                </div>
              </el-tooltip>

              <div class="registerInfo">
                <label for="password2">
                  <i class="new_register_red">*</i>确认密码:
                </label>
                <input
                  @blur="passwordBlur2"
                  class="form-control required"
                  v-model="password2"
                  type="password"
                  placeholder="请再次输入密码"
                  id="password2"
                  name="password2"
                  maxlength="20"
                >
              </div>
              <div class="registerInfo">
                <label for="code">
                  <i class="new_register_red">*</i>验证码:
                </label>
                <input
                  class="form-control required"
                  style="width:185px"
                  v-model="code"
                  type="text"
                  placeholder="请输入验证码"
                  id="code"
                  name="code"
                  maxlength="6"
                >
                <button
                  v-show="sendAuthCode"
                  type="button"
                  class="btn codebtn"
                  @click="sendSms"
                >获取验证码</button>
                <button v-show="!sendAuthCode" type="button" class="btn recodebtn">
                  {{auth_time}}秒后
                  <br>重新发送验证码
                </button>
              </div>
            </div>
            <div id="detailInfo" class="form-inline">
              <h3 class="form-title">详细信息</h3>
              <div class="registerInfo">
                <label for="username">姓名:</label>
                <input
                  class="form-control required"
                  type="text"
                  placeholder="姓名"
                  id="username"
                  name="username"
                  maxlength="20"
                >
              </div>
              <div class="registerInfo">
                <label for="companyName">公司名称:</label>
                <input
                  class="form-control required"
                  type="text"
                  placeholder="公司名称"
                  id="companyName"
                  name="companyName"
                  maxlength="20"
                >
              </div>
              <div class="registerInfo">
                <label for="compayPosition">职位:</label>
                <input
                  class="form-control required"
                  type="text"
                  placeholder="职位"
                  id="compayPosition"
                  name="compayPosition"
                  maxlength="20"
                >
              </div>
              <div class="registerInfo">
                <label for="registerTo">注册为:</label>
                <select
                  class="form-control required"
                  type="text"
                  placeholder="注册为"
                  id="registerTo"
                  name="registerTo"
                  maxlength="20"
                >
                  <option value="00000000-0000-0000-0000-000000000000">请选择</option>
                  <option value="2d2ae92a-4144-4ac0-8a9a-5eb9dc9cbee3">创业者</option>
                  <option value="2d2ae92a-4144-4ac0-8a9a-5eb9dc9cbee5">投资人</option>
                  <option value="2d2ae92a-4144-4ac0-8a9a-5eb9dc9cbee4">合伙人</option>
                  <option value="400a3c10-5bf8-4e18-9fc1-5058b6806caa">FA</option>
                  <option value="2d2ae92a-4144-4ac0-8a9a-5eb9dc9cbee1">基金</option>
                  <option value="3e15e019-85bb-41c9-8273-7431783d05d7">政府</option>
                </select>
              </div>
              <div class="registerInfo">
                <label for="focusContent">关注内容:</label>
                <select
                  class="form-control required"
                  type="text"
                  placeholder="关注内容"
                  id="focusContent"
                  name="focusContent"
                  maxlength="20"
                >
                  <option value="VC/PE数据">VC/PE数据</option>
                  <option value="研究报告">研究报告</option>
                  <option value="全部">全部</option>
                </select>
              </div>
            </div>
          </div>

          <div style="text-align:center">
            <button type="submit" class="btn btn-primary" name="button" @click="register">注册</button>
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
      phoneNum: "",
      password: "",
      password2: "",
      code: "",
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      successMsg: "", //成功的提示
      waringMsg: "", //警告的提示
      Message: "", //普通的提示
      errorMsg: "" //错误的提示
    };
  },
  created() {},
  mouted: {},
  components: {
    towtop,
    towbottom
  },
  methods: {
    phoneBlur: function() {
      if (!/^1[34578]\d{9}$/.test(this.phoneNum)) {
        this.errorMsg = "手机号码不正确";
        this.open4();
      } 
    },
    passwordBlur: function() {
      if (!/^(?=.*[a-z])(?=.*\d)[^]{8,20}$/.test(this.password)) {
        this.errorMsg = "密码只能含有字母和数字，长度在8-20之间";
        this.open4();
      }
    },
    
    passwordBlur2: function() {
      if (this.password !== this.password2) {
        this.errorMsg = "两次密码不匹配";
        this.open4();
      }
    },
    sendSms: function() {
      var that = this;
      if (that.phoneNum !== "") {
        that.sendAuthCode = false;
        that.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          that.auth_time--;
          if (that.auth_time <= 0) {
            that.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
        var data = {
          phone: that.phoneNum
        };
        that.$request
          .post("user/sendSms", data)
          .then(function(res) {
            if (res.data.success == "发送成功") {
              that.successMsg = "短信发送成功";
              that.open1();
            }
          })
          .catch(function(error) {
            that.errorMsg = "短信发送失败";
            that.open4();
          });
      } else {
        that.errorMsg = "请先输入手机号";
        that.open4();
      }
    },
    register: function() {
      var that = this;
      if (!/^1[34578]\d{9}$/.test(that.phoneNum)) {
        that.errorMsg = "手机号码不正确";
        that.open4();
      } else if (!/^[a-zA-Z0-9]{8,20}$/.test(that.password)) {
        that.errorMsg = "密码只能含有字母和数字，长度在8-20之间";
        that.open4();
      } else if (that.password !== that.password2) {
        that.errorMsg = "两次密码不匹配";
        that.open4();
      } else {
        var data = {
          phone: that.phoneNum,
          password: that.password,
          code: that.code
        };
        that.$request
          .post("user/registerByPhone", data)
          .then(function(res) {
            if (res.data.success == "注册成功") {
              that.successMsg = "注册成功";
              that.open1();
              setTimeout(() => {
                that.$router.push({
                  path: "/login"
                });
              }, 2000);
            } else if (res.data.success == "该手机号已注册！") {
              that.errorMsg = "该手机号已注册！";
              that.open4(); 
            } else if (res.data == "验证码错误") {
              that.errorMsg = "验证码错误";
              that.open4(); 
            }
          })
          .catch(function(error) {
            console.log(error);
          });
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
}
.login {
  min-height: 754px;
  width: 100%;
  background: url(../../static/images/loginBg.png);
  color: #fff;
  background-size: cover;
}
#register_form {
  height: 380px;
}
#register {
  width: 400px;
  float: left;
  height: 350px;
}
#detailInfo {
  width: 400px;
  float: right;
}
.registerInfo {
  display: block;
  margin-bottom: 15px;
  text-align: right;
}
#register label {
  position: relative;
}
.noteInfo {
  text-align: left;
  margin-left: 100px;
}
.new_register_red {
  color: #e65a49;
  font-size: 20px;
  position: absolute;
  left: -10px;
}
.registerContent {
  text-align: center;
}
.form {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 100%;
  height: 500px;
  margin: 11% 0 40px 0;
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
  padding-left: 15px;
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
  width: 300px;
}

.form-title {
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
.btn-primary {
  width: 45%;
  background-color: #0546b4;
  border-color: #0546b4;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  padding: 0;
}
.codebtn {
  width: 28%;
  background-color: #0546b4;
  border-color: #0546b4;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding: 0;
}
.recodebtn {
  width: 28%;
  font-size: 13px;
  background-color: #c8cbcf;
  border-color: #c8cbcf;
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
</style>