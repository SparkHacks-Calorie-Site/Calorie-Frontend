<script>
import axios from "axios";
export default {
	name: "CaloriesView",
	methods: {
		populateFoodData(values) {
			this.calorie_goal = values.calories
			this.formData.food1 = values.food1;
			this.formData.food2 = values.food2;
			this.formData.food3 = values.food3;
		},
		getInfo() {
			fetch("http://127.0.0.1:8000/calories/",
				{
					method: "POST",
					body: JSON.stringify(this.formData),
					headers:
					{
						"Content-Type": "application/json"
					}

				}).then(response => {
					response.json().then(res => this.total_calories = res);
				})
				.catch((error) => console.log(error));

			fetch("http://127.0.0.1:8000/macros/",
				{
					method: "POST",
					body: JSON.stringify(this.formData),
					headers:
					{
						"Content-Type": "application/json"
					}

				}).then(response => {
					response.json().then(res => {
						this.total_protein = res.Protein
						this.total_carbs = res.Carbs
						this.total_fats = res.Fat
					}
					);
				})
				.catch((error) => console.log(error));
		}
	},
	data() {
		return {
			total_protein: 0,
			total_carbs: 0,
			total_fats: 0,
			total_calories: 0,
			calorie_goal: 0,
			formData: {
				food1: "",
				food2: "",
				food3: "",
			},
		}
	}
}
</script>

<template>
	<div class="content">
		<form @submit.prevent="getInfo()">
			<div class="calorie-input">
				<h2>Enter Calorie Goal</h2>
				<div>
					<input type="text" id="calories" v-model="formData.calories" placeholder="Ex. 1500"
						class="calorie-input" />
				</div>
			</div>

			<section class="info-col food-list">
				<div class="food-item">
					<h2>Breakfast</h2>
					<input type="text" id="food1" v-model="formData.food1" placeholder="Ex. Pancakes" />


					<div class="macro-list">
						<h3>Protein: </h3>
						<h3>Carbs: </h3>
						<h3>Fats: </h3>
					</div>

					<!--<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">-->
				</div>
				<div class="food-item">
					<h2>Lunch</h2>
					<input type="text" id="food2" v-model="formData.food2" placeholder="Ex. Hamburger" />

					<div class="macro-list">
						<h3>Protein: </h3>
						<h3>Carbs: </h3>
						<h3>Fats: </h3>
					</div>

					<!--<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">-->
				</div>
				<div class="food-item">
					<h2>Dinner</h2>
					<input type="text" id="food3" v-model="formData.food3" placeholder="Ex. Ramen" />

					<div class="macro-list">
						<h3>Protein: </h3>
						<h3>Carbs: </h3>
						<h3>Fats: </h3>
					</div>

					<!--<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">-->
				</div>
			</section>
			<div class="submit-calories CTA-button">
				<button v-on:click="populateFoodData(formData)">Create Request</button>
			</div>
		</form>

		<h2 v-show="calorie_goal != 0" class="calorie-goal">{{ total_calories }} kCal out of {{ calorie_goal }} kCal</h2>
		<div class="wrapper">
			<div class="progress-bar">
				<span class="progress-bar-fill" style="width: 50%;"></span>
			</div>
		</div>

		<div class="calorie-output">
			<h2>You're reached {{ Math.round(total_calories / calorie_goal * 100) }}% of your goal.</h2>
		</div>

		<section class="info-col">
			<div class="calorie-graph">
				<img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg">
			</div>
			<div class="macro-stats">
				<div class="macro-list">
					<h3>Protein: {{ total_protein }}</h3>
					<h3>Carbs: {{  total_carbs }}</h3>
					<h3>Fats: {{ total_fats }}</h3>
				</div>
				<h3>Add some more supurfluous bullshit over here. Wow I love typing man typing is so cool Wow</h3>
			</div>
		</section>

	</div>
</template>

<style>
/* /////////////////////////////////////////////////////////////// */
/* Form Bullshit */
s .submit-calories {
	text-align: center;
}

.submit-calories .CTA-button {
	text-align: center;
	max-width: 60%;
}


/* /////////////////////////////////////////////////////////////// */
/* Calorie Input */

.calorie-goal {
	text-align: center;
}

.calorie-input {
	text-align: center;
	font-size: 20px;
	/*border: 1px solid black;*/
}

/* /////////////////////////////////////////////////////////////// */
/* Food Item List */

.food-list {
	margin-top: 56px;
	margin-bottom: 56px;
}

.food-item {
	text-align: center;
	/*border: black 1px solid;*/
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
	margin-top: 32px;
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
}

.calorie-graph {
	text-align: center;
}

.calorie-graph img {
	height: 300px;
	margin: auto;
}

.macro-stats {
	text-align: left;
}
</style>


