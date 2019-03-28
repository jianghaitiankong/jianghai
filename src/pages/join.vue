<template>
	<div class="join-container">
		<towtop></towtop>
		<!-- <div class="box1Top fadeInUp animated">
			<img src="../../static/images/join.png" class="img-responsive">
		</div> -->
		<div class="flexCenter">
			<div class="title fadeInUp animated">
					<h3>{{businessTitle}}</h3>
					<p>{{businessTitleEng}}</p>
			</div>
		</div>
		<p>
			南通江海天空科技创新服务集团有限公司（下简称“江海天空”），UVC控股旗下拟独立IPO平台，是致力于科技双创 与创投基金管理服务，并提供多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全 程孵化的综合性科技创新服务集团。业务涵盖天使/VC投资、科技地产、基金三方服务、园区招商、商会咨询、江海学 院等业务。通过北京、上海、深圳、南通、香港、温哥华和硅谷七个自有物理空间，实现项目孵化、招商引资和创投基 金三位一体的业务模式，赋予江海天空多元盈利能力。
		</p>
		<div class="recruit wow fadeInUp animated">
			<h5>招聘信息</h5>
			<ul>
				<li @click="tab(index,item)" v-for="(item,index) in JobList">
					<div class="joinH4" :class="index==curId?'bgA':'bgB' ">
						<span class="joinName ellipsis">{{item.hiring}}</span>
						<div class="joinBrief">
							<span>工作地点：{{item.workplace}}</span>
							<i>|</i>
							<span>招聘人数：{{item.numbers}}</span>
						</div>
					</div>
					<div v-show="index===curId" class="joinText">
						<p>岗位职责：</p>
						<p>{{item.duty}}</p>
						<p>薪资水平:</p>
						<p>{{item.money}}</p>
						<br>
						<a href="mailto:wujiaqi@uvcgroup.cn">wujiaqi@uvcgroup.cn</a>
					</div>
				</li>
			</ul>

		</div>
		<towbottom></towbottom>
	</div>
</template>
<script>
	import towtop from '@/components/testTop'
	import towbottom from '@/components/testBottom'
	export default {
		data() {
			return {
				JobList:[],
				curId: -1,
				businessTitle : '加入我们',
				businessTitleEng :'Join Us',
				headerBg: 'headerBg',
				isShow: true,
				isShow1: true,
				isShow2: true,
				bgA: '',
				bgB: '',
				bgA1: '',
				bgB1: '',
				bgA2: '',
				bgB2: '',
				token: sessionStorage.getItem("token"),
			}
		},
		components: {
			towtop,
			towbottom
		},
		mounted() {},
		created(){
			this.getData();
		},
		methods: {
			//获取招聘列表
			getData() {
				var that = this;
				var data = {
					'curPage': 1,
					'pageSize': 100,
				}
				this.$request.post('join/selectAllJoin', data, that.token).then(res => {
					console.log(res.data.list)
					that.JobList = res.data.list;
				}).catch(err => {
					console.log(error)
				});
			},
			tab(index, item) {
				var that = this;
				that.curId = index;
			}
		}
	}
</script>
<style scoped>
	.join-container {
		width: 100%;
		min-height: 500px;
		margin: 0 auto;
	}
	
	.join-container>p {
		width: 60%;
		margin: 0 auto 40px;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		text-indent: 28px;
	}
	
	.box1Top {
		margin-top: 80px;
		padding-bottom: 40px;
	}
	
	.recruit {
		width: 60%;
		margin: 0 auto 80px;
		min-height: 320px;
	}
	
	.recruit h5 {
		font-size: 16px;
		color: #666666;
		letter-spacing: 0.57px;
		background: rgba(5, 70, 180, .1);
		padding: 8px 0px 10px 20px;
		margin-bottom: 15px;
	}
	
	.recruit ul li .joinH4:hover {
		background: #92e7e8;
	}
	
	.bgB {
		background: none;
	}
	
	.bgA {
		background: #92e7e8;
	}
	
	.recruit .joinText p {
		animation: info .5s linear 0s 1 forwards;
		-webkit-animation: info .5s linear 0s 1 forwards;
	}
	
	@keyframes info {
		from {
			transform: translateY(30px);
			-ms-transform: translateY(30px);
			-webkit-transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
			-ms-transform: translateY(0px);
			-webkit-transform: translateY(0px);
		}
	}
	
	@-moz-keyframes info {
		from {
			transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes info {
		from {
			transform: translateY(30px);
			-webkit-transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
			-webkit-transform: translateY(0px);
		}
	}
	
	@-o-keyframes info {
		from {
			transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
		}
	}
</style>