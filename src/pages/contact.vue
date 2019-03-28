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
						<li class="wow fadeInUp animated" v-for="item in contactList">
							<div class="conImg"><img :src="item.icon" class="img-circle img-responsive"></div>
							<div class="conText wow fadeInLeft animated">
								<h3 class="conName">{{item.contactHQ}}</h3>
								<h3 class="conName">{{item.contactAddress}}</h3>
								<p>联系人：{{item.contactUser}}<br>电  话 ：{{item.contactPhone}}</p>
							</div>
						</li>

					</ul>
				</div>
			</div>
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
				currentPage :1,
				pageSize : 10,
				businessTitle : '联系我们',
				businessTitleEng :'Contact Us',
				headerBg: 'headerBg',
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
				contactList : [],
				token: sessionStorage.getItem("token"),
			}

		},
		created() {
			this.getData();
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			getData() {
				let that = this
				var data = {
							curPage : this.currentPage,
							pageSize : this.pageSize
						};
				that.$request.post('contact/selectAllContact', data, that.token).then(res => {
					console.log(res.data.list)
					if(res.data.success == "查询成功"){
						that.contactList = res.data.list;
					}else{
						that.$message.error(res.data.error);
					}
				}).catch(err => {
					that.$message.error(error);
				});
			},
		},

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
</style>