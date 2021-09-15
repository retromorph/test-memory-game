<template>
  <div class="p-game">
    <c-timer />
    <c-game :arrangement="[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]" />
  </div>
</template>

<script lang="ts">
import CGame from "@/components/CGame.vue"

export default {
  name: "Game",
  components: { CGame },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"

.p-game
  padding-top 16px
  display flex
  flex-direction column
  justify-content center
  align-items center
  container-fluid()

  .c-timer
    position absolute
    top 24px
    right 24px
</style>