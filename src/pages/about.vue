<template>
  <div class="about">
    <towtop></towtop>
    <div class="flexCenter">
      <div class="title fadeInUp animated">
        <h3>{{businessTitle}}</h3>
        <p>{{businessTitleEng}}</p>
      </div>
    </div>
    <div class="box1Top container">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <p>{{desc}}</p>
      <!-- <el-time-select v-model="value" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="选择时间"></el-time-select> -->
      <div class="block">
        <el-slider v-model="value" show-input></el-slider>
        <el-button plain @click="open1">可自动关闭</el-button>

        <el-button plain @click="open1">成功</el-button>
        <el-button plain @click="open2">警告</el-button>
        <el-button plain @click="open3">消息</el-button>
        <el-button plain @click="open4">错误</el-button>
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
      businessTitle: "此刻相识",
      businessTitleEng: "About Us",
      headerBg: "headerBg",
      imgUrl: "../../static/images/logo.png",
      desc: "",
      token: sessionStorage.getItem("token"),
      radio: "1",
      value: 0
    };
  },
  created() {
    this.getAbout();
  },
  components: {
    towtop,
    towbottom
  },
  methods: {
    getAbout() {
      var about = {};
      this.$request
        .post("aboutMe/selectAboutUs", about, this.token)
        .then(res => {
          this.desc = res.data.list[0].aboutUs;
        })
        .catch(err => {
          console.log(error);
        });
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },

    open2() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    open3() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    },

    oopen4() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息"
      });
    }
  }
};
</script>

<style scoped>
.about {
  width: 100%;
  background: url(../../static/images/background4.png);
  background-size: cover;
}
.kbox1Bg {
  box-sizing: border-box;
  margin-top: 130px;
  margin-bottom: 100px;
  padding-top: 40px;
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.kbox1Bg p {
  text-indent: 2em;
  line-height: 29px;
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
  margin-left: 43px;
  height: 250px;
  margin-top: 30px;
}
.kbox1Bg img {
  width: 77px;
  height: 175px;
}
.box1Top {
  /* margin-top:80px; */
  padding-top: 30px;
  padding-bottom: 40px;
  min-height: 760px;
}
.box1Top p {
  /* padding: 0 80px; */
  text-indent: 2em;
  line-height: 29px;
  /* writing-mode: vertical-lr; */
  /* writing-mode: tb-lr; */
  /* margin-left: 43px; */
  height: 250px;
  /* margin-top:30px; */
}
</style>