<template>
	<view class="wrap">
		<view class="search">
			<u-search v-model="keywords" @custom="search" @search="search"></u-search>
		</view>

		<u-index-list :index-list="indexList">
			<template v-for="(item, index) in itemArr">
				<!-- #ifdef APP-NVUE -->
				<u-index-anchor :text="indexList[index]"></u-index-anchor>
				<!-- #endif -->
				<u-index-item>
					<!-- #ifndef APP-NVUE -->
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<view class="list-cell" v-for="(cell, index) in item">
						{{cell}}
					</view>
				</u-index-item>
			</template>
		</u-index-list>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: ["A", "B", "C","D"],
				itemArr: [
					['列表A1', '列表A2', '列表A3'],
					['列表B1', '列表B2', '列表B3'],
					['列表C1', '列表C2', '列表C3'],
					['列表C1', '列表C2', '列表C3']
				]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {

		}
	}
</script>

<style>

</style>