<template>
	<div class="authentication">
		<header class="navbar-fixed-top headerBg">
			<nav class="navbar navbar-default bootsnav on no-full">
				<div class="container">
					<div class="navbar-header">
						<router-link to="/test">
							<div class="logo">
								<img src="../../static/images/logo.png" class="img-responsive">
							</div>
						</router-link>
					</div>
					<router-link to="/index">
						<div class="back">
							返回首页
						</div>
					</router-link>
				</div>
			</nav>
		</header>
		<div class="container" style="min-height: 1000px;">
			<div class="information">
				<div class="user">
					<img src="../../static/images/userIcon.png" />
					<p>用户{{Phone}}，您好！</p>
				</div>
				<h2>{{UserType}}</h2><span>认证资料上报</span>
			</div>
			<el-form :inline="true" :rules="rules" ref="form" :model="form">

				<!--基本信息-->
				<div class="inforTitle">
					<h2>基本信息</h2>
				</div>

				<h3 v-if="regisertInf">注册信息</h3>
				<!-- 创业者、投资人、合伙人的注册信息 -->
				<div class="form-box basic width110" v-if="Reginformation">
					<el-form-item prop="name" label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item prop="cellphone" label="手机">
						<el-input v-model.number="form.cellphone" placeholder="请输入手机号" maxlength="11"></el-input>
					</el-form-item>
					<el-form-item prop="gender" label="性别">
							<el-select v-model="form.gender" placeholder="请选择性别">
							<el-option label="女" value="女"></el-option>
							<el-option label="男" value="男"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="Wechat" label="微信号">
						<el-input v-model="form.Wechat" placeholder="请输入微信号"></el-input>
					</el-form-item>
					<el-form-item prop="nationality" label="国籍">
						<el-input v-model="form.nationality" placeholder="请输入国籍"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="邮箱">
						<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item prop="nation" label="民族">
						<el-input v-model="form.nation" placeholder="请输入民族"></el-input>
					</el-form-item>
					<el-form-item prop="idType" label="证件类型">
						<el-select v-model="form.idType" placeholder="请选择证件类型">
							<el-option label="身份证" value="身份证"></el-option>
							<el-option label="签证" value="签证"></el-option>
							<el-option label="护照" value="护照"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="maritalStatus" label="婚姻状况">
						<el-input v-model="form.maritalStatus" placeholder="请输入婚姻状况"></el-input>
					</el-form-item>
					<el-form-item prop="idTypeNumber" label="证件号">
						<el-input v-model="form.idTypeNumber" placeholder="请输入证件号"></el-input>
					</el-form-item>
				</div>
				<!-- 创业者、投资人、合伙人的教育信息  -->
				<h3 v-if="Eduinformation">教育信息</h3>
				<div v-if="Eduinformation" class="form-box width80">
					<el-form-item label="最高学历" class="hiEducation width110" prop="education" align="center" style="width:1000px">
						<el-radio-group v-model="form.education">
							<el-radio label="博士"></el-radio>
							<el-radio label="硕士"></el-radio>
							<el-radio label="学士"></el-radio>
							<el-radio label="高中"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item prop="school" label="学校">
						<el-input v-model="form.school" placeholder="请输入学校"></el-input>
					</el-form-item>
					<el-form-item prop="professional" label="专业">
						<el-input v-model="form.professional" placeholder="请输入专业"></el-input>
					</el-form-item>
					<el-form-item prop="graduationDate" label="毕业时间">
						<el-date-picker v-model="form.graduationDate" type="year" placeholder="选择日期">
						</el-date-picker>
					</el-form-item>
				</div>
				<!-- 创业者、投资人、合伙人 的工作信息 -->
				<h3 v-if="Workinformation">工作信息</h3>
				<div v-if="Workinformation" class="form-box basic width110 border-bottom">
					<el-form-item prop="work" label="单位">
						<el-input v-model="form.work" placeholder="请输入单位名称"></el-input>
					</el-form-item>
					<el-form-item prop="duty" label="职务">
						<el-input v-model="form.duty" placeholder="请输入职务"></el-input>
					</el-form-item>
					<el-form-item prop="rank" label="职级">
						<el-select v-model="form.rank" placeholder="请选择职级">
							<el-option label="高管" value="高管"></el-option>
							<el-option label="实际控制人" value="高管"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="city" label="所在地区 ">
						<el-input v-model="form.city" placeholder="请输入所在地区"></el-input>
					</el-form-item>
					<el-form-item prop="workbackground" label="工作经历 ">
						<el-input type="textarea" v-model="form.workbackground" placeholder="请输入工作经历"></el-input>
					</el-form-item>
				</div>

				<!-- FA注册信息 -->
				<div class="form-box basic width110" v-if="FAReginformation">
					<el-form-item prop="CorporateName" label="公司名称">
						<el-input v-model="form.CorporateName" placeholder="请输入公司名称"></el-input>
					</el-form-item>
					<el-form-item prop="operationAddress" label="运营地址">
						<el-input v-model.number="form.operationAddress" placeholder="请输入运营地址"></el-input>
					</el-form-item>
				</div>
				<!-- 基金管理公司注册信息 -->
				<div class="form-box basic width110" v-if="FundReginformation">
					<el-form-item prop="CorporateName" label="公司名称">
						<el-input v-model="form.CorporateName" placeholder="请输入公司名称"></el-input>
					</el-form-item>
					<el-form-item prop="operationAddress" label="运营地址">
						<el-input v-model.number="form.operationAddress" placeholder="请输入运营地址"></el-input>
					</el-form-item>
					<el-form-item prop="Fundmanagementscale" label="基金管理规模">
						<el-input v-model="form.Fundmanagementscale" placeholder="请输入基金管理规模"></el-input>
					</el-form-item>
					<el-form-item prop="TeamIntroduction" label="团队介绍">
						<el-input v-model.number="form.TeamIntroduction" placeholder="请输入团队介绍"></el-input>
					</el-form-item>
				</div>
				<!-- 投资机构注册信息 -->
				<div class="form-box basic width110" v-if="InvestReginformation">
					<el-form-item prop="CorporateName" label="公司名称">
						<el-input v-model="form.CorporateName" placeholder="请输入公司名称"></el-input>
					</el-form-item>
					<el-form-item prop="operationAddress" label="运营地址">
						<el-input v-model.number="form.operationAddress" placeholder="请输入运营地址"></el-input>
					</el-form-item>
					<el-form-item prop="Investmanagementscale" label="公司规模">
						<el-input v-model="form.Investmanagementscale" placeholder="情输入公司规模"></el-input>
					</el-form-item>
					<el-form-item prop="TeamIntroduction" label="团队介绍">
						<el-input v-model.number="form.TeamIntroduction" placeholder="请输入团队介绍"></el-input>
					</el-form-item>
				</div>
				<h3 v-if="RegterInformation">注册联系人</h3>
				<!-- FA、基金管理公司、投资机构 的注册联系人-->
				<div class="form-box basic width110  border-bottom" v-if="RegterInformation">
					<el-form-item prop="name" label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item prop="cellphone" label="手机">
						<el-input v-model.number="form.cellphone" placeholder="请输入手机号" maxlength="11"></el-input>
					</el-form-item>
					<el-form-item prop="Wechat" label="微信号">
						<el-input v-model="form.Wechat" placeholder="请输入微信号"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="邮箱">
						<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item prop="post" label="职务">
						<el-input v-model="form.post" placeholder="请输入职务"></el-input>
					</el-form-item>
				</div>

				<!-- 政府单位注册信息 -->
				<div class="form-box basic width110" v-if="GovReginformation">
					<el-form-item prop="govUnitName" label="单位名称">
						<el-input v-model="form.govUnitName" placeholder="请输入单位名称"></el-input>
					</el-form-item>
					<el-form-item prop="govUnitAddress" label="所在地区">
						<el-input v-model.number="form.govUnitAddress" placeholder="请输入所在地区"></el-input>
					</el-form-item>
					<el-form-item prop="Jurisdiction" label="管辖范围">
						<el-input v-model="form.Jurisdiction" placeholder="情输入管辖范围"></el-input>
					</el-form-item>
				</div>
				<h3 v-if="GovRegerinformation">注册联系人</h3>
				<!-- 政府单位注册联系人 -->
				<div class="form-box basic width110 border-bottom" v-if="GovRegerinformation">
					<el-form-item prop="name" label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item prop="department" label="部门">
						<el-input v-model.number="form.department" placeholder="请输入部门"></el-input>
					</el-form-item>
					<el-form-item prop="post" label="职务">
						<el-input v-model="form.post" placeholder="情输入职务"></el-input>
					</el-form-item>
					<el-form-item prop="cellphone" label="电话">
						<el-input v-model.number="form.cellphone" placeholder="请输入电话" maxlength="11"></el-input>
					</el-form-item>
					<el-form-item prop="Wechat" label="微信">
						<el-input v-model="form.Wechat" placeholder="请输入微信"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="邮箱">
						<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
				</div>

				<h3 v-if="Tourist">联络信息</h3>
				<!-- 游客联络信息 -->
				<div class="form-box basic width110 border-bottom" v-if="Tourist">
					<el-form-item prop="identity" label="身份">
						<el-input v-model="form.identity" placeholder="请输入身份信息"></el-input>
					</el-form-item>
					<el-form-item prop="cellphone" label="电话">
						<el-input v-model.number="form.cellphone" placeholder="请输入电话" maxlength="11"></el-input>
					</el-form-item>
					<el-form-item prop="Wechat" label="微信号">
						<el-input v-model="form.Wechat" placeholder="请输入微信号"></el-input>
					</el-form-item>
					<el-form-item prop="email" label="邮箱">
						<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item prop="tourAddress" label="所在地区">
						<el-input v-model="form.tourAddress" placeholder="请输入所在地区"></el-input>
					</el-form-item>
				</div>

				<!--特征信息-->
				<div class="inforTitle">
					<h2>特征信息</h2>
				</div>
				<!--如果角色选择为创业者，则显示-->
				<div class="ESTP" v-if="ESTP">
					<h3>创业履历</h3>
					<div class="form-box basic width150">
						<el-form-item label="是否为首次创业" prop="firstBusiness">
							<el-radio-group v-model="form.firstBusiness" style="width: 120px;">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item v-if="form.firstBusiness=='否' " label="创业经历与成果 " prop="achievement">
							<el-input type="textarea" v-model="form.achievement" placeholder="请输入创业经历与成果"></el-input>
						</el-form-item>
						<el-form-item label="工作经历 " prop="businessbackground">
							<el-input type="textarea" v-model="form.businessbackground" placeholder="请输入工作经历，如没有，填写“无”。"></el-input>
						</el-form-item>
					</div>
					<h3>当前创业情况</h3>
					<div class="form-box basic">
						<el-form-item label="创业领域" prop="entrepreneurship">
							<el-select v-model="form.entrepreneurship" placeholder="请选择创业领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="创业目标 " prop="AnnualRevenue" class="reset-input">
							<div class="target">
								每年营收：
								<el-input v-model="form.AnnualRevenue" placeholder=""></el-input><span>万元</span>
							</div>
							<div class="target">
								融资规模：
								<el-input v-model="form.financingScale" placeholder=""></el-input><span>万元</span>
							</div>
							<div class="target">
								客户规模：
								<el-input v-model="form.customerSize" placeholder=""></el-input><span>人</span>
							</div>
							<div class="target">
								企业规模：
								<el-input v-model="form.scale" placeholder=""></el-input><span>人</span>
							</div>
							<div class="target">
								其他：
								<el-input v-model="form.targetElse" placeholder=""></el-input>
							</div>
						</el-form-item>
						<el-form-item label="创业项目概述 " prop="summarize">
							<el-input type="textarea" v-model="form.summarize" placeholder="请输入创业项目概述"></el-input>
						</el-form-item>
						<el-form-item label="创业性成果 " prop="CGAnnualRevenue" class="reset-input">
							<div class="target">
								每年营收：
								<el-input v-model="form.CGAnnualRevenue" placeholder=""></el-input><span>万元</span>
							</div>
							<div class="target">
								融资规模：
								<el-input v-model="form.CGfinancingScale" placeholder=""></el-input><span>万元</span>
							</div>
							<div class="target">
								客户规模：
								<el-input v-model="form.CGcustomerSize" placeholder=""></el-input><span>人</span>
							</div>
						</el-form-item>
					</div>
					<h3>意见诉求</h3>
					<div class="form-box basic width110 border-bottom">
						<el-form-item label="资源需求" prop="resourceNeeds">
							<el-select v-model="form.resourceNeeds" placeholder="请选择资源需求">
								<el-option label="资金" value="资金"></el-option>
								<el-option label="技术" value="技术"></el-option>
								<el-option label="人才" value="人才"></el-option>
								<el-option label="孵化空间" value="孵化空间"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为投资人，则显示-->
				<div class="investor" v-if="investor">
					<h3>投资背景</h3>
					<div class="form-box basic width150">
						<el-form-item label="个人金融资产" prop="financialAssets" style="width: 100%;">
							<el-select v-model="form.financialAssets" placeholder="请选择个人金融资产">
								<el-option label="300万及以上" value="300万及以上"></el-option>
								<el-option label="近三年年均收入50万以上" value="近三年年均收入50万以上"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
							<el-input v-if="form.entrepreneurship=='其它'" placeholder="请输入其它金融资产"></el-input>
						</el-form-item>
					</div>
					<h3>投资经历</h3>
					<div class="form-box basic width150">
						<el-form-item prop="PastInvestments" label="过往投资项目">
							<el-input v-model="form.PastInvestments" placeholder="如没有，填写“无”"></el-input>
						</el-form-item>
						<el-form-item prop="CastConditionAfter" label="投后情况">
							<el-input v-model="form.CastConditionAfter" placeholder="如没有，填写“无”"></el-input>
						</el-form-item>
					</div>
					<h3>投资倾向</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="fieldInvestment" label="投资领域">
							<el-select v-model="form.fieldInvestment" placeholder="请选择投资领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="investmentStage" label="投资阶段">
							<el-input v-model="form.investmentStage" placeholder="请输入投资阶段"></el-input>
						</el-form-item>
						<el-form-item prop="otherPreferences" label="其他喜好">
							<el-input v-model="form.otherPreferences" placeholder="请输入其他喜好"></el-input>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为FA机构，则显示-->
				<div class="FAInstitution" v-if="FAInstitution">
					<h3>业务</h3>
					<div class="form-box basic width150">
						<el-form-item prop="businessDirection" label="业务方向">
							<el-select v-model="form.businessDirection" placeholder="请选择业务方向">
								<el-option label="私募融资" value="私募融资"></el-option>
								<el-option label="投资咨询" value="投资咨询"></el-option>
								<el-option label="创业咨询" value="创业咨询"></el-option>
								<el-option label="战略规划" value="战略规划"></el-option>
								<el-option label="合并收购" value="合并收购"></el-option>
								<el-option label="战略重组" value="战略重组"></el-option>
								<el-option label="IPO" value="IPO"></el-option>
								<el-option label="定向增发" value="定向增发"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="coveringDomain" label="覆盖领域">
							<el-select v-model="form.coveringDomain" placeholder="请选择覆盖领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康4"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="clientType" label="客户类型">
							<el-select v-model="form.clientType" placeholder="请选择客户类型">
								<el-option label="政府" value="政府"></el-option>
								<el-option label="高校" value="高校"></el-option>
								<el-option label="海外" value="海外"></el-option>
								<el-option label="国企" value="国企"></el-option>
								<el-option label="高新技术企业" value="高新技术企业"></el-option>
								<el-option label="500强企业" value="500强企业"></el-option>
								<el-option label="个人企业家" value="个人企业家"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="FAinvestmentStage" label="业务特色">
							<el-input v-model="form.FAinvestmentStage" placeholder="请输入业务特色"></el-input>
						</el-form-item>
						<el-form-item prop="onlinePlatform" label="有无线上对接平台">
							<el-radio-group v-model="form.onlinePlatform">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
								<el-radio label="筹备中"></el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
					<h3>成果资质</h3>
					<div class="form-box basic width150">
						<el-form-item prop="typicalCase" label="典型案例">
							<el-input v-model="form.typicalCase" placeholder="请输入典型案例"></el-input>
						</el-form-item>
						<el-form-item prop="LicenceQualification" label="牌照资质">
							<el-input v-model="form.LicenceQualification" placeholder="请输入牌照资质"></el-input>
						</el-form-item>
						<el-form-item prop="partner" label="合作伙伴">
							<el-input v-model="form.partner" placeholder="请输入合作伙伴"></el-input>
						</el-form-item>
					</div>
					<h3>诉求调研</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="fundType" label="基金类型">
							<el-select v-model="form.fundType" placeholder="请选择基金类型">
								<el-option label="科创类" value="科创类"></el-option>
								<el-option label="产业类" value="产业类"></el-option>
								<el-option label="股权类" value="股权类"></el-option>
								<el-option label="天使类" value="天使类"></el-option>
								<el-option label="VC类" value="VC类"></el-option>
								<el-option label="并购类" value="并购类"></el-option>
								<el-option label="固收类" value="固收类6"></el-option>
								<el-option label="配置型" value="配置型"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="FundPhase" label="基金阶段">
							<el-select v-model="form.FundPhase" placeholder="请选择基金阶段">
								<el-option label="天使" value="天使"></el-option>
								<el-option label="VC" value="VC"></el-option>
								<el-option label="PE" value="PE"></el-option>
								<el-option label="一级半" value="一级半"></el-option>
								<el-option label="二级" value="二级"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="businessDirections" label="业务发展方向">
							<el-select v-model="form.businessDirections" placeholder="请选择业务发展方向">
								<el-option label="私募融资" value="私募融资"></el-option>
								<el-option label="投资咨询" value="投资咨询"></el-option>
								<el-option label="创业咨询" value="创业咨询"></el-option>
								<el-option label="战略规划" value="战略规划"></el-option>
								<el-option label="合并收购" value="合并收购"></el-option>
								<el-option label="IPO" value="IPO"></el-option>
								<el-option label="定向增发" value="定向增发"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="CustomerDirection" label="客户发展方向">
							<el-select v-model="form.CustomerDirection" placeholder="请选择客户发展方向">
								<el-option label="政府" value="政府"></el-option>
								<el-option label="高校" value="高校"></el-option>
								<el-option label="海外" value="海外"></el-option>
								<el-option label="研究院" value="研究院"></el-option>
								<el-option label="国企" value="国企"></el-option>
								<el-option label="高新技术企业" value="高新技术企业"></el-option>
								<el-option label="500强企业" value="500强企业"></el-option>
								<el-option label="个人企业家" value="个人企业家"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为合伙人，则显示-->
				<div class="Partner" v-if="Partner">
					<h3>类别</h3>
					<div class="form-box basic width150">
						<el-form-item prop="NaturePartner" label="合伙人性质">
							<el-select v-model="form.NaturePartner" placeholder="请选择合伙人性质">
								<el-option label="募" value="募"></el-option>
								<el-option label="投" value="投"></el-option>
								<el-option label="管" value="管"></el-option>
								<el-option label="研" value="研"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="PartnershipMode" label="合伙人方式">
							<el-select v-model="form.PartnershipMode" placeholder="请选择合伙人方式">
								<el-option label="战略合伙人" value="战略合伙人"></el-option>
								<el-option label="在职合伙人" value="在职合伙人"></el-option>
							</el-select>
						</el-form-item>
					</div>
					<h3>资源圈</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="fieldExpertise" label="擅长领域">
							<el-select v-model="form.fieldExpertise" placeholder="请选择擅长领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它9"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="property" label="属性">
							<el-select v-model="form.property" placeholder="请选择属性">
								<el-option label="政府" value="政府"></el-option>
								<el-option label="高校" value="高校"></el-option>
								<el-option label="海外" value="海外"></el-option>
								<el-option label="研究院" value="研究院"></el-option>
								<el-option label="国企" value="国企"></el-option>
								<el-option label="高新技术企业" value="高新技术企业"></el-option>
								<el-option label="500强企业" value="500强企业"></el-option>
								<el-option label="个人企业家" value="个人企业家"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="territory" label="地域">
							<el-input v-model="form.territory" placeholder="请输入地域"></el-input>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为基金管理公司，则显示-->
				<div class="fundcompany" v-if="fundcompany">
					<h3>业务</h3>
					<div class="form-box basic width150">
						<el-form-item prop="MainGundType" label="主营基金类型">
							<el-select v-model="form.MainGundType" placeholder="请选择主营基金类型">
								<el-option label="科创类" value="科创类"></el-option>
								<el-option label="产业类" value="产业类"></el-option>
								<el-option label="股权类" value="股权类"></el-option>
								<el-option label="天使类" value="天使类"></el-option>
								<el-option label="VC类" value="VC类"></el-option>
								<el-option label="并购类" value="并购类"></el-option>
								<el-option label="固收类" value="固收类"></el-option>
								<el-option label="配置型" value="配置型"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="CFundPhase" label="基金阶段">
							<el-select v-model="form.CFundPhase" placeholder="请选择基金阶段">
								<el-option label="天使" value="天使"></el-option>
								<el-option label="VC" value="VC"></el-option>
								<el-option label="PE" value="PE"></el-option>
								<el-option label="一级半" value="一级半"></el-option>
								<el-option label="二级" value="二级"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="CfieldExpertise" label="覆盖领域">
							<el-select v-model="form.CfieldExpertise" placeholder="请选择覆盖领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="Functerritory" label="在管基金">
							<el-input v-model="form.Functerritory" placeholder="请输入在管基金"></el-input>
						</el-form-item>
						<el-form-item prop="CinvestmentStage" label="业务特色">
							<el-input v-model="form.CinvestmentStage" placeholder="请输入业务特色"></el-input>
						</el-form-item>
						<el-form-item prop="onlinePlatform" label="有无线上对接平台">
							<el-radio-group v-model="form.onlinePlatform">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
								<el-radio label="筹备中"></el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
					<h3>成果资质</h3>
					<div class="form-box basic width150">
						<el-form-item prop="TypicalExitCase" label="典型退出案例">
							<el-input v-model="form.TypicalExitCase" placeholder="请输入典型退出案例"></el-input>
						</el-form-item>
						<el-form-item prop="LicenceQualification" label="牌照资质">
							<el-input v-model="form.LicenceQualification" placeholder="请输入牌照资质"></el-input>
						</el-form-item>
						<el-form-item prop="partner" label="合作伙伴">
							<el-input v-model="form.partner" placeholder="请输入合作伙伴"></el-input>
						</el-form-item>
					</div>
					<h3>诉求调研</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="fundType" label="基金类型">
							<el-select v-model="form.fundType" placeholder="请选择基金类型">
								<el-option label="科创类" value="科创类"></el-option>
								<el-option label="产业类" value="产业类"></el-option>
								<el-option label="股权类" value="股权类"></el-option>
								<el-option label="天使类" value="天使类"></el-option>
								<el-option label="VC类" value="VC类"></el-option>
								<el-option label="并购类" value="并购类"></el-option>
								<el-option label="固收类" value="固收类"></el-option>
								<el-option label="配置型" value="配置型"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="CfieldInvestment" label="投资领域">
							<el-select v-model="form.CfieldInvestment" placeholder="请选择投资领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="Fundother" label="其它">
							<el-input v-model="form.Fundother" placeholder="请输入其它"></el-input>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为投资机构，则显示-->
				<div class="InvestmentInstitution" v-if="InvestmentInstitution">
					<h3>业务</h3>
					<div class="form-box basic width150">
						<el-form-item prop="InvestmentDirection" label="投资方向">
							<el-select v-model="form.InvestmentDirection" placeholder="请选择投资方向">
								<el-option label="科创类" value="科创类"></el-option>
								<el-option label="产业类" value="产业类"></el-option>
								<el-option label="股权类" value="股权类"></el-option>
								<el-option label="天使类" value="天使类"></el-option>
								<el-option label="VC类" value="VC类"></el-option>
								<el-option label="并购类" value="并购类"></el-option>
								<el-option label="固收类" value="固收类"></el-option>
								<el-option label="配置型" value="配置型"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="IfieldInvestment" label="投资领域">
							<el-select v-model="form.IfieldInvestment" placeholder="请选择投资领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="IinvestmentStage" label="业务特色">
							<el-input v-model="form.IinvestmentStage" placeholder="请输入业务特色"></el-input>
						</el-form-item>
						<el-form-item prop="onlinePlatform" label="有无线上对接平台">
							<el-radio-group v-model="form.onlinePlatform">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
								<el-radio label="筹备中"></el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
					<h3>成果资质</h3>
					<div class="form-box basic width150">
						<el-form-item prop="LicenceQualification" label="牌照资质">
							<el-input v-model="form.LicenceQualification" placeholder="请输入牌照资质"></el-input>
						</el-form-item>
						<el-form-item prop="TypicalExitCase" label="典型退出案例">
							<el-input v-model="form.TypicalExitCase" placeholder="请输入典型退出案例"></el-input>
						</el-form-item>
						<el-form-item prop="partner" label="合作伙伴">
							<el-input v-model="form.partner" placeholder="请输入合作伙伴"></el-input>
						</el-form-item>
					</div>
					<h3>投资诉求</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="ISInvestmentDirection" label="投资方向">
							<el-select v-model="form.ISInvestmentDirection" placeholder="请选择投资方向">
								<el-option label="科创类" value="科创类"></el-option>
								<el-option label="产业类" value="产业类"></el-option>
								<el-option label="股权类" value="股权类"></el-option>
								<el-option label="天使类" value="天使类"></el-option>
								<el-option label="VC类" value="VC类"></el-option>
								<el-option label="并购类" value="并购类"></el-option>
								<el-option label="固收类" value="固收类"></el-option>
								<el-option label="配置型" value="配置型"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="ISfieldInvestment" label="投资领域">
							<el-select v-model="form.ISfieldInvestment" placeholder="请选择投资领域">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="Isother" label="其它">
							<el-input v-model="form.Isother" placeholder="请输入其它"></el-input>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为政府，则显示-->
				<div class="government" v-if="government">
					<h3>政府资源</h3>
					<div class="form-box basic width150">
						<el-form-item prop="provideResources" label="提供资源">
							<el-input v-model="form.provideResources" placeholder="请输入提供资源"></el-input>
						</el-form-item>
						<el-form-item prop="ReferPolicy" label="参考政策">
							<el-input v-model="form.ReferPolicy" placeholder="请输入参考政策"></el-input>
						</el-form-item>
					</div>
					<h3>需求调研</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="introductionType" label="引进类型">
							<el-select v-model="form.introductionType" placeholder="请选择引进类型">
								<el-option label="人才" value="人才"></el-option>
								<el-option label="资金" value="资金"></el-option>
								<el-option label="企业" value="企业"></el-option>
								<el-option label="项目" value="项目"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="IntroductionTarget" label="引进目标">
							<el-input v-model="form.IntroductionTarget" placeholder="请输入引进目标"></el-input>
						</el-form-item>
						<el-form-item prop="DemandConditions" label="要求条件">
							<el-input v-model="form.DemandConditions" placeholder="请输入要求条件"></el-input>
						</el-form-item>
					</div>
				</div>

				<!--如果角色选择为游客，则显示-->
				<div class="visitor" v-if="visitor">
					<h3>浏览喜好</h3>
					<div class="form-box basic width150">
						<el-form-item prop="vocation" label="行业">
							<el-select v-model="form.vocation" placeholder="请选择行业">
								<el-option label="人工智能与机器人" value="人工智能与机器人"></el-option>
								<el-option label="信息电子与大数据" value="信息电子与大数据"></el-option>
								<el-option label="智能制造与工业4.0" value="智能制造与工业4.0"></el-option>
								<el-option label="环境保护与新能源" value="环境保护与新能源"></el-option>
								<el-option label="生物医疗与大健康" value="生物医疗与大健康"></el-option>
								<el-option label="绿色建筑与房地产" value="绿色建筑与房地产"></el-option>
								<el-option label="金融科技与新资管" value="金融科技与新资管"></el-option>
								<el-option label="消费升级与大文旅" value="消费升级与大文旅"></el-option>
								<el-option label="工艺美术与新媒体" value="工艺美术与新媒体"></el-option>
								<el-option label="其它" value="其它"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="direction" label="方向">
							<el-select v-model="form.direction" placeholder="请选择方向">
								<el-option label="创业" value="创业"></el-option>
								<el-option label="募资" value="募资"></el-option>
								<el-option label="投资" value="投资"></el-option>
								<el-option label="研究" value="研究"></el-option>
								<el-option label="管理" value="管理"></el-option>
								<el-option label="FA" value="FA"></el-option>
							</el-select>
						</el-form-item>
					</div>
					<h3>浏览目标</h3>
					<div class="form-box basic width150 border-bottom">
						<el-form-item prop="appeal" label="诉求">
							<el-select v-model="form.appeal" placeholder="请选择诉求">
								<el-option label="找资金" value="找资金"></el-option>
								<el-option label="找项目" value="找项目"></el-option>
								<el-option label="找人脉" value="找人脉"></el-option>
								<el-option label="找地区" value="找地区"></el-option>
								<el-option label="找平台" value="找平台"></el-option>
								<el-option label="找服务" value="找服务"></el-option>
								<el-option label="找培训" value="找培训"></el-option>
								<el-option label="其他" value="其他"></el-option>
							</el-select>
						</el-form-item>
					</div>
				</div>

				<!--增值服务-->
				<div class="inforTitle">
					<h2>增值服务</h2>
				</div>
				<h3>免费报告</h3>
				<div class="form-box basic width110 border-bottom">
					<el-form-item label="类型" prop="FreeReport">
						<el-select v-model="form.FreeReport" placeholder="请选择类型">
							<el-option label="天使" value="天使"></el-option>
							<el-option label="VC" value="VC"></el-option>
							<el-option label="PE" value="PE"></el-option>
							<el-option label="并购" value="并购"></el-option>
							<el-option label="上市" value="上市"></el-option>
							<el-option label="资产管理" value="资产管理"></el-option>
							<el-option label="其它" value="其它"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="语言" prop="language">
						<el-select v-model="form.language" placeholder="请选择语言">
							<el-option label="中文" value="中文"></el-option>
							<el-option label="英文" value="英文"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="同步接收邮箱 " prop="receiveEmail">
						<el-input v-model="form.receiveEmail" placeholder="不限个数,多个邮箱地址用逗号隔开"></el-input>
					</el-form-item>
				</div>
				<!--附件-->
				<div class="inforTitle" v-if="Enclosure">
					<h2>附件</h2>
				</div>
				<h3 v-if="Enclosure">{{EnclosureText}}</h3>
				<div class="form-box basic width110 border-bottom" v-if="Enclosure">
					<el-form-item label="附件上传 ">
						<el-input ></el-input>
					</el-form-item>
				</div>
				<el-button type="primary" @click="onSubmit('form')" v-if="Submit">提交</el-button>
				<el-button type="primary" v-else >提交</el-button>
			</el-form>
		</div>

		<towbottom></towbottom>
	</div>
</template>

<script scope>
import towtop from '@/components/testTop'
import towbottom from '@/components/testBottom'
export default {
  data () {
    // 手机号验证
    var cellphoneReg = (rule, value, callback) => {
      if (!(/^1[34578]\d{9}$/.test(value))) {
        callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      RoleId: this.$route.query.roleId,
      Phone: this.$route.query.phone,
      userType: '',
      form: {},
      Enclosure: true, // 附件
      Submit: true, // 点击提交后事件按钮隐藏
      EnclosureText: '项目成果性展示',
      ESTP: false, // 创业者 1
      investor: false, // 投资人 2
      FAInstitution: false, // FA机构 3
      Partner: false, // 合伙人 4
      fundcompany: false, // 基金管理公司 5
      InvestmentInstitution: false, // 投资机构 6
      government: false, // 政府 7
      visitor: false, // 游客 8
      regisertInf: true, // 注册信息title
      Reginformation: false, // 创业者、投资人、合伙人的注册信息
      Eduinformation: false, // 创业者、投资人、合伙人的教育信息
      Workinformation: false, // 创业者、投资人、合伙人 的工作信息
      FAReginformation: false, // FA注册信息
      FundReginformation: false, // 基金管理公司注册信息
      InvestReginformation: false, // 投资机构注册信息
      RegterInformation: false, // FA、基金管理公司、投资机构的注册联系人
      GovReginformation: false, // 政府单位注册信息
      GovRegerinformation: false, // 政府单位注册联系人
			Tourist: false, // 游客联络信息
			
      rules: {
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 10,
          message: '长度在 2 到 10 个字符',
          trigger: 'blur'
        }
        ],
        cellphone: [{
          required: true,
          trigger: 'blur',
          validator: cellphoneReg
        },
        {
          type: 'number',
          message: '手机号格式不正确'
        }

        ],
        gender: [{
          required: true,
          message: '请输入性别',
          trigger: 'change'
        }],
        Wechat: [{
          required: true,
          message: '请输入微信号',
          trigger: 'blur'
        }],
        nationality: [{
          required: true,
          message: '请输入国籍',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        },
        {
          type: 'email',
          required: true,
          message: '邮箱格式不正确',
          trigger: 'blur'
        }
        ],
        idType: [{
          required: true,
          message: '请选择证件类型',
          trigger: 'change'
        }],
        idTypeNumber: [{
          required: true,
          message: '请输入证件号',
          trigger: 'blur'
        }],
        education: [{
          required: true,
          message: '请选择最高学历',
          trigger: 'change'
        }],
        school: [{
          required: true,
          message: '请输入学校',
          trigger: 'blur'
        }],
        professional: [{
          required: true,
          message: '请输入专业',
          trigger: 'blur'
        }],
        graduationDate: [{
          required: true,
          message: '请选择毕业日期',
          trigger: 'blur'
        }],
        work: [{
          required: true,
          message: '请输入单位名称',
          trigger: 'blur'
        }],
        duty: [{
          required: true,
          message: '请输入职务',
          trigger: 'blur'
        }],
        rank: [{
          required: true,
          message: '请选择职级',
          trigger: 'change'
        }],
        city: [{
          required: true,
          message: '请输入所在地区',
          trigger: 'blur'
        }],
        firstBusiness: [{
          required: true,
          message: '请选择是否为首次创业',
          trigger: 'change'
        }],
        achievement: [{
          required: true,
          message: '请输入创业经历与成果',
          trigger: 'blur'
        }],
        entrepreneurship: [{
          required: true,
          message: '请选择创业领域',
          trigger: 'change'
        }],
        AnnualRevenue: [{
          required: true,
          message: '请输入每年营收',
          trigger: 'blur'
        }],
        financingScale: [{
          required: true,
          message: '请输入融资规模',
          trigger: 'blur'
        }],
        customerSize: [{
          required: true,
          message: '请输入客户规模',
          trigger: 'blur'
        }],
        scale: [{
          required: true,
          message: '请输入企业规模',
          trigger: 'blur'
        }],
        targetElse: [{
          required: true,
          message: '请输入其他',
          trigger: 'blur'
        }],
        summarize: [{
          required: true,
          message: '请输入创业项目概述',
          trigger: 'blur'
        }],
        CGAnnualRevenue: [{
          required: true,
          message: '请输入每年营收',
          trigger: 'blur'
        }],
        CGfinancingScale: [{
          required: true,
          message: '请输入融资规模',
          trigger: 'blur'
        }],
        CGcustomerSize: [{
          required: true,
          message: '请输入客户规模',
          trigger: 'blur'
        }],
        resourceNeeds: [{
          required: true,
          message: '请选择资源需求',
          trigger: 'change'
        }],
        // 投资人需要必选的字段
        financialAssets: [{
          required: true,
          message: '请选择个人金融资产',
          trigger: 'change'
        }],
        PastInvestments: [{
          required: true,
          message: '请输入过往投资项目',
          trigger: 'blur'
        }],
        CastConditionAfter: [{
          required: true,
          message: '请输入投后情况',
          trigger: 'blur'
        }],
        fieldInvestment: [{
          required: true,
          message: '请选择投资领域',
          trigger: 'change'
        }],
        investmentStage: [{
          required: true,
          message: '请选择投资阶段',
          trigger: 'change'
        }],
        // FA
        CorporateName: [{
          required: true,
          message: '请输入公司名称',
          trigger: 'blur'
        }],
        operationAddress: [{
          required: true,
          message: '请输入运营地址',
          trigger: 'blur'
        }],
        post: [{
          required: true,
          message: '请输入职务',
          trigger: 'blur'
        }],
        businessDirection: [{
          required: true,
          message: '请选择业务方向',
          trigger: 'change'
        }],
        coveringDomain: [{
          required: true,
          message: '请选择覆盖领域',
          trigger: 'change'
        }],
        clientType: [{
          required: true,
          message: '请选择客户类型',
          trigger: 'change'
        }],
        FAinvestmentStage: [{
          required: true,
          message: '请选择业务特色',
          trigger: 'blur'
        }],
        onlinePlatform: [{
          required: true,
          message: '请选择线上对接平台',
          trigger: 'change'
        }],
        LicenceQualification: [{
          required: true,
          message: '请输入牌照资质',
          trigger: 'blur'
        }],
        fundType: [{
          required: true,
          message: '请选择基金类型',
          trigger: 'change'
        }],
        FundPhase: [{
          required: true,
          message: '请选择基金阶段',
          trigger: 'change'
        }],
        businessDirections: [{
          required: true,
          message: '请选择业务发展方向',
          trigger: 'change'
        }],
        CustomerDirection: [{
          required: true,
          message: '请选择客户发展方向',
          trigger: 'change'
        }],
        // 合伙人
        NaturePartner: [{
          required: true,
          message: '请选择合伙人性质',
          trigger: 'change'
        }],
        PartnershipMode: [{
          required: true,
          message: '请选择合伙人方式',
          trigger: 'change'
        }],
        fieldExpertise: [{
          required: true,
          message: '请选择擅长领域',
          trigger: 'change'
        }],
        property: [{
          required: true,
          message: '请选择属性',
          trigger: 'change'
        }],
        territory: [{
          required: true,
          message: '请输入地域',
          trigger: 'blur'
        }],
        // 基金管理公司
        // CorporateName:[{
        // 	required: true,
        // 	message: '请输入公司名称',
        // 	trigger: 'blur'
        // }],
        // operationAddress:[{
        // 	required: true,
        // 	message: '请输入运营地址',
        // 	trigger: 'blur'
        // }],
        Fundmanagementscale: [{
          required: true,
          message: '请输入基金管理规模',
          trigger: 'blur'
        }],
        // TeamIntroduction:[{
        // 	required: true,
        // 	message: '请输入团队介绍',
        // 	trigger: 'blur'
        // }],
        MainGundType: [{
          required: true,
          message: '请选择主营基金类型',
          trigger: 'change'
        }],
        CFundPhase: [{
          required: true,
          message: '请选择基金阶段',
          trigger: 'change'
        }],
        CfieldExpertise: [{
          required: true,
          message: '请选择覆盖领域',
          trigger: 'change'
        }],
        Functerritory: [{
          required: true,
          message: '请输入在管基金',
          trigger: 'blur'
        }],
        CinvestmentStage: [{
          required: true,
          message: '请输入业务特色',
          trigger: 'blur'
        }],
        CfieldInvestment: [{
          required: true,
          message: '请选择投资领域',
          trigger: 'change'
        }],
        Fundother: [{
          required: true,
          message: '请输入其他',
          trigger: 'blur'
        }],
        // 投资机构
        Investmanagementscale: [{
          required: true,
          message: '请输入公司规模',
          trigger: 'blur'
        }],
        InvestmentDirection: [{
          required: true,
          message: '请选择投资方向',
          trigger: 'change'
        }],
        IfieldInvestment: [{
          required: true,
          message: '请选择投资领域',
          trigger: 'change'
        }],
        IinvestmentStage: [{
          required: true,
          message: '请输入业务特色',
          trigger: 'blur'
        }],
        ISInvestmentDirection: [{
          required: true,
          message: '请选择投资方向',
          trigger: 'change'
        }],
        ISfieldInvestment: [{
          required: true,
          message: '请选择投资领域',
          trigger: 'change'
        }],
        Isother: [{
          required: true,
          message: '请输入其他',
          trigger: 'blur'
        }],
        // 政府单位
        govUnitName: [{
          required: true,
          message: '请输入单位名称',
          trigger: 'blur'
        }],
        govUnitAddress: [{
          required: true,
          message: '请输入所在地区',
          trigger: 'blur'
        }],
        Jurisdiction: [{
          required: true,
          message: '请输入管辖范围',
          trigger: 'blur'
        }],

        department: [{
          required: true,
          message: '请输入部门',
          trigger: 'blur'
        }],
        provideResources: [{
          required: true,
          message: '请输入提供的资源',
          trigger: 'blur'
        }],
        introductionType: [{
          required: true,
          message: '请选择引进类型',
          trigger: 'change'
        }],
        IntroductionTarget: [{
          required: true,
          message: '请选择引进目标',
          trigger: 'change'
        }],
        DemandConditions: [{
          required: true,
          message: '请选择要求条件',
          trigger: 'change'
        }],
        // 游客信息
        identity: [{
          required: true,
          message: '请输入身份信息',
          trigger: 'blur'
        }],
        tourAddress: [{
          required: true,
          message: '请输入所在地区',
          trigger: 'blur'
        }],
        vocation: [{
          required: true,
          message: '请选择行业',
          trigger: 'change'
        }],
        direction: [{
          required: true,
          message: '请选择方向',
          trigger: 'change'
        }],
        appeal: [{
          required: true,
          message: '请选择诉求',
          trigger: 'change'
        }]
      }
    }
  },
  components: {
    towtop,
    towbottom
  },
  created () {
    this.getUserType()
  },
  methods: {
    getUserType () {
      var that = this
      console.log(that.RoleId)
      if (that.RoleId == 1) {
        that.UserType = '创业者'
        that.ESTP = true // 创业者 1
        that.Reginformation = true// 创业者、投资人、合伙人的注册信息
        that.Eduinformation = true// 创业者、投资人、合伙人的教育信息
        that.Workinformation = true// 创业者、投资人、合伙人的工作信息
      } else if (that.RoleId == 2) {
        that.UserType = '投资人'
        that.investor = true// 特征信息
        that.Enclosure = false// 附件
        that.Reginformation = true// 创业者、投资人、合伙人的注册信息
        that.Eduinformation = true// 创业者、投资人、合伙人的教育信息
        that.Workinformation = true// 创业者、投资人、合伙人的工作信息
      } else if (that.RoleId == 3) {
        that.FAInstitution = true// 特征信息
        that.FAReginformation = true// FA注册信息
        that.RegterInformation = true// FA、基金管理公司、投资机构 的注册联系人
        that.EnclosureText = '相关资质证明'
        that.UserType = 'FA机构'
      } else if (that.RoleId == 4) {
        that.Partner = true
        that.Enclosure = false// 附件
        that.Reginformation = true// 创业者、投资人、合伙人的注册信息
        that.Eduinformation = true// 创业者、投资人、合伙人的教育信息
        that.Workinformation = true// 创业者、投资人、合伙人的工作信息
        that.UserType = '合伙人'
      } else if (that.RoleId == 5) {
        that.fundcompany = true
        that.FundReginformation = true// 基金管理公司注册信息
        that.RegterInformation = true// FA、基金管理公司、投资机构 的注册联系人
        that.EnclosureText = '相关资质证明'
        that.UserType = '基金管理公司'
      } else if (that.RoleId == 6) {
        that.InvestmentInstitution = true
        that.InvestReginformation = true// 基金管理公司注册信息
        that.RegterInformation = true// FA、基金管理公司、投资机构 的注册联系人
        that.EnclosureText = '相关资质证明'
        that.UserType = '投资机构'
      } else if (that.RoleId == 7) {
        that.UserType = '政府'
        that.GovReginformation = true// 政府单位的注册信息
        that.GovRegerinformation = true// 政府单位的注册联系人
        that.EnclosureText = '相关政策文件'
        that.government = true
      } else {
        that.regisertInf = false
        that.Tourist = true
        that.visitor = true
        that.Enclosure = false// 附件
        that.UserType = '游客'
      }
    },
    onSubmit (formName) {
      var that = this
      let token = that.$util.getCookie('token')
      console.log(that)
      console.log(that.form.achievement)
      // if(that.form.firstBusiness == 0 && that.form.achievement==undefined) {
      // 	 callback(new Error('请输入创业经历与成果'));
      // } else {

      // }
      let data = {}
      console.log(token)
      // 角色为创业者
      if (that.RoleId == 1) {
        data = {
          'collectionId': that.RoleId, // 表示创业者
          // 基本信息-注册信息
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'gender': that.form.gender, // 性别
          'Wechat': that.form.Wechat, // 微信号
          'nationality': that.form.nationality, // 国籍
          'email': that.form.email, // 邮箱
          'nation': that.form.nation, // 民族
          'idType': that.form.idType, // 证件类型
          'maritalStatus': that.form.maritalStatus, // 婚姻状况
          'idTypeNumber': that.form.idTypeNumber, // 证件号码
          // 基本信息-教育信息
          'education': that.form.education, // 最高学历
          'school': that.form.school, // 学校
          'professional': that.form.professional, // 专业
          'graduationDate': that.form.graduationDate, // 毕业日期
          // 基本信息-工作信息
          'work': that.form.work, // 单位
          'duty': that.form.duty, // 职务
          'rank': that.form.rank, // 职级
          'city': that.form.city, // 所在地区
          'workbackground': that.form.workbackground, // 工作经历
          // 特征信息-创业履历
          'firstBusiness': that.form.firstBusiness, // 是否为首次创业
          'achievement': that.form.achievement, // 创业经历与成果
          'businessbackground': that.form.businessbackground, // 工作经历
          // 特征信息-当前创业情况
          'entrepreneurship': that.form.entrepreneurship, // 创业领域
          'AnnualRevenue': that.form.AnnualRevenue, // 每年营收
          'financingScale': that.form.financingScale, // 融资规模
          'customerSize': that.form.customerSize, // 客户规模
          'scale': that.form.scale, // 企业规模
          'targetElse': that.form.targetElse, // 其它
          'summarize': that.form.summarize, // 创业项目概述
          'CGAnnualRevenue': that.form.CGAnnualRevenue, // 每年营收
          'CGfinancingScale': that.form.CGfinancingScale, // 融资规模
          'CGcustomerSize': that.form.CGcustomerSize, // 客户规模
          // 特征信息-意见诉求
          'resourceNeeds': that.form.resourceNeeds, // 资源需求
          // 增值服务-免费报告
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }

        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })

        // that.$request.post('/collection/insertCollectionCon',data,token).then(function(res) {
        // 	console.log(res)
        // })
      } else if (that.RoleId == 2) {
        data = {
          'collectionId': that.RoleId, // 表示投资者
          // 基本信息-注册信息
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'gender': that.form.gender, // 性别
          'Wechat': that.form.Wechat, // 微信号
          'nationality': that.form.nationality, // 国籍
          'email': that.form.email, // 邮箱
          'nation': that.form.nation, // 民族
          'idType': that.form.idType, // 证件类型
          'maritalStatus': that.form.maritalStatus, // 婚姻状况
          'idTypeNumber': that.form.idTypeNumber, // 证件号码
          // 基本信息-教育信息
          'education': that.form.education, // 最高学历
          'school': that.form.school, // 学校
          'professional': that.form.professional, // 专业
          'graduationDate': that.form.graduationDate, // 毕业日期
          // 基本信息-工作信息
          'work': that.form.work, // 单位
          'duty': that.form.duty, // 职务
          'rank': that.form.rank, // 职级
          'city': that.form.city, // 所在地区
          'workbackground': that.form.workbackground, // 工作经历
          // 特征信息-投资背景
          'financialAssets': that.form.financialAssets, // 个人金融资产
          // 特征信息-投资经历
          'PastInvestments': that.form.PastInvestments, // 过往投资项目
          'CastConditionAfter': that.form.CastConditionAfter, // 投后情况
          // 特征信息-投资倾向
          'fieldInvestment': that.form.fieldInvestment, // 投资领域
          'investmentStage': that.form.investmentStage, // 投资阶段
          'otherPreferences': that.form.otherPreferences, // 其他喜好
          // 增值服务
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }

        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 3) {
        data = {
          'collectionId': that.RoleId, // 表示FA机构
          // 基本信息-注册信息
          'CorporateName': that.form.CorporateName, // 公司名称
          'operationAddress': that.form.operationAddress, // 运营地址
          // 基本信息-注册联系人
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'Wechat': that.form.Wechat, // 微信号
          'email': that.form.email, // 邮箱
          'post': that.form.post, // 职务
          // 特征信息-业务
          'businessDirection': that.form.businessDirection, // 业务方向
          'coveringDomain': that.form.coveringDomain, // 覆盖领域
          'clientType': that.form.clientType, // 客户类型
          'FAinvestmentStage': that.form.FAinvestmentStage, // 业务特色
          'onlinePlatform': that.form.onlinePlatform, // 有无线上对接平台
          // 特征信息-成果资质
          'typicalCase': that.form.typicalCase, // 典型案例
          'LicenceQualification': that.form.LicenceQualification, // 牌照资质
          'partner': that.form.partner, // 合作伙伴
          // 特征信息-诉求调研
          'fundType': that.form.fundType, // 基金类型
          'FundPhase': that.form.FundPhase, // 基金阶段
          'businessDirections': that.form.businessDirections, // 业务发展方向
          'CustomerDirection': that.form.CustomerDirection, // 客户发展方向
          // 增值服务
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }

        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 4) {
        data = {
          'collectionId': that.RoleId, // 表示合伙人
          // 基本信息-注册信息
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'gender': that.form.gender, // 性别
          'Wechat': that.form.Wechat, // 微信号
          'nationality': that.form.nationality, // 国籍
          'email': that.form.email, // 邮箱
          'nation': that.form.nation, // 民族
          'idType': that.form.idType, // 证件类型
          'maritalStatus': that.form.maritalStatus, // 婚姻状况
          'idTypeNumber': that.form.idTypeNumber, // 证件号码
          // 基本信息-教育信息
          'education': that.form.education, // 最高学历
          'school': that.form.school, // 学校
          'professional': that.form.professional, // 专业
          'graduationDate': that.form.graduationDate, // 毕业日期
          // 基本信息-工作信息
          'work': that.form.work, // 单位
          'duty': that.form.duty, // 职务
          'rank': that.form.rank, // 职级
          'city': that.form.city, // 所在地区
          'workbackground': that.form.workbackground, // 工作经历
          // 特征信息-类别
          'NaturePartner': that.form.NaturePartner, // 合伙人性质
          'PartnershipMode': that.form.PartnershipMode, // 合伙人方式
          // 特征信息-资源圈
          'fieldExpertise': that.form.fieldExpertise, // 擅长领域
          'property': that.form.property, // 属性
          'territory': that.form.territory, // 地域
          // 增值服务
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }

        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 5) {
        data = {
          'collectionId': that.RoleId, // 表示基金管理公司
          // 基本信息-注册信息
          'CorporateName': that.form.CorporateName, // 公司名称
          'operationAddress': that.form.operationAddress, // 运营地址
          'Fundmanagementscale': that.form.Fundmanagementscale, // 基金管理规模
          'TeamIntroduction': that.form.TeamIntroduction, // 团队介绍
          // 基本信息-注册联系人
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'Wechat': that.form.Wechat, // 微信号
          'email': that.form.email, // 邮箱
          'post': that.form.post, // 职务
          // 特征信息-业务
          'MainGundType': that.form.MainGundType, // 主营基金类型
          'CFundPhase': that.form.CFundPhase, // 基金阶段
          'CfieldExpertise': that.form.CfieldExpertise, // 覆盖领域
          'Functerritory': that.form.Functerritory, // 在管基金
          'CinvestmentStage': that.form.CinvestmentStage, // 业务特色
          'onlinePlatform': that.form.onlinePlatform, // 有无线上对接平台
          // 特征信息-成果资质
          'TypicalExitCase': that.form.TypicalExitCase, // 典型退出案例
          'LicenceQualification': that.form.LicenceQualification, // 牌照资质
          'partner': that.form.partner, // 合作伙伴
          // 特征信息-诉求调研
          'fundType': that.form.fundType, // 基金类型
          'CfieldInvestment': that.form.CfieldInvestment, // 投资领域
          'Fundother': that.form.Fundother, // 其他
          // 增值服务
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }

        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 6) {
        data = {
          'collectionId': that.RoleId, // 表示投资机构
          // 基本信息-注册信息
          'CorporateName': that.form.CorporateName, // 公司名称
          'operationAddress': that.form.operationAddress, // 运营地址
          'Investmanagementscale': that.form.Investmanagementscale, // 基金管理规模
          'TeamIntroduction': that.form.TeamIntroduction, // 团队介绍
          // 基本信息-注册联系人
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'Wechat': that.form.Wechat, // 微信号
          'email': that.form.email, // 邮箱
          'post': that.form.post, // 职务
          // 特征信息-业务
          'InvestmentDirection': that.form.InvestmentDirection, // 投资方向
          'IfieldInvestment': that.form.IfieldInvestment, // 投资领域
          'IinvestmentStage': that.form.IinvestmentStage, // 业务特色
          'onlinePlatform': that.form.onlinePlatform, // 有无线上对接平台
          // 特征信息-成果资质
          'TypicalExitCase': that.form.TypicalExitCase, // 典型退出案例
          'LicenceQualification': that.form.LicenceQualification, // 牌照资质
          'partner': that.form.partner, // 合作伙伴
          // 特征信息-投资诉求
          'ISInvestmentDirection': that.form.ISInvestmentDirection, // 投资方向
          'ISfieldInvestment': that.form.ISfieldInvestment, // 投资领域
          'Isother': that.form.Isother, // 其他
          // 增值服务-免费
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }
        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 7) {
        data = {
          'collectionId': that.RoleId, // 表示政府
          // 基本信息-注册信息
          'govUnitName': that.form.govUnitName, // 单位名称
          'govUnitAddress': that.form.govUnitAddress, // 所在地区
          'Jurisdiction': that.form.Jurisdiction, // 管辖范围
          // 基本信息-注册联系人
          'name': that.form.name, // 姓名
          'cellphone': that.form.cellphone, // 手机号
          'Wechat': that.form.Wechat, // 微信号
          'email': that.form.email, // 邮箱
          'post': that.form.post, // 职务
          'department': that.form.department, // 部门
          // 特征信息-政府资源
          'provideResources': that.form.provideResources, // 提供资源
          'ReferPolicy': that.form.ReferPolicy, // 参考政策
          // 特征信息-需求调研
          'introductionType': that.form.introductionType, // 引进类型
          'IntroductionTarget': that.form.IntroductionTarget, // 引进目标
          'DemandConditions': that.form.DemandConditions, // 要求条件
          // 增值服务-免费
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }
        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (that.RoleId == 8) {
        data = {
          'collectionId': that.RoleId, // 表示游客
          // 基本信息-联络信息
          'identity': that.form.identity, // 身份
          'cellphone': that.form.cellphone, // 手机号
          'Wechat': that.form.Wechat, // 微信号
          'email': that.form.email, // 邮箱
          'tourAddress': that.form.tourAddress, // 部门
          // 特征信息-浏览喜好
          'vocation': that.form.vocation, // 行业
          'direction': that.form.direction, // 方向
          // 特征信息-浏览目标
          'appeal': that.form.appeal, // 诉求
          // 增值服务-免费
          'FreeReport': that.form.FreeReport, // 免费报告类型
          'language': that.form.language, // 免费报告语言
          'receiveEmail': that.form.receiveEmail // 同步接收邮箱
        }
        console.log(JSON.stringify(data))
        that.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
      that.Submit = false
      this.$request.post('collection/insertCollectionCon', data, token).then(res => {
        if (res.data.success) {
          that.$router.push({
            path: '/personInfo'
          })
        }
      }).catch(error => {
        console.log(error)
      })
      // this.$router.push({
      //   path: '/collection/insertCollectionCon',
      //   query: {
      //     title: data
      //   }
      // })
    }
  }
}
</script>
<!--Element-ui重置样式-->
<style>
	.el-input--small .el-input__inner {
		height: 44px;
		line-height: 44px;
	}

	.el-form-item--small .el-form-item__content,
	.el-form-item--small .el-form-item__label {
		line-height: 44px;
	}

	.width80 .el-form-item__label {
		width: 80px;
	}

	.width110 .el-form-item__label {
		width: 110px;
	}

	.width150 .el-form-item__label {
		width: 150px;
	}

	.form-box .el-input__inner {
		width: 240px;
	}

	.basic .el-form-item {
		margin-right: 50px;
	}

	.hiEducation .el-radio__label {
		font-size: 16px;
	}

	.hiEducation .el-form-item__label {
		font-size: 16px;
	}

	.basic .el-textarea__inner {
		width: 674px;
		height: 150px;
	}

	.form-box .reset-input .el-input__inner {
		width: 140px;
	}

	.reset-input .el-input {
		width: 140px;
	}

	.reset-input .el-form-item__content {
		width: 700px;
	}

	.authentication .el-button--small {
		padding: 14px 117px;
		margin: 10px auto 60px;
		display: block;
		font-size: 16px;
	}

	.authentication .el-button--primary {
		background-color: #0546B4;
		border-color: #0546B4;
	}

	.multiInput {
		margin-right: 10px !important;
	}

	.multiInput .el-form-item__label {
		width: 110px !important;
		font-size: 14px;
		font-weight: normal;
	}
</style>
<!--页面样式-->
<style scoped>
	.border-bottom {
		border-bottom: none !important;
	}

	.container {
		width: 1000px;
	}

	.headerBg {
		background: #fff;
		box-shadow: 0 3px 11px 0 rgba(51, 51, 51, 0.50);
	}

	.back {
		float: right;
		line-height: 55px;
		color: #0546B4;
		font-size: 18px;
	}

	.information {
		margin-top: 135px;
		margin-bottom: 44px;
	}

	.user {
		display: flex;
		margin-bottom: 30px;
	}

	.user img {
		width: 70px;
		height: 70px;
		margin-right: 20px;
	}

	.user p {
		line-height: 70px;
		font-size: 20px;
	}

	.information h2 {
		font-size: 26px;
		display: inline-block;
	}

	.information span {
		font-size: 16px;
		margin-left: 20px;
	}

	.inforTitle {
		width: 1000px;
		border-bottom: 1px solid #D8D8D8;
		height: 38px;
	}

	.inforTitle h2 {
		font-size: 20px;
		line-height: 38px;
		font-weight: 700;
	}

	.authentication .container .basic {
		padding: 0 0 10px 110px;
	}

	.authentication .container .form-box {
		width: 1000px;
		box-sizing: border-box;
		border-bottom: 1px dashed #ccc;
	}

	.authentication .container h3 {
		font-size: 16px;
		color: #333;
		margin: 40px 0 20px 70px;
	}

	label {
		font-weight: normal;
	}

	h3 {
		font-weight: 700;
	}

	.basic form {
		margin-left: 130px;
	}

	.target {
		display: inline-block;
		position: relative;
		margin-right: 16px;
		margin-bottom: 10px;
	}

	.target span {
		position: absolute;
		right: 10px;
	}

	.reset-input .target:nth-child(5) {
		padding-left: 29px;
	}

	.authentication .container .basic p {
		display: inline-block;
		height: 44px;
		line-height: 44px;
		width: 118px;
		text-align: right;
		font-weight: 700;
		color: #606266
	}
</style>
