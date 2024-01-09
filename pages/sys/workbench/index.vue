<template>
	<view class="wrap">
		<u-swiper :height="270" :list="list1" :title="false" @click="imgListClick"></u-swiper>

		<view class="workbench-title">常用应用</view>
		<view class="toolbar">
			<u-grid :col="4" :border="false">
				<u-grid-item :index="0" @click="navTo('')">
					<view class="home-icon icon-color01">
						<i class="iconfont icon-qingjia"></i>
					</view>
					<view class="grid-text">请假申请</view>
				</u-grid-item>
			</u-grid>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [
					'/static/laios/banner/banner01.jpg',
					'/static/laios/banner/banner02.jpg',
					'/static/laios/banner/banner03.jpg',
				],
				OffenApp: [

				]
			}
		},
		methods: {
			imgListClick(index) {
				console.log(`点击了第 ${ index + 1 }`)
			},
			navTo(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
	@import 'index.scss';

	.workbench-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		padding: 15px 30rpx;
	}
</style>