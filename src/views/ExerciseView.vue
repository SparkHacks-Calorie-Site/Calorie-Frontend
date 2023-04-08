<script>
export default {
	name: "ExerciseView",
	methods: {
		fetchData(muscle) {
			this.show = true;
			fetch(`http://127.0.0.1:8000/${muscle}`, {
				method: 'GET'
			})
				.then(response => {
					response.json().then(res => this.msg = res);
				})
				.catch(err => {
					console.error(err);
				});
		}
	},
	data() {
		return {
			message: '',
			msg: [],
			show: false
		}
	}
}
</script>

<template>
	<div class="content">
		<h2 class="header">Select a muscle group you'd like to
			workout.</h2>
		<section class="info-col">
			<div class="exercise-item">
				<button @click="fetchData('chest')">
					<h2>Chest</h2>
					<img src="../assets/chest.png">
				</button>
			</div>
			<div class="exercise-item">
				<button @click="fetchData('upper-back')">
					<h2>Back</h2>
					<img src="../assets/Back.png">
				</button>
			</div>
			<div class="exercise-item">
				<button @click="fetchData('glutes')">
					<h2>Glutes</h2>
					<img src="../assets/Glutes.png">
				</button>
			</div>
		</section>
		<section class="info-col">
			<div class="exercise-item">
				<button @click="fetchData('arms')">
					<h2>Arms</h2>
					<img src="../assets/Arms.jpeg">
				</button>
			</div>
			<div class="exercise-item">
				<button @click="fetchData('quads')">
					<h2>Quads</h2>
					<img src="../assets/Quads.png">
				</button>
			</div>
			<div class="exercise-item">
				<button @click="fetchData('hamstrings')">
					<h2>Hamstring</h2>
					<img src="../assets/Hamstrings.png">
			</button>
		</div>
	</section>

		<section v-show="show" class ="exercises">
			<div class="info-col">
				<div class="exercise-item">
					<h2>{{ msg["Exercise 1 Name"] }}</h2>
					<p>{{ msg["Steps 1"] }}</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" :src="msg['YouTube 1']">
					</iframe>
				</div>
			</div>
			<div class="info-col">
				<div class="exercise-item">
					<h2>{{ msg["Exercise 2 Name"]}}</h2>
					<p>{{ msg["Steps 2"] }}</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" :src="msg['YouTube 2']">
					</iframe>
				</div>
			</div>
			<div class="info-col">
				<div class="exercise-item">
					<h2>{{ msg["Exercise 3 Name"] }}</h2>
					<p>{{ msg["Steps 3"] }}</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" :src="msg['YouTube 3']">
					</iframe>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
.exercise-item {
	text-align: center;
}

.exercise-item button {
	padding: 0 40px 15px 40px;
}

.exercise-item img {
	height: 100px;
	padding: auto;
}

s .exercise-item h2:hover {
	background-color: red;
}

.header {
	text-align: center;
}

.exercises {
	margin-top: 56px;
}
</style>


