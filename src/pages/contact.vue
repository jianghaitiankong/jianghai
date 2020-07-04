<template>
	<div class="contactUs">
		<towtop></towtop>

		<div class="serviceBox">
			<div class="container">
				<!-- <div class="box1Top fadeInUp animated">
					<img src="../../static/images/contact.png" class="img-responsive">
				</div> -->
				<div class="flexCenter">
					<div class="title fadeInUp animated">
							<h3>{{businessTitle}}</h3>
							<p>{{businessTitleEng}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="onepageBox">
				<div class="contact">
					<ul class="conItem list-unstyled">
						<li class="wow fadeInUp animated" v-for="(item,inx) in contactList" :key='item.contactId'>
							<div class="conImg"><img :src="item.icon" class="img-circle img-responsive"></div>
							<div class="conText wow fadeInLeft animated">
								<h3 class="conName">{{inx}} --- {{item.contactHQ}}</h3>
								<h3 class="conName">{{inx}} --- {{item.contactAddress}}</h3>
								<p>{{inx}} --- 联系人：{{item.contactUser}}<br>{{inx}} --- 电  话 ：{{item.contactPhone}}</p>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<div>
			<label>contactHQ
				<input type="text" v-model="contactHQ">
			</label>
			<label>contactAddress
				<input type="text" v-model="contactAddress">
			</label>
			<label>contactUser
				<input type="text" v-model="contactUser">
			</label>
			<label>contactPhone
				<input type="text" v-model="contactPhone">
			</label>
		</div>
		<div>
			<el-radio-group v-model="radio1">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<button @click='add'> 添加 联系人</button>
		<!-- 测试vuex -->
		<h1>我是从页面上直接获取的值：{{this.$store.state.count}}</h1>
		<h1>我是从getters获取的计算后的值：{{this.$store.getters.getStateCoune}}</h1>

		<h1>count的值：{{this.$store.state.count}}</h1>
		<div class="button">
			<button @click="addFun">+</button>
			<button @click="redFun">-</button>
		</div>

		<towbottom></towbottom>
	</div>
</template>

<script>
import towtop from '@/components/testTop'
import towbottom from '@/components/testBottom'
export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      businessTitle: '联系我们',
      businessTitleEng: 'Contact Us',
      headerBg: 'headerBg',
      radio1: '上海',
      radio2: '北京',
      radio3: '上海',
      radio4: '上海',
      // contactList: [{
      // 	imgSrc:'../../static/images/beijing.png',
      // 	city: '北京基地',
      // 	address: '北京市西城区中海凯旋五号楼五单元9B',
      // 	linkman: '王女士',
      // 	telephone: 18716816741
      // }, {
      // 	imgSrc:'../../static/images/shenzhen.png',
      // 	city: '深圳基地',
      // 	address: '深圳市福田区泰然八路广华大厦7F',
      // 	linkman: '周女士',
      // 	telephone: 13043466829
      // }, {
      // 	imgSrc:'../../static/images/shanghai.png',
      // 	city: '上海基地',
      // 	address: '上海市闵行区申滨南路1156号A栋8层822室',
      // 	linkman: '莫女士',
      // 	telephone: 18317068725
      // }, {
      // 	imgSrc:'../../static/images/nantong.png',
      // 	city: '南通基地',
      // 	address: '江苏省南通市崇川区南通壹城天外望沙龙',
      // 	linkman: '任女士',
      // 	telephone: 18888051305
      // }]
      contactList: [],
      token: sessionStorage.getItem('token'),
      contactHQ: '',
      contactAddress: '',
      contactUser: '',
      contactPhone: ''
    }
  },
  created () {
    this.getData()
  },
  components: {
    towtop,
    towbottom
  },
  methods: {
    getData () {
      let that = this
      var data = {
        curPage: this.currentPage,
        pageSize: this.pageSize
      }
      that.$request.post('contact/selectAllContact', data, that.token).then(res => {
        if (res.data.success === '查询成功') {
          that.contactList = res.data.list
          console.log(that.contactList)
        } else {
          that.$message.error(res.data.error)
        }
      }).catch(err => {
        that.$message.error(err)
      })
    },
    addFun () {
      this.$store.dispatch('addFun')
      // this.$store.commit('add');
    },
    redFun () {
      this.$store.dispatch('redFun')
      // this.$store.commit('reduction');
    },
    add () {
      this.contactList.push({ contactHQ: this.contactHQ, contactAddress: this.contactAddress, contactUser: this.contactUser, contactPhone: this.contactPhone })
    }
  }

}
</script>

<style scoped>
	.serviceBox img {
		width: 175px;
		height: 77px;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	.conText p {font-size: 14px;margin-top: 13px;}
	.box1Top {
        margin-top:80px;
        padding-bottom: 40px;
    }
	h1{
		text-align: center
	}
	button{
		width: 40px;
		height: 40px;
		margin:  0 auto;
	}
	.button{
		text-align: center;
		margin: 10px;
	}
</style>
