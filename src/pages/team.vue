<template>
	<div class="team-intr">
		<towtop></towtop>
		<div class="flexCenter">
			<div class="title fadeInUp animated">
				<h3>{{TeamTitle}}</h3>
				<p>{{TeamTitleEng}}</p>
			</div>
		</div>
		<div class="member clearfix">
			<div class="memberList" v-for="(item,index) in teamList" @mouseenter="onMouseOver(index)" @mouseleave="onMouseLeave(index)">
				<div class="memberImg">
					<img :src="item.imgSrc" alt="">
				</div>
				<div style="margin-top:25px">
					<div class="name">{{item.personName}}</div>
					<div class="position">{{item.position}}</div>  
				</div>
				<div v-show="index===HoverIndex" class="des fadeInUp animated">
					<div class="desTitle">
						{{item.duty}}
					</div>
					<div class="desCont" style="">
						{{item.introduce}}
					</div>
				</div>
			</div>
		</div>
		<div class="flexCenter">
			<div class="title fadeInUp animated">
				<h3>{{copartnerTitle}}</h3>
				<p>{{copartnerTitleEng}}</p>
			</div>
		</div>
		<div class="box container clearfix">
			<!--第一行(lineFirst)-->
			<div class="lineF">
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
			</div>
			<!--第二行(lineSecond)-->
			<div class="lineS">
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
			</div>
			<!-- 第三行 -->
			<div class="lineT">
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
				<div class="boxF">
					<div class="boxS">
						<div class="boxT" style="background-image: url(../../static/images/gengyuhua.png);">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="box1Top partner-icon">
			<img src="../../static/images/partner.png" class="img-responsive">
		</div> -->
		<div class="flexCenter">
			<div class="title fadeInUp animated">
				<h3>{{partnerTitle}}</h3>
				<p>{{partnerTitleEng}}</p>
			</div>
		</div>
		<div class="partner">
			<img src="../../static/images/partnerBig.png" />
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
				HoverIndex: -1,
				TeamTitle: "团队管理",
				TeamTitleEng: 'Management Team',
				partnerTitle: '合作伙伴',
				partnerTitleEng: 'Our Partners',
				copartnerTitle: '合伙人团队',
				copartnerTitleEng: 'Partner Team',
				headerBg: 'headerBg',
				currentPage :1,
				pageSize : 10,
				teamList :[],
				token: sessionStorage.getItem("token"),
				
				// teamList: [
				// 	{
				// 		"name": "徐 鲁",
				// 		"position": "董事长、CXO",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/xulu.png",
				// 		"hoverName": "张伟",
				// 		"hoverPosition": "CEO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责集团指数化组织打造",
				// 		"hoverDes": "北京大学经济学博士。历任广西崇左市金融办主任、广西凭祥市副市长、广西崇左市发改委党组成员兼副主任、中国人民银行总行主任科员、深圳市汇鑫海实业有限公司副总经理、华夏产品管理有限公司机构理财部宏观经济研究员、和君咨询有限公司电子通信行业分析师。北京南通商会会长、南通建筑行业联盟副理事长。"
				// 	},
				// 	{
				// 		"name": "张 伟",
				// 		"position": "总裁、CEO",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/zhangwei.png",
				// 		"hoverName": "张伟",
				// 		"hoverPosition": "CEO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责公司日常经营管理",
				// 		"hoverDes": "中南财经大学硕士。历任兴业银行深圳分行南山支行行长、兴业银行深圳分行公司业务部总经理、深圳力合华睿股权基金管理有限公司总经理。"
				// 	},
				// 	{
				// 		"name": "黄佳宁",
				// 		"position": "行政总裁、COO(运营)",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/huangjianing.png",
				// 		"hoverName": "黄佳宁",
				// 		"hoverPosition": "COO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责科技地产事业部",
				// 		"hoverDes": "复旦大学数学和哲学双学士，英国曼彻斯特大学硕士，历任民生加银投资经理、华西证券固定收益部投资总监。"
				// 	},
				// 	{
				// 		"name": "彭 皓",
				// 		"position": "副总裁、CMO(市场)",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/penghao.png",
				// 		"hoverName": "彭皓",
				// 		"hoverPosition": "CMO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责园区招商事业部、天使投资事业部融资工作",
				// 		"hoverDes": "南京大学化学博士，历任海门市投资促进局局长，海门市海永乡乡长，海门市海门港新区党工委副书记、副主任，海门市刘浩镇镇长，海门市临江新区招商局副局长。"
				// 	},
				// 	{
				// 		"name": "詹光耀",
				// 		"position": "副总裁、CIO(技术)",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/zhanguangyao.png",
				// 		"hoverName": "詹光耀",
				// 		"hoverPosition": "CIO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责天使VC事业部投资工作、创新系列大赛管理部、智能金融事业部金融科技部分工作",
				// 		"hoverDes": "中山大学管理学学士、纽芬兰纪念大学计算机科学硕士、北京智者天下科技有限公司工程师、昂若（深圳）资本管理有限公司合伙人。"
				// 	},
				// 	{
				// 		"name": "刘武亮",
				// 		"position": "副总裁、CIO(信息)",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/liuwuliang.png",
				// 		"hoverName": "刘武亮",
				// 		"hoverPosition": "CIO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责商会咨询业务、投后管理服务、主持智能金融科技事业部投资研究工作",
				// 		"hoverDes": "加州大学伯克利分校法律硕士，历任温石（北京）咨询顾问有限公司总经理、大连万达集团文化产业法务部副总经理、完美世界（北京）软件有限公司法务经理、北京长安律师事务所律师。"
				// 	},
				// 	{
				// 		"name": "谢振东",
				// 		"position": "法律顾问、CIO",
				// 		"duty": "",
				// 		"imgSrc": "../../static/images/xiezhendong.png",
				// 		"hoverName": "黄新宇",
				// 		"hoverPosition": "CIO",
				// 		"hoverDuty": "",
				// 		"hoverTitle": "负责公司整体法务事宜",
				// 		"hoverDes": "汕头大学学士，律师。曾任职国浩律师（深圳）事务所律师，深圳市赢众通金融信息服务有限责任公司法务负责人。"
				// 	}
				// ]

				// {
				// 	"name": "黄新宇",
				// 	"position": "副总裁、CIO(信息)",
				// 	"duty": "",
				// 	"imgSrc": "../../static/images/gengyuhua.png",
				// 	"hoverName": "黄新宇",
				// 	"hoverPosition": "CIO",
				// 	"hoverDuty": "",
				// 	"hoverTitle": "负责基金天空、招商系统、媒体服务功能体系搭建工作",
				// 	"hoverDes": "现任江苏足财电子商务有限公司(筑材网)、上海聚吧信息科技有限公司(筑人网)总经理。"
				// },
				// {"name":"耿裕华",
				// "position":"联合创始人",
				// "duty":"",
				// "hoverName":"耿裕华",
				// "hoverPosition":"联合创始人",
				// "hoverDuty":"",
				// "hoverTitle" : "负责集团指数化组织打造",
				// "hoverDes":"复旦大学管理学院EMBA，国家一级注册建造师、研究员及高级工程师。复旦大学EMBA校友会执行会长。达海控股集团、南通四建集团有限公司董事长。中国建筑业协会副会长。江苏省建筑业协会副会长。南通建筑业协会副会长。江苏省第十届人民代表大会代表。南通市第十三届人大常委。"
				// },
				// arr7:[
				//     {"name":"董立勇",
				//     "position":"",
				//     "duty":"",
				//     "hoverName":"董立勇",
				//     "hoverPosition":"",
				//     "hoverDuty":"",
				//     "hoverDes":"中国人民大学经济学学士、美国加州大学伯克利分校EMBA。曾主导悦达控股有限公司、翔宇疏浚控股有限公司在香港主板上市。历任悦达集团（香港）有限公司、悦达控股有限公司董事、副总经理、总经理，深旺有限公司董事总经理。"
				//     },
				// ],
				// arr8:[
				//     {"name":"谢振东",
				//     "position":"管理合伙人",
				//     "duty":"",
				//     "hoverName":"谢振东",
				//     "hoverPosition":"管理合伙人",
				//     "hoverDuty":"",
				//     "hoverDes":"复旦大学管理学院EMBA，国家一级注册建造师、研究员及高级工程师。复旦大学EMBA校友会执行会长。达海控股集团、南通四建集团有限公司董事长。中国建筑业协会副会长。江苏省建筑业协会副会长。"
				//     }
				// ],

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
			onMouseOver(index) {
				var that = this;
				that.HoverIndex = index;
			},
			onMouseLeave(index) {
				var that = this;
				that.HoverIndex = -1;
			},
			getData() {
				let that = this;
				let data = {
					curPage: that.currentPage,
					pageSize: that.pageSize
				};
				this.$request.post("team/person/query", data, that.token).then(res => {
					that.teamList = res.data.list;
				})
				.catch(err => {
					that.$message.error(error);
				});
			},
		}
	}
</script>
<style scoped>
	.member {
		width: 900px;
		margin: 0 auto;
		color: #333333;
		font-size: 24px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 30px;
	}
	.memberList:hover{
		border: 1px solid #0546B4;
	}
	.memberList {
		width: 300px;
		text-align: center;
		position: relative;
		margin-top: 100px;
		padding-bottom: 10px;
	}
	
	.memberImg {
		border-radius: 50%;
		height: 160px;
		width: 160px;
		text-align: center;
		margin: 0 70px;
	}
	
	.memberList img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		margin-bottom: 35px;
		border: 3px solid rgba(5, 70, 180, 0.3);
	}
	.name {
		height: 24px;
		line-height: 24px;
	}
	
	.position {
		font-size: 20px;
		margin-top: 20px;
		height: 20px;
		line-height: 20px
	}
	
	.des {
		color: #333333;
		font-size: 14px;
		z-index: 30;
	}
	
	.desTitle {
		margin: 5px auto
	}
	
	.desCont {
		font-size: 12px;
		width: 259px;
		margin: 0 auto;
		    text-align: left;
	}
	/* 合作伙伴 */
	
	.partner-icon {
		margin-top: 0 !important;
	}
	
	.partner {
		text-align: center;
		margin-bottom: 94px;
	}
	
	.partner>div {
		margin-top: 49px;
	}
	/* 正六边形 */
	
	.box {
		position: relative;
		/* width: 630px; */
		margin: 88px auto;
		height: 300px;
	}
	
	.lineF,
	.lineS,
	.lineT {
		position: absolute;
		visibility: hidden;
		width: 100%;
		left: 18%;
	}
	
	.lineS {
		top: 130px;
		left: 135px;
	}
	
	.lineT {
		top: 260px;
		left: 210px;
	}
	
	.boxF,
	.boxS,
	.boxT,
	.overlay {
		width: 140px;
		height: 163px;
		overflow: hidden;
	}
	
	.boxF,
	.boxS {
		visibility: hidden;
	}
	
	.boxF {
		transform: rotate(120deg);
		float: left;
		margin-left: 10px;
		-ms-transform: rotate(120deg);
		-moz-transform: rotate(120deg);
		-webkit-transform: rotate(120deg);
	}
	
	.boxS {
		transform: rotate(-60deg);
		-ms-transform: rotate(-60deg);
		-moz-transform: rotate(-60deg);
		-webkit-transform: rotate(-60deg);
	}
	
	.boxT {
		transform: rotate(-60deg);
		background: no-repeat 50% center;
		background-size: 125% auto;
		-ms-transform: rotate(-60deg);
		-moz-transform: rotate(-60deg);
		-webkit-transform: rotate(-60deg);
		visibility: visible;
	}
	
	.overlay {
		transition: all 250ms ease-in-out 0s;
		display: none;
		position: relative;
	}
	
	.overlay:hover {
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	.boxT:hover .overlay {
		display: block;
	}
	
	.overlay a {
		display: inline-block;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -16px 0 0 -16px;
		border-radius: 3px;
		background-color: #d3b850;
		text-align: center;
		line-height: 32px;
		width: 32px;
		height: 32px;
		text-decoration: none;
		color: White;
		font-size: 18px;
		font-weight: bolder;
	}
</style>