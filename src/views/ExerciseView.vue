<script>
export default {
	name: "ExerciseView",
	data() {
		return {
			message: ''
		}
	}
}
</script>

<template>
	<div class="content">
		<h2 class="header">Select a muscle group you'd like to workout.</h2>
		<section class="info-col">
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
		</section>
		<section class="info-col">
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
			<div class="exercise-item">
				<h2>Hamstring</h2>
				<img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png">
			</div>
		</section>

		<section>
			<div class="info-col">
				<div class="exercise-item">
					<h2>Exercise #1</h2>
					<p>Steps: [Insert some steps here]</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" src="https://www.youtube.com/embed/tgbNymZ7vqY">
					</iframe>
				</div>
			</div>
			<div class="info-col">
				<div class="exercise-item">
					<h2>Exercise #1</h2>
					<p>Steps: [Insert some steps here]</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" src="https://www.youtube.com/embed/tgbNymZ7vqY">
					</iframe>
				</div>
			</div>
			<div class="info-col">
				<div class="exercise-item">
					<h2>Exercise #1</h2>
					<p>Steps: [Insert some steps here]</p>
				</div>
				<div class="exercise-item">
					<iframe width="470" height="265" src="https://www.youtube.com/embed/tgbNymZ7vqY">
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

.exercise-item img {
	height: 100px;
	padding: auto;
}

.exercise-item:hover {
	height: 105%;
}

.header{
	text-align: center;
}
</style>


