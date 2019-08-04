<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>媒体中心</h3>
					<p>Media Center</p>
				</div>
			</div>
			<div class="video-content">
				<div class="video-list" v-for="item in videoList" :key='item.mediaId'>
					<!-- <img :src="item.image"/> -->
					<video :src="item.filePath" controls="controls" style="width:300px;height:214px">
					</video>
					<p>{{item.mediaName}}</p>
					<!-- <img src="../../static/images/play.png"/> -->
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
				headerBg: 'headerBg',
				currentPage:1,
				pageSize : 10,
				videoList:[
					// {image:'../../static/images/v1.png',name:'创投实战商学院开学典礼'},
					// {image:'../../static/images/v2.png',name:'江海天空2019战略发布会'},
					// {image:'../../static/images/v3.png',name:'江海天空2019年会直播'},
					// {image:'../../static/images/v1.png',name:'创投实战商学院开学典礼'},
					// {image:'../../static/images/v2.png',name:'江海天空2019战略发布会'},
					// {image:'../../static/images/v3.png',name:'江海天空2019年会直播'}
					]
			}
			
		},
		created() {
				this.queryData();
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			queryData(){
				var that = this;
				var data = {
					curPage  : that.currentPage,
					pageSize : that.pageSize
				}
				that.$request.post("media/query",data,that.token).then(function(result){
					if(result.data.success == "媒体查询成功"){
						that.videoList = result.data.list
						console.log(that.adminList,'赋值之后的that.adminList')
					}
				})
			}
		},

	}
</script>

<style>
	.video-content{display: flex;margin-top: 30px;flex-wrap: wrap;justify-content: space-between;}
	.video-list {width: 29%;display: flex;align-items:center;flex-direction: column;margin-bottom: 30px;box-sizing: border-box;position: relative;}
	.video-list img:first-child {width: 300px;height: 214px;margin-bottom: 10px;border: 1px solid #f9f9f9;padding: 5px;box-shadow: 0 0 10px #0546b4;}
	.video-list img:last-child {position: absolute;top: 32%;}
	.video-list p{font-size: 22px;color: #0546B4;text-align: center;}
</style>