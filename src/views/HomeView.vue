<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>
      Food
    </h1>
    <div>
      <h1>
        Total Cals
      </h1>
      <input type="text" id = "goalCals">
      <button>Enter</button>
      <div>
        <div>
          <h2>Breakfast</h2>
          <h3>300 Calories</h3>
          <input type="text" id = "goalCals">
          <button>Add</button>
          
          <ul>
            <li>Banana</li>
            <li>Waffles</li>
          </ul>
        </div>
        <div>
          <h2>Lunch</h2>
          <h3>300 Calories</h3>
          <input type="text" id = "goalCals">
          <button>Add</button>
          <ul>
            <li>Banana</li>
            <li>Waffles</li>
          </ul>
        </div>
        <div>
          <h2>Dinner</h2>
          <h3>300 Calories</h3>
          <input type="text" id = "goalCals">
          <button>Add</button>
          <ul>
            <li>Banana</li>
            <li>Waffles</li>
          </ul>
        </div>
      </div>
      <h1>Remaining Calories: 1400</h1>
    </div>
  </main>
</template>
