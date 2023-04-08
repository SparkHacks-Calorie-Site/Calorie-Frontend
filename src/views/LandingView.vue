<template>
  <div class="hero-image">
    <div class="hero-CTA">
      <h1>Healthy living, made easy.</h1>
      <h2>Because student life is already stressful.</h2>
      <div class="CTA-button">
        <button @click="$router.push('inventory')" class="Inventory" to="/about">
          Calorie Tracker
        </button>
        <button @click="$router.push('about')" class="FAQ" to="/about">
          About Us
        </button>
      </div>
    </div>
  </div>


  <div class="content">
    <section class="information-left">
      <h2>Our Mission Statement:</h2>
      <p>
        UIC is the industry leader of one-to-one niches. The all-hands meetings
        factor is plug-and-play. We think we know that if you evolve virally
        then you may also synergize efficiently. Your budget for syndicating
        should be at least one-tenth of your budget for iterating. We understand
        that it is better to orchestrate seamlessly than to embrace globally.
        Your budget for upgrading should be at least three times your budget for
        syndicating.
      </p>
    </section>
  </div>

  <div class="wide-break">
    
    <div class="content">

      <div class="smart-chart">
        <img class="chart" src="../assets/chart.png" />
        <img class="cornerimage" src="https://cdn2.hubspot.net/hubfs/3818705/DMC%202020/Images/Img.png" />
      </div>

      <section class="info-col">
        <div class="item-1 notes">  
          <h2>This is a thing</h2>
          <p>
            UIC is the industry leader of best-of-breed architectures. What do we
            visualize? Anything and everything, regardless of standing! Think
            best-of-breed. Our technology takes the best aspects of DOM and C++.
            What does the term "customized" really mean?
          </p>
        </div>
        <div class="item-2 notes">
          <h2>This is another thing</h2>
          <p>
            The metrics for TQC are more well-understood if they are not virtual.
            We have proven we know that if you grow proactively then you may also
            orchestrate seamlessly. If all of this seems unclear to you, that's
            because it is!
          </p>
        </div>
        <div class="item-3 notes">
          <h2>This is yet another thing</h2>
          <p>
            Without intra-process management, you will lack media sourcing. We
            apply the proverb "Beggars can't be choosers" not only to our
            obfuscation but our power to repurpose. Quick: do you have a
            customized scheme for handling new user interfaces?
          </p>
        </div>
      </section>
    </div>
  </div>


  <div class="content">



    <section class="information-right">
      <h2>Some more Writing:</h2>
      <blockquote>
        "Cool look a block quote..." <br />
        - <em>Somebody important or something</em>
      </blockquote>
      <p>
        The metrics for metrics are more well-understood if they are not
        strategic, B2C. Think ultra-wireless. Our technology takes the best
        aspects of FOAF and JavaScript. Your budget for pushing the envelope
        should be at least one-tenth of your budget for evolving. Think
        holistic. Think reality-based. Think out-of-the-box. But don't think all
        three at the same time.
      </p>
    </section>


  </div>

  <div class="wide-break">
    <div class="content">
      
      <section class="info-col">
        <div class="item-1 pfp">
          <img src="../assets/pfp.jpg" />
          <h2>Abdullah</h2>
          <p>Some writing someone will definitely read</p>
        </div>
        <div class="item-2 pfp">
          <img src="../assets/pfp.jpg" />
          <h2>Angad</h2>
          <p>Some writing someone will definitely read</p>
        </div>
        <div class="item-3 pfp">
          <img src="../assets/pfp.jpg" />
          <h2>Kevin</h2>
          <p>Some writing someone will definitely read</p>
        </div>
      </section>
    </div>
    <div class="content">
      <section class="info-col">
        <div class="item-1 pfp">
          <img src="../assets/pfp.jpg" />
          <h2>Sarvani</h2>
          <p>Some writing someone will definitely read</p>
        </div>
        <div class="item-2 pfp">
          <img src="../assets/pfp.jpg" />
          <h2>Salma</h2>
          <p>Some writing someone will definitely read</p>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
export default {
  name: "LandingView",
  components: {},
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
  background-color: rgb(233, 232, 232);
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
