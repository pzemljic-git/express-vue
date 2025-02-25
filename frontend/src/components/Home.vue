<script lang="ts" setup>
  import { ref, watch } from 'vue';
  const country = ref('');
  const capital = ref('');

  watch(country, (newValue, oldValue) => {
    switch(newValue) {
      case 'Austria':
        capital.value = 'Vienna';
        break;
      case 'Canada':
        capital.value = 'Ottawa';
        break;
      case 'Mexico':
        capital.value = 'Mexico City';
        break;
      case 'USA':
        capital.value = 'Washington D.C.';
        break;
      default:
        capital.value = '';
    }
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
            <option>Austria</option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>USA</option>
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