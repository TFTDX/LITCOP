<template>
  <div>
    <BMI />

    <hr />

    <IncomeTax />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import BMI from "../components/BMI.vue";
import IncomeTax from "../components/IncomeTax.vue";

export default defineComponent({
  name: "Home",

  components: { BMI, IncomeTax },
});
</script>
