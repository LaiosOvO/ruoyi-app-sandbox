<template>
	<view class="wrap">
		<u-swiper class="banner" :height="120" :list="list1" :title="false" @click="imgListClick"></u-swiper>

		<view class="toolbar">
		<view class="workbench-title">常用应用</view>
			<u-grid :border="true" col="4" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-daishenhe"></use>
					</svg>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			
			<view class="workbench-title">日常办公</view>
			<view class="toolbar">
				<u-grid :border="true" col="4" @click="click">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-daishenhe"></use>
						</svg>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
			
			
			<view class="workbench-title">财务报销</view>
			<view class="toolbar">
				<u-grid :border="true" col="4" @click="click">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-daishenhe"></use>
						</svg>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
			
			<u-divider>已经到底了</u-divider>
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
				baseList: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'star',
						title: '星星'
					},
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

<style lang="scss">
	@import 'index.scss';
	
	.grid-text{
		font-weight: 550;

	}
	.workbench-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		padding: 15px 30rpx;
		margin-bottom: 10rpx;
		margin-top: 20rpx;
		background-color: hsl(0, 0%, 95%);
	}

	.home-icon {
		position: relative;

		.u-badge {
			top: -8px !important;
			right: -8px !important;
			padding: 1px 4px !important;
		}
	}
</style>