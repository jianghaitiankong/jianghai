import Vue from 'vue'
import Router from 'vue-router'

const index = resolve =>{
	import ( '@/pages/index.vue').then(module =>{
		resolve(module)
	})
}
const about = resolve =>{
	import ( '@/pages/about.vue').then(module =>{
		resolve(module)
	})
}
const news = resolve =>{
	import ( '@/pages/news.vue').then(module =>{
		resolve(module)
	})
}
const login = resolve =>{
	import ( '@/pages/login.vue').then(module =>{
		resolve(module)
	})
}
const team = resolve =>{
	import ( '@/pages/team.vue').then(module =>{
		resolve(module)
	})
}
const contact = resolve =>{
	import ( '@/pages/contact.vue').then(module =>{
		resolve(module)
	})
}
const join = resolve =>{
	import ( '@/pages/join.vue').then(module =>{
		resolve(module)
	})
}
const register = resolve =>{
	import ( '@/pages/register.vue').then(module =>{
		resolve(module)
	})
}
const forgetPsw = resolve =>{
	import ( '@/pages/forgetPsw.vue').then(module =>{
		resolve(module)
	})
}
const changePsw = resolve =>{
	import ( '@/pages/changePsw.vue').then(module =>{
		resolve(module)
	})
}
const newsDetails = resolve =>{
	import ( '@/pages/newsDetails.vue').then(module =>{
		resolve(module)
	})
}
const business = resolve =>{
	import ( '@/pages/business.vue').then(module =>{
		resolve(module)
	})
}
const product = resolve =>{
	import ( '@/pages/product.vue').then(module =>{
		resolve(module)
	})
}
const productDetails = resolve =>{
	import ( '@/pages/productDetails.vue').then(module =>{
		resolve(module)
	})
}
const schoolfellow = resolve =>{
	import ( '@/pages/schoolfellow.vue').then(module =>{
		resolve(module)
	})
}
const personInfo = resolve =>{
	import ( '@/pages/personInfo.vue').then(module =>{
		resolve(module)
	})
}
const authentication = resolve =>{
	import ( '@/pages/authentication.vue').then(module =>{
		resolve(module)
	})
}
const video = resolve =>{
	import ( '@/pages/video.vue').then(module =>{
		resolve(module)
	})
}
const rules = resolve =>{
	import ( '@/pages/rules.vue').then(module =>{
		resolve(module)
	})
}
import { resolve } from 'url';

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