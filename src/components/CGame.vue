<template>
  <div class="c-game">
    <CCard v-for="card in arrangement"
           :card-number="card" />
  </div>
</template>

<script lang="ts">
import CCard from "@/components/ui/CCard.vue"

export default {
  name: "c-game",
  props: {
    arrangement: {
      type: Array,
      required: true,
    },
  },
  components: { CCard },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-game
  display grid
  grid-template-columns repeat(6, 1fr)
  grid-gap 16px
</style>