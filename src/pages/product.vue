<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>{{title}}</h3>
					<p>{{engTitle}}</p>
				</div>
			</div>
			<ul class="productList clearfix">
				<li v-for="(item,index) in productList" @click="skip(item,index)">
					<div class="listIndex">
						<span>{{index+1}}</span>
					</div>
					
					<div class="productTitle">{{item.productTitle}}</div>
					<div class="productContent">{{item.productContent}}</div>
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
				id: this.$route.query.id,
				title: this.$route.query.title,
				engTitle: this.$route.query.engTitle,
				productList: [],
				token: sessionStorage.getItem("token"),
			}
		},
		components: {
			towtop,
			towbottom
		},
		created(){
			this.getData()
		},
		methods: {
			//获取产品列表
			getData() {
				var that = this;
				var data = {
					'curPage': 1,
					'pageSize': 20,
					'product': that.title
				}
				this.$request.post('product/selectProductByName', data, that.token).then(res => {
					that.productList = res.data.list;
				}).catch(err => {
					console.log(error)
				});
			},
			//跳转
			skip(item, index) {
				var that = this;
				that.curId = index
				that.nextTitle = item.productTitle;
				that.nextEng = item.productTitleEng;
				that.nextContent = item.productContent;
				if(that.curId == 9) {
					this.$router.push({
						path: "/schoolfellow"
					})
				} else {
					this.$router.push({
						path: "/productDetails",
						query: {
							detailsTitle: this.nextTitle,
							detailsContent: this.nextContent,
							detailsEng: this.nextEng
						}
					});

				}
			}
		},
	}
</script>
<style scoped>
	.productContent {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size: 14px;
		height: 80px;
	}
	.listIndex {
		position: absolute;
	    top: -37px;
    	left: 38%;
		font-size: 24px;
		color: #fff;
		font-weight: 500;
		background: url('../../static/images/productImg.png') center center;
		width: 75px;
		height: 75px;
		line-height: 75px;
		text-align: center;
	}
</style>