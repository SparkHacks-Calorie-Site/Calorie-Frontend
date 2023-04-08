<template>
	<div class="content">
	  <div class="feed">
		<div class="info">
		  <h1>Student Testimonials</h1>
		  <div class="blogs">
        
			<h2 class = "name">Samir Khan</h2>
      <h3>Electrical Engineering, 1st-Year</h3>
			<p>
			  I've been powerlifting for over 10 years now and have competed in numerous local meets. I fell in love with the sport while in college and have been hooked ever since. I've spent countless hours perfecting my technique and building up my strength, and my best lift to date is a 400-pound squat. I love the sense of camaraderie among powerlifters and the feeling of pushing myself to new heights.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Jayla Genisis</h2>
      <h3>Nursing, 3rd-Year</h3>
			<p>
        After a serious injury, I turned to weightlifting to rebuild my strength and regain my confidence. Through hard work and the support of a strong community, I was able to overcome my injury and become stronger than ever before. Weightlifting not only helped me recover physically, but it also gave me a sense of purpose and drive that carried over into other areas of my life.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Yara Alhasimi</h2>
      <h3>Biology, 2nd-Year</h3>
			<p>
        At first, weightlifting was intimidating. But with the encouragement of friends, I started lifting regularly and noticed a significant change in my body. Weightlifting also helped me to improve my mental health and become more confident in myself. Now, it's a regular part of my routine and has helped me become a better, stronger, and more confident version of myself.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Mark Davis</h2>
      <h3>Business, 3rd-Year</h3>
			<p>
			  I've always been into fitness, but I only started powerlifting a few months ago. I was looking for a new challenge and thought powerlifting would be a great way to test my limits. I'm still working on building up my strength and perfecting my technique, but my best lift so far is a 185-pound deadlift. I love the feeling of pushing myself to new heights and can't wait to see where this sport takes me.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Priya Patel</h2>
      <h3>Biomedical Engineering, 4th-Year</h3>
			<p>
        Growing up, I had a lot of negative feelings towards my body. But when I started weightlifting, I began to appreciate what my body was capable of instead of just how it looked. I learned to celebrate my strength and accomplishments instead of fixating on perceived flaws. Weightlifting helped me shift my focus from external validation to internal pride and self-worth, and it's been an empowering journey.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Nandana Sheri</h2>
      <h3>Computer Science, 2nd-Year</h3>
			<p>
        I never anticipated the social benefits of weightlifting when I first started. But as I became more involved in the lifting community, I realized how much of a support system it could be. I've made lifelong friends through lifting, and the camaraderie and shared sense of purpose has been invaluable. The gym is a place where I feel accepted and supported, and I'm grateful for the connections I've made through lifting.
			</p>
		  </div>
		  <div class="blogs">
			<h2 class = "name">Emma Rodriguez</h2>
      <h3>Marketing, 3rd-Year</h3>
			<p>
        As a woman in weightlifting, I have faced challenges. But with the support of my coaches and fellow lifters, I have been able to break down stereotypes and stigmas. I have learned that strength comes in all shapes and sizes, and that women can be just as powerful and capable as men in the gym.
			</p>
		  </div>
		</div>
		<div class="articles">
		  <button class="hide-button" v-on:click="seen = !seen">Show/Hide</button>
  
		  <div class="sidebar" v-if="seen">
			<div class="news">
			  <h2>Get involved!</h2>
        <h3> Badminton Club</h3>
			  <p>
          Our club holds practices twice a week to improve our badminton skills. We love to welcome new players and travel to many tournaments held at other universities for competitive badminton in both singles and doubles! Come meet us on Saturday April 8th at 11:30-1:30 pm.
			  </p>
			  <a href="https://recreation.uic.edu/programs/sport-clubs/badminton-club/" class="readmore"
				>Read More >>></a
			  >
			</div>
  
			<div class="news">
			  <h3>Self Defense Workshop</h3>
			  <p>
          UIC Protectives is a new martial arts training course on the campus of the University of Illinois at Chicago. More than self-defense, the course aims at training students to be a protector of themselves and others.</p>
			  <a href="https://recreation.uic.edu/events/self-defense-workshop-2-2/" class="readmore"
				>Read More >>></a
			  >
			</div>
  
			<div class="news">
			  <h3>UIC Counseling Center’s Mindbody Workshops</h3>
			  <p>
          Group therapy is the treatment of choice for many concerns, especially for individuals whose distress is related to their social, family, or romantic relationships. Join us to explore personal concerns and connect with others, who may have similar experiences, in a trusting, confidential environment.
			  </p>
			  <a href="https://counseling.uic.edu/group-3/#getting-started-with-a-group" class="readmore"
				>Read More >>></a
			  >
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
	name: "HomeView",
	data: function () {
	  return {
		seen: true,
	  };
	},
	methods: {
	  hideSidebar() {
		console.log("this has been pressed");
		document.getElementById("info-sidebar").style.display = "";
	  },
	},
  };
  </script>
  
  <style>
  .feed {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
  }
  
  /* /////////////////////////////////////////////////////////////// */
  /* Random Info News */
  
  .info {
	flex: 70%;
	flex-grow: 1;
  
  }
  
  /* /////////////////////////////////////////////////////////////// */
  /* Sidebar News */
  .blogs {
    padding: 15px;
    margin-bottom: 30px;
    margin-right: 20px;
    border-style: solid;
    border-radius: 10px;
   border-color: white;
   background-color: white;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.01)

  }

  
  .articles {
	flex: 25%;
  }
  .sidebar {
	position: sticky;
	top: 20px;
  
	border-collapse: collapse;
	font-size: 0.9em;
	

	background-color: white;
	margin: 20px 15px;
	padding: 5px;
	border-radius: 5px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.01)
}
  
  .sidebar .news {
	margin: 10px;
  }
  
  .sidebar .news p,
  h3 {
	margin: 10px 0 5px 0;
  }
  
  .readmore {
	font-size: 10px;
	text-decoration: none;
	color: #494949;
  }
  
  /* /////////////////////////////////////////////////////////////// */
  /* Sidebar Button */
  .hide-button {
	border: 0px;
	position: fixed;
	bottom: 0;
	right: 0;
	background-color: #d50032;
	color: white;
	padding: 5px 20px;
	margin: 0 0 15px 10px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s linear;
  }
  </style>
  