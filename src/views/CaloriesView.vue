<script>
export default {
  name: "CaloriesView",
  data() {
    return {
      message: ''
    }
  }
}
</script>

<template>
	<div class="content">
		<div class="calorie-input">
			<h2>Enter Calorie Goal</h2>
			<input v-model="message" placeholder="Ex. 1500" />
		</div>

		<section class="info-col">
				<div class="food-item">
					<h2>Breakfast</h2>
					<input v-model="breakfast" placeholder="Ex. 1500" />

					<div>
						<h3>Protein: </h3>
						<h3>Carb: </h3>
						<h3>Fats: </h3>
					</div>

					<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
				</div>
				<div class="food-item">
					<h2>Lunch</h2>
					<input v-model="lunch" placeholder="Ex. 1500" />
					
					<div>
						<h3>Protein: </h3>
						<h3>Carb: </h3>
						<h3>Fats: </h3>
					</div>

					<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
				</div>
				<div class="food-item">
					<h2>Dinner</h2>
					<input v-model="dinner" placeholder="Ex. 1500" />
					
					<div>
						<h3>Protein: </h3>
						<h3>Carb: </h3>
						<h3>Fats: </h3>
					</div>

					<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
				</div>
			</section>
	</div>
</template>

<style>
	.calorie-input{
		text-align: center;
		border: 1px solid black;
	}
	

	.food-item img{
		height: 100px;
	}
</style>


