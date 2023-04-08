<template>
	<nav class="content">
		<router-link to="/home">Blog</router-link>
		<router-link to="/calories">Calories</router-link>
		<router-link to="/" class="logo-container">
			<img src="../assets/logo.png" class="logo" />
		</router-link>
		<router-link to="/exercise">Exercise</router-link>
		<router-link to="/about">About</router-link>
	</nav>
</template>
  
<style>
nav a {
	font-size: 18px;
	text-decoration: none;
	color: #494949;
	position: relative;
	margin-right: 17px;
}

.logo {
	height: 50px;
	margin-top: 15px;
	margin-bottom: 15px;
	vertical-align: middle;
}

a:hover {
	border-bottom: 2px solid;
}

.logo-container:hover {
	border-bottom: 0px;
}
nav {
	height: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
  