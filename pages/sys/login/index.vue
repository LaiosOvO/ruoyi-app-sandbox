<template>
	<view>
		login page
		<u-button type="primary" text="确定"></u-button>

		<svg class="icon svg-icon myicon gticon " aria-hidden="true">
			<use xlink:href="#icon-xiangsu_tuzi"></use>
		</svg>


		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-xiangsu_tuzi3"></use>
		</svg>

		      <div>
		        <span>{{$t('main.message')}}</span>
		      </div>

		<button>goto home</button>
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

<style>
	i {
		width: 20px;
		height: 20px;
	}
</style>