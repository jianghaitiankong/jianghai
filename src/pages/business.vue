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

			<div class="newContent fadeInUp animated">
				<p>{{content}}</p>
			</div>
			<ul class="fenlei list-unstyled text-center list-inline fadeInUp animated">
				<li @click="tab(index,item)" v-for="(item,index) in businessList">
					<a :class="{active : index===curId}" class="m2menu_a">{{item.businessTitle}}</a>
				</li>
			</ul>
			<div v-show="index===curId" v-for="(content, index) in businessList">
				<div class="flexCenter">
					<div class="title fadeInUp animated">
						<h3>{{content.businessTitle}}</h3>
						<p>{{content.businessTitleEng}}</p>
					</div>
				</div>
				<div class="newContent fadeInUp animated">
					<p>{{content.businessContent}}</p>
				</div>
			</div>
			<div class="imgConte" v-show="xiaoyou">
				<div class="hover">
					<img class="xiaoyou" src="../../static/images/xiaoyou.png" />
					<img class="xiaoyouHover pulse animated" src="../../static/images/xiaoyouHover.png" />
				</div>
				<img src="../../static/images/xiaoyou1.png" />
			</div>
			<a v-show="id!=15" class="serCon3More" @click="skip()">进入{{nextTitle}}</a>
		</div>
		<towbottom></towbottom>
	</div>

</template>

<script>
import towtop from '@/components/testTop'
import towbottom from '@/components/testBottom'
export default {
  data () {
    return {
      id: this.$route.query.id,
      title: this.$route.query.title,
      engTitle: this.$route.query.engTitle,
      content: this.$route.query.content,
      businessList: [],
      curId: 0,
      nextTitle: '',
			xiaoyou: false,
			token: sessionStorage.getItem("token"),
    }
  },
  created () {
    this.getData()
  },
  components: {
    towtop,
    towbottom
  },
  methods: {
    getData () {
      var that = this
      var data = {
        'curPage': 1,
        'pageSize': 20,
        'business': that.title
      }
      that.$request.post('bus/selectBusByName', data, that.token).then(res => {
        console.log(res.data.list)
        that.businessList = res.data.list
        that.nextTitle = res.data.list[0].businessTitle
      }).catch(err => {
        //					console.log(error)
      })
    },
    tab (index, item) {
      var that = this
      that.curId = index
      if (item.businessTitle == '江海英才校友总会') {
        that.xiaoyou = true
      }
      that.nextTitle = item.businessTitle
    },
    // 跳转
    skip () {
      var that = this
      if (that.id == 12) {
        that.$router.push({
          path: '/product',
          query: {
            title: that.title
          }
        })
      } else {
        that.$router.push({
          path: '/product',
          query: {
            title: that.nextTitle
          }
        })
      }
    }
  }

}
</script>

<style>
	.businessDetil {
		margin-top: 60px;
	}

	.imgConte {
		display: flex;
		margin-top: 40px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		flex-flow: column;
		position: relative;
	}

	.imgConte img:last-child {
		margin-top: 40px;
	}

	.xiaoyou {
		width: 800px;
		height: 459px;
	}

	.hover .xiaoyouHover {
		position: absolute;
		top: 300px;
		right: 0;
		display: none;
	}

	.hover:hover .xiaoyouHover {
		display: block;
	}
</style>
