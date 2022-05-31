<template>
  <div>
    <p class="title">BMI Calculator</p>

    <input type="number" v-model="weight" />
    <input type="number" v-model="height" step="0.01" />
    <br />

    <button class="button is-light" @click="calculate">Calculate</button>

    {{ results }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BMI",

  data() {
    return {
      weight: undefined,
      height: undefined,
      results: undefined,
    };
  },

  methods: {
    calculate() {
      this.results = this.weight / (this.height * this.height);
    },
  },
});
</script>
