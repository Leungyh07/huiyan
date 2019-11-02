<template>
	<header id="header">
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
export default {
	name : 'Header',
	props : { //组件间的通信
		title : {
			type : String,
			// 默认为辉眼电影
			default : '辉眼电影'
		}
	}
}
</script>

<style scoped>
#header{width:100%; height:45px; color: #fff; background: #03009F; border-bottom: 1px solid #0065CC; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 45px; font-weight: normal; font-family: 'YouYuan'}
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>