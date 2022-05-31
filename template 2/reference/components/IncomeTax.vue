<template>
  <div>
    <p class="title">Income Tax Calculator</p>
    <input type="number" v-model="income" />
    <br />
    <button class="button is-light" @click="calculate">Calculate</button>
    {{ results }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IncomeTax",

  data() {
    return {
      income: undefined,
      results: undefined,
    };
  },

  methods: {
    calculate() {
      if (this.income < 20001) this.results = 0;
      else if (this.income < 30001) this.results = (this.income - 20000) * 0.02;
      else if (this.income < 40001)
        this.results = 200 + (this.income - 30000) * 0.035;
      else
        this.results = "Wow u make so much money the calculator cant calculate";
    },
  },
});
</script>
