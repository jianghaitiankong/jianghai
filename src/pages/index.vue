/* eslint-disable */
<template>
	<div>
		<towtop :headerBg="headerBg" :imgUrl="imgUrl"></towtop>
		<div class="clearfix"></div>
		<div class="banner" :style="{backgroundImage: 'url(' + bannerImgUrl + ')' }">
		<!-- <img :src="bannerImgUrl" alt=""> 废弃-->
			<div class="bannerContent">
				<img src="../../static/images/bannerText.png" />
			</div>
			<img src="../../static/images/down.png" />
			<div class="starsContent">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
			</div>
		</div>
		<div class="kbox1Bg">
			<div class="container">
				<div class="box1Top wow fadeInUp animated first-recognize" data-wow-delay="0.5s">
					<img src="../../static/images/about.png" />
					<p>{{desc}}</p>
				</div>
			</div>
		</div>
		<div class="kbox2Bg">
			<div class="container">
				<div class=" wow fadeInUp animated" data-wow-delay="0.5s">
					<div style="text-align: center;">
						<div class="title fadeInUp animated" style="margin:60px 0">
							<h3>{{mediaTitle}}</h3>
							<p>{{mediaTitleEng}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="kbox3Bg" > -->
		<div class="kbox3Bg" :style="{backgroundImage: 'url(' + mediaImgUrl + ')' }">
			<div class="container">
				<div class="box1Top wow fadeInUp animated" data-wow-delay="0.5s">
					<img src="../../static/images/player.png" />
					<!-- <video src="../../static/video/01.mp4" width='1200' height="300" autoplay='autoplay' loop='loop' controls='controls'></video> -->
				</div>
				<p>江海天空，正青春</p>
				<router-link to="/video">
					<p style="font-size: 16px;color: #1160e6;text-decoration: underline;">更多媒体视频>></p>
				</router-link>
			</div>
		</div>
		<!-- 江海业务 -->
		<div class="business">
			<div class="flexCenter">
				<div class="title fadeInUp animated" style="margin:60px 0">
					<h3>{{bussinessTitle}}</h3>
					<p>{{bussinessTitleEng}}</p>
				</div>
			</div>
			<div class="business-container">
				<ul>
					<li @click="BusJumpLink(index)" @mouseenter="onMouseOver(index)" @mouseleave="onMouseLeave(index)" v-for="(item,index)  in businessList">
						<div class="businessIcon">
							<img :src="item.businessImg" alt="">
							<p>{{item.business}}</p>
						</div>
						<div v-show="index===HoverIndex" class="businessIconHover">
							<img :src="businessHover" alt="">
							<p>{{item.business}}</p>
							<div>{{item.businessHomepageCon}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 江海产品 -->
		<div class="box3Bg">
				<div class="title fadeInUp animated" style="margin:60px 0">
					<h3>{{productTitle}}</h3>
					<p>{{productTitleEng}}</p>
				</div>
			<!-- <div class="box3OverLay"> -->
			<div class="box3OverLay" :style="{backgroundImage: 'url(' + productsImgUrl + ')' }">
				<div class="container">
					<div class="box3Item wow fadeInUp">
						<div class="box3Bg-container">
							<ul class="box3Bg-top">
								<li @click="ProJumpLink(index)" v-for="(item,index)  in productList">
									<p>{{item.product}}</p>
									<div class="border"></div>
									<img :src="item.productImg">
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<towbottom></towbottom>
	</div>
</template>

<script>
	import towtop from '@/components/testTop'
	import towbottom from '@/components/testBottom'
import { throws } from 'assert';
	export default {
		data() {
			return {
				desc:'',
				HoverIndex: 6,
				headerBg: 'newHeaderBg',
				imgUrl: '../../static/images/Wlogo.png',
				mediaTitle: "媒体中心",
				mediaTitleEng: 'Media Center',
				bussinessTitle: '江海业务',
				bussinessTitleEng: 'UVC Business',
				productTitle: '江海产品',
				productTitleEng: 'UVC Products',
				businessList: [],
				businessHover: '',
				productList: [],
				bannerImgUrl : '',
				mediaImgUrl : '',
				productsImgUrl : '',
				token: sessionStorage.getItem("token"),
			}
		},
		created() {
			this.getBusinessData();
			this.getproductData();
			this.getAbout();
			this.backgroundImg();
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			//改变菜单栏样式
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 600) {
					this.headerBg = 'headerBg'
					this.imgUrl = '../../static/images/logo.png'
				} else {
					this.headerBg = 'newHeaderBg'
					this.imgUrl = '../../static/images/Wlogo.png'
				}
			},
			//获取关于我们
			getAbout() {
				var about = {}
				this.$request.post("aboutMe/selectAboutUs", about, this.token).then(res => {
					this.desc=res.data.list[0].aboutUs
				}).catch(err => {

					console.log(error)
				});
			},
			//获取业务列表
			getBusinessData() {
				var that = this;
				var data = {
					'curPage': 1,
					'pageSize': 10,
				}
				this.$request.post('bus/selectAllBus', data, that.token).then(res => {
					var Busdata = res.data.list;
					for(let i in Busdata) {
						Busdata[i].businessImg = '../../static/images/businessIcon' + i + '.png'
					}
					that.businessList = Busdata;
				}).catch(err => {
					console.log(error)
				});
			},
			//业务跳转带参
			BusJumpLink(index) {
				var that = this;
				that.$router.push({
					path: '/business',
					query: {
						id: that.businessList[index].businessId,
						title: that.businessList[index].business,
						engTitle: that.businessList[index].businessEng,
						content: that.businessList[index].businessCon
					}
				})
			},
			//获取产品列表
			getproductData() {
				var that = this;
				var data = {
					'curPage': 1,
					'pageSize': 10,
				}
				this.$request.post('product/selectAllProduct', data, that.token).then(res => {
					var Prodata = res.data.list
					for(let i in Prodata) {
						Prodata[i].productImg = '../../static/images/productIcon' + i + '.png'
					}
					that.productList = Prodata;
				}).catch(err => {
					console.log(error)
				});
			},
			//产品跳转带参
			ProJumpLink(index) {
				var that = this;
				that.$router.push({
					path: '/product',
					query: {
						id: that.productList[index].productId,
						title: that.productList[index].product,
						engTitle: that.productList[index].productEng,
					}
				})
			},
			onMouseOver(index) {
				var that = this;
				that.HoverIndex = index;
				that.businessHover = '../../static/images/businessHover' + index + '.png'
			},
			onMouseLeave(index) {
				var that = this;
				that.HoverIndex = 6;
				that.business = '../../static/images/businessIcon' + index + '.png'
			},
			backgroundImg(){
				var that = this;
				var data = { }
				that.$request.post('file/homePage/query', data, that.token).then(res => {
						console.log(res.data.list)
						that.bannerImgUrl = 'http://47.105.89.34:7005/officialWeb-service/file/download?filePath='+res.data.list[2].picturePath
						that.mediaImgUrl = 'http://47.105.89.34:7005/officialWeb-service/file/download?filePath='+ res.data.list[1].picturePath
						that.productsImgUrl ='http://47.105.89.34:7005/officialWeb-service/file/download?filePath='+ res.data.list[0].picturePath;
						// console.log(that.bannerImgUrl)
						// console.log(that.mediaImgUrl)
						// console.log(that.productsImgUrl)
				}).catch(err => {
					console.log(error)
				});
			
			}
		},

	}
</script>

<style scoped>
	nav.navbar.bootsnav ul.nav>li>a:hover {
		color: #0546b4 !important;
	}
	
	.kbox1Bg .box1Top {
		padding: 30px 0;
	}
	
	.kbox3Bg .box1Top {
		padding: 0;
	}
	
	.banBtn:after {
		display: block;
		content: "";
		width: 35px;
		height: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		/* background: url(~@/../static/images/banBtn.png) center center no-repeat; */
		background-size: cover;
		animation: flash 3s infinite;
	}
	
	.box1Bg h3,
	.box1Bg p {
		writing-mode: vertical-rl;
		writing-mode: tb-rl;
		float: right;
	}
	
	.first-recognize {
		width: 875px;
		height: 350px;
		margin: 0 auto;
	}
	
	.kbox1Bg {
		box-sizing: border-box;
		padding-top: 30px;
		background: url(../../static/images/background4.png);
	}
	
	.kbox1Bg p {
		text-indent: 2em;
		line-height: 29px;
		writing-mode: vertical-rl;
		writing-mode: tb-lr;
		float: left;
		margin-right: 43px;
		height: 250px;
		margin-top: 30px;
	}
	
	.kbox1Bg img {
		float: right;
	}
	
	.kbox2Bg {
		/*display: flex;
		justify-content: center;
		box-sizing: border-box;*/
		text-align: center;
	}
	
	.banner {
		/* background: url(../../static/images/bannerBg.png); */
		height: 700px;
		display: flex;
		box-sizing: border-box;
		justify-content: center;
		padding-top: 170px;
		flex-wrap: wrap;
		background-size: cover;
	}
	
	.bannerContent {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.banner .bannerContent img {
		width: 594px;
		height: 312px;
	}
	
	.banner img {
		width: 70px;
		height: 70px;
	}
	
	.kbox2Bg .box1Top {
		display: flex;
		justify-content: center;
	}
	
	.kbox3Bg {
		height: 610px;
		/* background: url(../../static/images/box3Bg.png); */
		/*display: flex;
		justify-content: center;*/
		box-sizing: border-box;
		background-size: cover;
	}
	
	.kbox3Bg .box1Top {
		/*display: flex;
		justify-content: center;*/
		margin-left: 47%;
		padding-top: 188px;
	}
	
	.kbox3Bg p {
		text-align: center;
		font-size: 20px;
		color: #444;
		margin-top: 30px;
		font-weight: bold;
	}
	
	.kbox3Bg img {
		width: 70px;
		height: 70px;
	}
	/* 江海业务 */
	
	.business {
		width: 100%;
		height: auto;
		margin: 0 auto;
		background: url(../../static/images/background4.png) repeat;
		padding-bottom: 30px;
	}
	
	.business-container {
		width: 76%;
		margin: 0 12%;
		display: flex;
	}
	
	.business ul {
		margin: 0 auto;
		text-align: center;
		display: inline-block;
	}
	
	.business ul li {
		float: left;
		display: block;
		background: #fff;
		box-shadow: 0 5px 9px 0 rgba(0, 83, 204, 0.30);
		border-radius: 10px;
		width: 180px;
		height: 250px;
		margin-right: 10px;
		position: relative;
	}
	
	.business ul li:nth-child(even) {
		background: #0446B4;
		color: #fff;
	}
	
	.business ul li .businessIconHover {
		background: #4182c3;
		box-shadow: 0 5px 9px 0 rgba(0, 83, 204, 0.30);
		border-radius: 10px;
		width: 180px;
		height: 250px;
		overflow: hidden;
		position: absolute;
		top: 0;
	}
	.box3OverLay{
		 /* background:url(../../static/images/background5.png);  */
		 padding:15px 0; 
		 background-size: cover
		 }
	.business ul li .businessIconHover(even) {
		background: #fff;
		color : #333;
	}
	
	.business ul li .businessIconHover img {
		animation: pic .5s linear 0s 1 forwards;
		-webkit-animation: pic .5s linear 0s 1 forwards;
	}
	
	@keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
			-ms-transform: translate(0px, 0px) scale(1);
			-webkit-transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
			-ms-transform: translate(-60px, -15px) scale(1.2);
			-webkit-transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-moz-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-webkit-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
			-webkit-transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
			-webkit-transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-o-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	.business ul li .businessIconHover p {
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.59px;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 12px;
		line-height: 20px;
		animation: title .5s linear 0s 1 forwards;
		-webkit-animation: title .5s linear 0s 1 forwards;
	}
	
	@keyframes title {
		from {
			transform: translate(0px, 40px);
			-ms-transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-ms-transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-moz-keyframes title {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-webkit-keyframes title {
		from {
			transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-o-keyframes title {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	.business ul li .businessIconHover div {
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0.35px;
		width: 152px;
		margin: 0 auto;
		text-align: left;
		animation: word .5s linear 0s 1 forwards;
		-webkit-animation: word .5s linear 0s 1 forwards;
	}
	
	@keyframes word {
		from {
			transform: translate(0px, 40px);
			-ms-transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-ms-transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-moz-keyframes word {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-webkit-keyframes word {
		from {
			transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-o-keyframes word {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	.business ul li .businessIcon img {
		margin: 50px 0 30px;
	}
	/* 江海产品 */
	
	.box3Bg {
		width: 100%;
		height: 650px;
		margin-bottom: -3px;
		text-align: center;
	}
	
	.box3Bg-container {
		width: 66%;
		margin: 0 17%;
	}
	
	.box3Bg ul {
		margin: 0 auto;
		text-align: center;
		display: inline-block;
		float: left;
	}
	
	.box3Bg ul li {
		float: left;
		display: block;
		width: 150px;
		height: 200px;
		cursor: pointer;
	}
	
	.box3Bg ul li:hover {
		/* background: rgba(23, 91, 177, .6); */
		background: rgba(23, 91, 177);
		animation: top .5s linear 0s 1 forwards;
		-webkit-animation: top .5s linear 0s 1 forwards;
	}
	
	@keyframes top {
		from {
			transform: scale(1);
			-ms-transform: scale(1);
			-webkit-transform: scale(1);
		}
		to {
			transform: scale(1.2);
			-ms-transform: scale(1.2);
			-webkit-transform: scale(1.2);
		}
	}
	
	@-moz-keyframes top {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}
	
	@-webkit-keyframes top {
		from {
			transform: scale(1);
			-webkit-transform: scale(1);
		}
		to {
			transform: scale(1.2);
			-webkit-transform: scale(1.2);
		}
	}
	
	@-o-keyframes top {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}
	
	.box3Bg-top li:nth-child(odd),
	.box3Bg-bottom li:nth-child(even) {
		background: rgba(0, 0, 0, .6);
	}
	
	.box3Bg-top li:nth-child(even),
	.box3Bg-bottom li:nth-child(odd) {
		background: rgba(0, 0, 0, .4);
	}
	
	.box3Bg ul li p {
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.59px;
		text-align: center;
		margin-top: 40px;
	}
	
	.box3Bg ul li div.border {
		width: 30px;
		height: 2px;
		background: #FFFFFF;
		margin: 16px auto 20px;
	}
	
	.box3Bg ul li img {
		width: 70px;
		height: 70px;
	}
</style>