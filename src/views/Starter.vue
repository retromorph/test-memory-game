<template>
  <div class="p-starter">
    <h1>
      Н<span class="p-starter__styled-letter">а</span>чни<span class="p-starter__styled-letter">т</span>е
      иг<span class="p-starter__styled-letter">р</span>ать в Me<span class="p-starter__styled-letter">m</span>ory!
    </h1>

    <router-link to="/game"
                 tag="button">
      <c-button class="p-starter__button">
        Начать
      </c-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Starter",
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"

.p-starter
  height 100vh
  display flex
  flex-direction column
  justify-content center
  align-items center

  h1
    text-transform uppercase

  &__button
    margin-top 56px
    transform scale(1.2)

  &__styled-letter
    font-family font-family-styled
</style>