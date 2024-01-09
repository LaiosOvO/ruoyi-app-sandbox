<template>
	<view class="wrap">

		<view class="header">
			<view class="userinfo">
				<view class="image">
					<u-avatar size="85rpx" :src="src"></u-avatar>
				</view>

				<view class="desc">
					<view class="username">管理员</view>
					<view class="usercode">普通会员</view>
				</view>
			</view>

			<view class="userinfo-toolbok">
				<u-row gutter="16" justify="space-between">
					<u-col span="4" text-align="center" class="inner">
						<view class="inner2">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsu_jinbi1"></use>
							</svg>
						</view>
						<view> 余额 </view>
					</u-col>

					<u-col span="4" text-align="center" class="inner">
						<view class="inner2">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsu_jinbi"></use>
							</svg>
						</view>
						<view> 充值 </view>
					</u-col>

					<u-col span="4" text-align="center" class="inner">
						<view class="inner2">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiangsu_jinbi2"></use>
							</svg>
						</view>
						<view> 余额明细 </view>
					</u-col>
				</u-row>
			</view>

		</view>

		<view class="list">
			<view>
				<u-cell-group>
					<u-gap height="20" bg-color="#f5f5f5"></u-gap>

					<u-cell icon="setting-fill" title="个人设置"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
					<u-gap height="20" bg-color="#f5f5f5"></u-gap>
					<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
				</u-cell-group>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '/static/laios/avatar/avatar.webp',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import 'index.scss';

	.header {
		height: 350rpx;
		background-color: rgb(56, 77, 157);
		margin-bottom: 20rpx;
		color: white;
		font-weight: 400;
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;

		padding-top: 30rpx;
		flex: 1 1;
	}

	.desc {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 20rpx;
		margin-top: 30rpx;
		flex: 1 1;
	}

	.username {
		font-size: 30rpx;
	}

	.usercode {
		font-size: 30rpx;
		border-radius: 40rpx;
	}


	.userinfo-toolbok {
		margin-top: 20rpx;
	}

	.icon {
		height: 30rpx;
		width: 30rpx;
	}

	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: auto;
	}

	.inner2 {
		display: flexbox;
	}

	svg {
		height: 20rpx;

	}

	.list {
		height: 800rpx;
	}
</style>