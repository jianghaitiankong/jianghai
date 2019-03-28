import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import about from '@/pages/about'
import news from '@/pages/news'
import login from '@/pages/login'
import team from '@/pages/team'
import contact from '@/pages/contact'
import join from '@/pages/join'
import register from '@/pages/register'
import forgetPsw from '@/pages/forgetPsw'
import changePsw from '@/pages/changePsw'
import newsDetails from '@/pages/newsDetails'
import business from '@/pages/business'
import product from '@/pages/product'
import productDetails from '@/pages/productDetails'
import schoolfellow from '@/pages/schoolfellow'
import personInfo from '@/pages/personInfo'
import authentication from '@/pages/authentication'
import video from '@/pages/video'
import rules from '@/pages/rules'
Vue.use(Router)

export default new Router({
	// mode: 'history',
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	},
	routes: [{
			path: '/index',
			component: index,
			meta: {
				title: '江海天空'
			}
		},
		{
			path: '/',
			redirect: '/index',
			meta: {
				title: '江海天空'
			}
		},
		{
			path: '/about',
			component: about,
			meta: {
				title: '关于我们-江海天空'
			}
		},
		{
			path: '/news',
			component: news,
			meta: {
				title: '新闻动态-江海天空'
			}
		},
		{
			path: '/login',
			component: login,
			meta: {
				title: '登录社区-江海天空'
			}
		},
		{
			path: '/team',
			component: team,
			meta: {
				title: '团队介绍-江海天空'
			}
		},
		{
			path: '/contact',
			component: contact,
			meta: {
				title: '联系我们-江海天空'
			}
		},
		{
			path: '/join',
			component: join,
			meta: {
				title: '加入我们-江海天空'
			}
		},
		{
			path: '/register',
			component: register,
			meta: {
				title: '注册-江海天空'
			}
		},
		{
			path: '/personInfo',
			component: personInfo,
			meta: {
				title: '个人信息-江海天空'
			}
		},
		{
			path: '/forgetPsw',
			component: forgetPsw,
			meta: {
				title: '忘记密码-江海天空'
			}
		},
		{
			path: '/changePsw',
			component: changePsw,
			meta: {
				title: '修改密码-江海天空'
			}
		},
		{
			path: '/authentication',
			component: authentication,
			meta: {
				title: '注册-江海天空'
			}
		}, 
		{
			path: '/newsDetails',
			component: newsDetails,
			meta: {
				title: '新闻中心-江海天空'
			}
		},
		{
			path: '/business',
			component: business,
			meta: {
				title: '江海业务-江海天空'
			}
		},
		{
			path: '/schoolfellow',
			component: schoolfellow,
			meta: {
				title: '江海英才校友总会-江海天空'
			}
		},
		{
			path: '/product',
			component: product
		},
		{
			path: '/productDetails',
			component: productDetails
		},
		{
			path: '/video',
			component: video,
			meta: {
				title: '媒体中心'
			}
		},
		{
			path: '/rules',
			component: rules
		},
	]
})