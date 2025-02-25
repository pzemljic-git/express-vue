<script lang="ts" setup>
  import { ref, watch } from 'vue';
  const country = ref('');
  const capital = ref('');
  const countryToCapital = {
      Austria: 'Vienna',
      Canada: 'Ottawa',
      Mexico: 'Mexico City',
      USA: 'Washington D.C.'
  };
  const countries = Object.keys(countryToCapital);

  // Exercice: move this client side code into a server side REST API
  watch(country, (newValue, oldValue) => {
    capital.value = countryToCapital[newValue];
  });
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>Country</td>
        <td>
          <select v-model="country">
            <option disabled value="">Please select one</option>
            <option v-for = "country in countries">{{ country }}</option>
          </select>
        </td>  
      </tr>
      <tr>
        <td>Capital</td>
        <td>{{ capital }}</td>
      </tr>
    </tbody>
  </table>
</template>