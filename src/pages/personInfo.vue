<template>
	<div class="peisonInfo">
		<towtop></towtop>
		<div class="boxTitle">
			<div class="container">
				<img src="../../static/images/head.png" class="img-responsive ">
				<div class="boxPhone ">用户{{phone}}，您好！</div>
				<router-link to="/changePsw">
					<p>修改密码</p>
				</router-link>
				<p @click='logout'>安全退出</p>
			</div>
		</div>
		<div class="container">
			<div class="new_width">
				<div class="personal_dh">
					<ul>
						<li @click="tab(index)" v-for="(item,index) in personInfo" :class="{personal_dh_lion : index===curId}">{{item.name}}</li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 0'>
					<ul>
						<li><span>用户名：</span>{{phone}}</li>
						<li><span>手机号：</span>{{phone}}</li>

						<li v-if="!informationCen.collectionId"><span>用户类型：</span>未认证<input @click="certificationPop" type="button" name="Submit" value="认证" class="new_rz_btn"></li>
						<li v-else><span>用户类型：</span>已认证</li>
						<li><span>邮箱：</span>{{informationCen.email}}</li>
						<li><span>真实姓名：</span>{{informationCen.name}}</li>
						<li><span>公司名称：</span>{{informationCen.work}}</li>
						<li><span>职位：</span>{{informationCen.duty}}</li>
						<!-- <li><span>会员卡号：</span>1548834776301</li> -->
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 1 '>
					<ul>
						<li><span>我的积分：</span>{{pointTotail}}</li>
						<li><span>积分说明：</span>（注册+50积分）</li>
						<!-- <li style='color:blue'><span style='color:#000'>积分明细：</span>查看详情</li> -->
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 2 '>
					<ul>
						<li v-for="(item, index) in listShow" :key="index"><span>{{item}}</span></li>
						<li v-show="listShow.one"><span>江海学院</span></li>
						<li v-show="listShow.two"><span>创投工场</span></li>
						<li v-show="listShow.three"><span>Universe Media</span></li>
						<li v-show="listShow.four"><span>AI投研</span></li>
						<li v-show="listShow.five"><span>孵化网络</span></li>
						<li v-show="listShow.six"><span>基金星空</span></li>
						<li v-show="listShow.seven"><span>创投大家</span></li>
						<li v-show="listShow.eight"><span>江海星空</span></li>
						<li v-show="listShow.nine"><span>智能招商</span></li>
						<li v-show="listShow.then"><span>江海沙龙</span></li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 3 '>
					<ul style="height:500px">

					</ul>
				</div>
			</div>
		</div>
		<!-- 编辑弹出框 -->
		<el-dialog title="选择角色" :visible.sync="Visible" width="25%">
			<el-form v-model="SelectRole">
				<el-form-item prop="SelectRole" label="">
					<el-select v-model="SelectRole" placeholder="请选择认证角色" style="margin-left: 20%;">
						<el-option label="创业者" value="1"></el-option>
						<el-option label="投资人" value="2"></el-option>
						<el-option label="FA机构" value="3"></el-option>
						<el-option label="合伙人" value="4"></el-option>
						<el-option label="基金管理公司" value="5"></el-option>
						<el-option label="投资机构" value="6"></el-option>
						<el-option label="政府" value="7"></el-option>
						<el-option label="游客" value="8"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                <el-button @click="Visible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </span>
		</el-dialog>
		<towbottom></towbottom>
	</div>
</template>

<script>
import towtop from '@/components/testTop'
import towbottom from '@/components/testBottom'
export default {
  data () {
    return {
      curId: 0,
      headerBg: 'headerBg',
      tabShow: false,
      Visible: false,
      SelectRole: '',
      personInfo: [{
        name: '个人信息'
      }, {
        name: '我的积分'
      }, {
        name: '产品推荐'
      }],
      listShow: ['江海学院', '创投工场', '孵化网络', 'Universe Media'],
      // }, {
      //   name: '我的关注'
      // }],
      pointTotail: '',
      informationCen: {},
      phone: sessionStorage.phone,
			setItemShow: false,
			token: sessionStorage.getItem("token"),
    }
  },
  created () {
    this.information()
  },
  components: {
    towtop,
    towbottom
  },
  methods: {
    tab (index) {
      this.curId = index
      if (index === 0) {
        this.information() // 个人信息
      } else if (index === 1) {
        this.integral() // 积分查询
      } else if (index === 2) {
        this.listSho()
      }
    },
    listSho () {
      var cen = this.informationCen.collectionId
      if (cen === 1) {
        this.listShow = ['江海学院', '创投工场', '孵化网络', 'Universe Media']
      } else if (cen === 2) {
        this.listShow = ['创投工场', '创投大家', 'AI投研']
      } else if (cen === 3) {
        this.listShow = ['江海星空', '基金星空', '孵化网络']
      } else if (cen === 4) {
        this.listShow = ['江海学院', '创投工场', '创投大家', '江海沙龙', 'AI投研']
      } else if (cen === 5) {
        this.listShow = ['基金星空', 'AI投研', '创投工场']
      } else if (cen === 6) {
        this.listShow = ['创投工场', 'AI投研', '孵化网络', '创投大家', '智能招商']
      } else if (cen === 7) {
        this.listShow = ['江海学院', '孵化网络', '江海星空', '智能招商', 'Universe Media']
      } else if (cen === 8) {
        this.listShow = ['创投工场', '创投大家', 'AI投研', 'Universe Media']
      }
    },
    information () {
      this.$request.post('collection/selectCollectionByPhone', {'cellphone': sessionStorage.phone},this.token)
        .then(res => {
          console.log(res.data.list[0])
          this.informationCen = res.data.list[0]
        })
        .catch(error => {
          console.log(error)
        })
    },

    integral () {
      this.$request.post('user/selectPoint', {'userId': sessionStorage.getItem('UserId')},this.token)
        .then(res => {
          this.pointTotail = res.data.list[0].pointTotail
        })
        .catch(error => {
          console.log(error)
        })
    },
    //          setItem:function(){
    //              this.setItemShow = !this.setItemShow
    //          },
    logout: function () {
      sessionStorage.clear()
      this.$router.push({
        path: '/login'

      })
    },
    // 点击认证弹出框
    certificationPop () {
      this.Visible = true
    },
    sure () {
      var str = this.phone
      var strPhone = str.substr(0, 3) + '****' + str.substr(7)
      if (this.SelectRole == '') {
        this.$message.error('请选择认证角色')
      } else {
        this.$router.push({
          path: '/authentication',
          query: {
            roleId: this.SelectRole,
            phone: strPhone
          }
        })
      }
    }
  }

}
</script>

<style scoped>
	.peisonInfo {
		background: #eff3f5;
	}

	.boxTitle .container {
		display: flex;
		align-items: center;
		color: #FFF
	}

	.boxTitle {
		background: url(../../static/images/personInfoBg.png);
		margin: 95px 0 40px 0;
		height: 100px;
		line-height: 100px;
		vertical-align: middle
	}

	.boxTitle .container p {
		color: #0546B4;
	}

	.boxTitle .container p:hover {
		text-decoration: underline;
		cursor: pointer;
	}

	.boxTitle .container p:first-child {
		margin-right: 20px;
	}

	.boxTitle .img-responsive {
		width: 54px;
		height: 54px;
		margin-left: 60px;
		margin-right: 20px;
	}

	.boxTitle .boxPhone {
		margin-right: 60%;
	}

	.setItem {
		background: rgb(24, 69, 194, .5);
		width: 150px;
		height: 60px;
		line-height: 60px;
		position: absolute;
		right: 125px;
		top: 50px;
		border-radius: 10px;
		text-align: center;
	}

	.setItem li {
		height: 30px;
		line-height: 30px;
		cursor: pointer;
	}

	.conText p {
		font-size: 14px;
		margin-top: 13px;
	}

	.new_width {
		width: 1200px;
		margin: 0 auto;
	}

	.personal_dh {
		border: solid 1px #e2e7eb;
		height: 50px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		background: #ffffff;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.personal_dh li {
		float: left;
		width: 132px;
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		color: #777777;
		cursor: pointer;
		/* background: url(../images/personal/personal_07.jpg) top right no-repeat; */
	}

	.personal_dh_lion {
		font-size: 14px;
		color: #f2941a;
		border-bottom: solid 3px #42a2ed;
		box-sizing: border-box;
		margin-bottom: -10px;
	}

	.personal_dh li a {
		display: block;
	}

	.personal_1 {
		padding: 10px 30px;
	}

	.personal_main2 {
		background: #ffffff;
		margin-top: 16px;
		margin-bottom: 16px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		min-height: 300px;
	}

	.personal_1 li {
		float: left;
		width: 50%;
		font-size: 14px;
		color: #333333;
		line-height: 42px;
		height: 42px;
	}

	.personal_1 li span {
		display: inline-table;
		width: 100px;
		float: left;
	}

	.new_rz_btn {
		background: #67c61a;
		width: 72px;
		height: 28px;
		line-height: 28px;
		border: solid 1px #57b00d;
		color: #fff;
		cursor: pointer;
		margin-left: 10px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
	}
</style>
