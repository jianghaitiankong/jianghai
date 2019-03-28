<template>
	<div>
		<towtop></towtop>
		<div class="mainBg" style="min-height: 10px;">
			<div class="serviceBox">
				<div class="container">
					<div class="flexCenter">
						<div class="title fadeInUp animated">
							<h3>{{businessTitle}}</h3>
							<p>{{businessTitleEng}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container" id="add">
				<div class="onepageBox">
					<ul class="artlist list-unstyled">
						<li @click="NewsJumpLink(index)" class="fadeInUp animated hoverBg" v-for="(item,index) in NewsList">
							<a href="javascript:;" target="_blank">
								<h3 class="arTit">{{item.articleTitle}}</h3>
								<span class="arTime">{{item.updateTime}}</span>
								<span class="line"><i></i></span>
								<div class="arBrief">
									<p>{{item.articleContent}}</p>
								</div>
							</a>
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
				currentPage: 1, //当前页
				pageSize: 10, //当前页条数
				businessTitle: "新闻动态",
				businessTitleEng: 'News',
				headerBg: 'headerBg',
				NewsList: [],
				token: sessionStorage.getItem("token"),
			}

		},
		created() {
			this.getData();
//			window.addEventListener('scroll', this.onScroll);
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			onScroll() {
				//可滚动容器的高度
				let innerHeight = document.querySelector('#add').clientHeight;
				//屏幕尺寸高度
				let outerHeight = document.documentElement.clientHeight;
				//可滚动容器超出当前窗口显示范围的高度
				let scrollTop = document.documentElement.scrollTop;
				//scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
				//				console.log(innerHeight + " " + outerHeight + " " + scrollTop);
				if(innerHeight < (outerHeight + scrollTop)) {
					//加载更多操作
					console.log("loadmore");
					var that = this;
					var NewsListbefore = that.NewsList;
					that.currentPage += 1;
					var data = {
						'curPage': that.currentPage,
						'pageSize': 10,
					}
					this.$request.post('news/selectAllNews', data, that.token).then(res => {
						that.NewsList = NewsListbefore.concat(res.data.list);
						console.log(that.NewsList)
					}).catch(err => {
						console.log(error)
					});
				}
			},
			//获取新闻列表
			getData() {
				var that = this;
				var data = {
					'curPage': that.currentPage,
					'pageSize': 100,
				}
				this.$request.post('news/selectAllNews', data, that.token).then(res => {
					console.log(res.data.list)
					that.NewsList = res.data.list;
				}).catch(err => {
					console.log(error)
				});
			},
			//跳转详情页
			NewsJumpLink(index){
				var that = this;
				var str = that.NewsList[index].updateTime
				that.time = str.substr(0, 10)
				console.log(that.time)
				that.$router.push({
					path: '/newsDetails',
					query: {
						title: that.NewsList[index].articleTitle,
						content: that.NewsList[index].articleContent,
						time:that.time
					}
				})
			}
			
		},

	}
</script>

<style scoped>
	.artlist {
		padding: 0;
	}
	
	.artlist li a {
		padding: 30px;
		color: #333;
	}
	
	.artlist li a:hover .arTit {
		color: #0546B4;
	}
	/*.artlist li a:after {top: 46%;right: -10px;width: 20px;height: 20px;background: #0546B4;}*/
	
	.artlist li a:before {
		top: 44%;
		box-shadow: 0 3px 7px 0 rgba(51, 51, 51, 0.50);
	}
	
	.arTit {
		color: #333;
		margin-bottom: 16px;
	}
	
	.onepageBox {
		width: 1000px;
		margin: 0 auto;
	}
	
	.serviceBox .box2Tit {
		padding: 80px 0 50px;
	}
	
	.artlist li {
		min-height: 225px;
	}
	
	.artlist:after {
		width: 2px;
		background: #ccc
	}
	
	.arBrief {
		color: #666;
	}
	
	.line {
		display: flex;
		justify-content: flex-end;
	}
	
	.line i {
		width: 95px;
		height: 4px;
		background: #ccc;
		margin: 10px 0;
	}
	
	.artlist li a:hover .line i {
		background: #0546B4;
	}
	
	.arTime {
		font-style: normal;
		font-size: 18px;
		color: #333;
	}
	
	.artlist li a:hover:before {
		height: 70px;
		background: #0546B4;
	}
	
	.hoverBg:hover {
		background: #F4F7FD;
	}
	
	.artlist li:nth-child(2n) .arTime {
		justify-content: flex-start
	}
	
	.artlist li:nth-child(2n) .line {
		justify-content: flex-start;
	}
	
	.artlist li:nth-child(2n):hover {
		background: #B6D1F7;
	}
	
	.artlist li:nth-child(2n):hover .arTit {
		color: #0546B4;
	}
	
	.artlist li:nth-child(2n):hover .arBrief p {
		color: #0546B4;
	}
	
	.artlist li:nth-child(2n) a:hover .line i {
		background: #3FACF8;
	}
	
	.artlist li:nth-child(2n) a:hover:before {
		background: #3FACF8;
	}
	
	.arBrief p {
		text-align: left;
		text-indent: 2em;
	}
</style>