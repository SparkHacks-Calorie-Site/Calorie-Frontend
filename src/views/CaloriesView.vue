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

				<div class="macro-list">
					<h3>Protein: </h3>
					<h3>Carbs: </h3>
					<h3>Fats: </h3>
				</div>

				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="food-item">
				<h2>Lunch</h2>
				<input v-model="lunch" placeholder="Ex. 1500" />

				<div class="macro-list">
					<h3>Protein: </h3>
					<h3>Carbs: </h3>
					<h3>Fats: </h3>
				</div>

				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="food-item">
				<h2>Dinner</h2>
				<input v-model="dinner" placeholder="Ex. 1500" />

				<div class="macro-list">
					<h3>Protein: </h3>
					<h3>Carbs: </h3>
					<h3>Fats: </h3>
				</div>

				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
		</section>

		<div class="wrapper">
			<div class="progress-bar">
				<span class="progress-bar-fill" style="width: 50%;"></span>
			</div>
		</div>

		<div class="calorie-output">
			<h2>You're reached X% of your goal.</h2>
		</div>

		<section class="info-col">
			<div class="calorie-graph">
				<img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg">
			</div>
			<div class="macro-stats">
				<div class="macro-list">
					<h3>Protein: </h3>
					<h3>Carbs: </h3>
					<h3>Fats: </h3>
				</div>
				<h3>Add some more supurfluous bullshit over here. Wow I love typing man typing is so cool Wow</h3>
			</div>
		</section>

	</div>
</template>

<style>

/* /////////////////////////////////////////////////////////////// */
/* Calore Input */

.calorie-input {
	text-align: center;
	border: 1px solid black;
}

/* /////////////////////////////////////////////////////////////// */
/* Food Item List */

.food-item {
	text-align: center;
	border: black 1px solid;
}

.food-item img {
	height: 100px;
}

.macro-list {
	max-width: 60%;
	margin: auto;
	text-align: left;
}

/* /////////////////////////////////////////////////////////////// */
/* Progress Bar */

.progress-bar {
	width: 100%;
	background-color: #e0e0e0;
	padding: 3px;
	border-radius: 3px;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
}

.progress-bar-fill {
	display: block;
	height: 22px;
	background-color: #659cef;
	border-radius: 3px;

	transition: width 500ms ease-in-out;
}

/* /////////////////////////////////////////////////////////////// */
/* Calorie Output */

.calorie-output {
	text-align: center;
	border: 1px solid black;
}

.calorie-graph {
	border: 1px solid black;	
}


.calorie-graph img{
	height: 300px;
	
}

.macro-stats {
	text-align: left;
	border: 1px solid black;
}
</style>


