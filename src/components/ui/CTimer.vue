<template>
  <div class="c-timer">
    {{ minutes }}
    :
    {{ seconds }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "c-timer",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    minutes(): number {
      return Math.ceil(this.modelValue / 60)
    },
    seconds(): number {
      return this.modelValue - this.minutes * 60
    },
  },
  mounted() {
    setInterval(() => {
      this.$emit("update:modelValue", this.modelValue + 1)
    }, 1000)
  },
})
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

.c-timer
  box-sizing border-box
  display inline-flex
  justify-content center
  align-items: center
  width 60px
  height 60px
  border-radius 100%
  background-color primary-color
  color secondary-color
  box-shadow 0 0 8px rgba(0, 0, 0, 0.4)
  h2()
</style>
