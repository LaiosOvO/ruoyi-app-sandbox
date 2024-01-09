<template>
	<view class="wrap">
		<view class="search">
			<u-search v-model="keywords" @custom="search" @search="search"></u-search>
		</view>

		<scroll-view class="scroll-list" scroll-y="true">
			<view class="uni-list">

				<view class="uni-list-cell">
					<div class="uni-media-list">
						<view class="article-avatar">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsufeng_xiaoxi"></use>
							</svg>
						</view>

						<view class="uni-media-list-body">
							<div class="media-body-top">
								<div>通知公告</div>
								<div class="inner-time">20:20</div>
							</div>

							<div class="media-body-bottom">关于元旦放假的通知</div>
						</view>
					</div>
				</view>

				<view class="uni-list-cell">
					<div class="uni-media-list">
						<view class="article-avatar">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsufeng_feidie"></use>
							</svg>
						</view>

						<view class="uni-media-list-body">
							<div class="media-body-top">
								<div>新闻动态</div>
								<div class="inner-time">20:20</div>
							</div>

							<div class="media-body-bottom">关于元旦放假的通知</div>
						</view>
					</div>
				</view>

				<view class="uni-list-cell">
					<div class="uni-media-list">
						<view class="article-avatar">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsufeng_xunzhang"></use>
							</svg>
						</view>

						<view class="uni-media-list-body">
							<div class="media-body-top">
								<div>日常办公</div>
								<div class="inner-time">20:20</div>
							</div>

							<div class="media-body-bottom">关于元旦放假的通知</div>
						</view>
					</div>
				</view>

				<view class="uni-list-cell">
					<div class="uni-media-list">
						<view class="article-avatar">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsufeng_youxiang"></use>
							</svg>
						</view>

						<view class="uni-media-list-body">
							<div class="media-body-top">
								<div>网上报销</div>
								<div class="inner-time">20:20</div>
							</div>

							<div class="media-body-bottom">关于元旦放假的通知</div>
						</view>
					</div>
				</view>

				<view class="uni-list-cell">
					<div class="uni-media-list">
						<view class="article-avatar">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsufeng_yiwanmian"></use>
							</svg>
						</view>

						<view class="uni-media-list-body">
							<div class="media-body-top">
								<div>我的邮件</div>
								<div class="inner-time">20:20</div>
							</div>

							<div class="media-body-bottom">关于元旦放假的通知</div>
						</view>
					</div>
				</view>

			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "index.scss";

	.search {
		height: 60rpx;
	}

	.uni-media-list {
		display: flex;
		flex: 1;
		gap: 20rpx;

		box-sizing: border-box;
		padding-bottom: 15rpx;
		padding-left: 15rpx;
		padding-top: 15rpx;

	}

	.uni-media-list :nth-child(2) {
		flex-grow: 1;
	}

	.article-avatar {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.uni-media-list-body {
		display: flex;
		flex: 1 1 1;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;

		padding-left: 12rpx;
	}

	.media-body-top {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		box-sizing: border-box;


		height: 40rpx;

		.inner-time {
			float: right;
		}

	}



	.media-body-bottom {}
</style>