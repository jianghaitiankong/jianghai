<template>
	<div class="newsList" style="margin-top: 160px;">
		<towtop></towtop>
		<div class="container" style="min-height: 735px;">
			<div class="newTitle">
				{{title}}
			</div>
			<span class="newsTime">{{time}}</span>
			<div class="newContent">
				<p style="text-align: left;">{{content}}</p>
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
				title: this.$route.query.title,
				time: this.$route.query.time,
				content: this.$route.query.content,
			}
			
		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			
		},

	}
</script>

<style>
	.newsList{text-align: center;}
	.newTitle{font-size: 24px;}
	.newsTime{margin-bottom:30px;display: block;}
	.newContent p {text-indent: 2em;line-height: 22px;text-align: left;}
</style>