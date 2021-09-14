<template>
  <div
    :class="{'c-timer': true}">
    {{ minutes }}
    :
    {{ seconds }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "c-counter",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    minutes(): number {
      return Math.ceil(modelValue / 60)
    },
    seconds(): number {
      return modelValue - this.minutes * 60
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
  width 40px
  height 40px
  border-radius 100%
  background-color secondary-color
  color primary-color
  h4()
</style>
