<template>
  <table>
    <tr v-for="result in results">

    </tr>
  </table>
</template>

<script>
export default {
  name: "c-result-table",
  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>