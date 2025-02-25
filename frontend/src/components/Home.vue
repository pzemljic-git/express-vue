<script lang="ts" setup>
  import { ref, watch } from 'vue';
  const country = ref('');

  watch(country, (newValue, oldValue) => {
    console.log(`Selected Country is ${newValue}`);
  });
</script>

<template>
  Get the capital of:
  <select v-model="country">
    <option disabled value="">Please select one</option>
    <option>USA</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
  <p>Selected Country is {{ country }}</p>
</template>