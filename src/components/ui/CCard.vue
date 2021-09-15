<template>
  <div :class="{
    'c-card': true,
    'c-card--active': active
  }" ref="card" @click="handleOnClick">
  </div>
</template>

<script>
export default {
  name: "c-card",
  props: {
    cardNumber: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    // this.$refs.image.style.objectPosition = `${((this.cardNumber - 1) % 4) * 256}px ${Math.ceil(this.cardNumber / 4) * 256}px`
    // this.$refs.image.style.objectFit = "cover"
    // this.$refs.card.style.height = `${this.$refs.card.clientWidth}px`
    let dimension = Math.min(window.outerHeight, window.outerWidth - 32) - 5 * 16
    this.$refs.card.style.height = `${dimension / 6}px`
    this.$refs.card.style.width = `${dimension / 6}px`
  },
  methods: {
    handleOnClick() {
      this.active = !this.active
      if (this.active) {
        this.$refs.card.style.backgroundImage = `url(${require("@/assets/images/cards_snapshot.jpeg")})`
        this.$refs.image.style.backgroundPosition = `${((this.cardNumber - 1) % 4) * 256}px ${Math.ceil(this.cardNumber / 4) * 256}px`
      } else {

      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/animations.styl"

.c-card
  box-shadow 0 0 8px rgba(255, 255, 255, 0.4)
  background: secondary-color
  cursor pointer

  &--active
    animation flip-over 1s ease
</style>