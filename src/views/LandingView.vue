<template>
  <div class="hero-image">
    <div class="hero-CTA">
      <h1>Healthy, made easy.</h1>
      <h2>Because student life is already stressful.</h2>
      <div class="CTA-button">
        <button @click="$router.push('calories')" class="Inventory" to="/calories">
          Calorie Tracker
        </button>
        <button @click="$router.push('about')" class="FAQ" to="/about">
          About Us
        </button>
      </div>
    </div>
  </div>
  <AboutInfo></AboutInfo>
</template>

<script>
import AboutInfo from '../components/AboutInfo.vue';
export default {
  name: "LandingView",
  components: { AboutInfo },
};
</script>

<style>
/* /////////////////////////////////////////////////////////////// */
/* Chart */

.smart-chart {
  position: relative;
}

.smart-chart .chart {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 56px;
  border: 1px solid #021a40;
  max-width: 100%;
}

.cornerimage {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
}


/* /////////////////////////////////////////////////////////////// */
/* info-col */
.notes {
  background-color: white;
  margin: 20px 15px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* /////////////////////////////////////////////////////////////// */
/* pfp */
.pfp {
  text-align: center;
}

.pfp img {
  height: 200px;
  text-align: center;
  border-radius: 50%;
}


/* /////////////////////////////////////////////////////////////// */
/* Page Break */

.wide-break {
  background: -webkit-linear-gradient(rgb(233, 232, 232), rgba(0, 0, 0, 0));
  padding-top: 20px;
}

@media (max-width: 1080px) {
  .wide-break {
    background-color: rgba(0, 0, 0, 0);
  }
}



/* /////////////////////////////////////////////////////////////// */
/* HERO CTA */
.hero-CTA h1 {
  color: #f2f2f2;
  font-size: 6vh;
  margin: 0;
}

.hero-CTA h2 {
  color: #f2f2f2;
  font-size: 4vh;
}

.hero-CTA {
  width: 80%;
  color: white;
  text-align: center;
}

/* /////////////////////////////////////////////////////////////// */
/* Hero Images */
body {
  max-width: 100;
}

.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/hero-image.jpg");
  height: 75vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 720px) {
  .hero-image {
    height: 50vh;
  }
}

@media only screen and (min-width: 1080px) {
  .hero-image {
    height: 100vh;
  }
}
</style>
