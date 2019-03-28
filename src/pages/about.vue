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
			<p>{{desc}}</p >
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
				businessTitle: "此刻相识",
        businessTitleEng: 'About Us',
				headerBg: 'headerBg',
				imgUrl:'../../static/images/logo.png',
				desc:'',
				token: sessionStorage.getItem("token"),
			}
			
		},
		created(){
			this.getAbout()
		},
		components: {
			towtop,
			towbottom
		},
		methods:{
			getAbout() {
				var about = {}
				this.$request.post("aboutMe/selectAboutUs", about, this.token).then(res => {
					this.desc=res.data.list[0].aboutUs
				}).catch(err => {
					console.log(error);
				});
			},
		}
	}
</script>

<style scoped>
	.about{
		width:100%;
		background:url(../../static/images/background4.png);
		background-size: cover;
	}
	.kbox1Bg {
		box-sizing: border-box;
		margin-top: 130px;
		margin-bottom: 100px;
		padding-top:40px;
		display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	}
	.kbox1Bg p{
		text-indent: 2em;
		line-height: 29px;
		writing-mode: vertical-lr;
		writing-mode: tb-lr;
		margin-left: 43px;
		height: 250px;
		margin-top:30px;
	}
	.kbox1Bg img{
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