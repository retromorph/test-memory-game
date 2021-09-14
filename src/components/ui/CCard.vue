<template>
  <div :class="{
    'c-card': true,
    'c-card--active': modelValue
  }">
    <transition name="fade">
      <img v-if="modelValue"
           src="@/assets/images/cards_snapshot.jpg"
           :alt="`Картинка карточки ${cardNumber}`" />
    </transition>
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
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/animations.styl"

.c-card
  background: secondary-color

  &--active
    animation 1s flip-over
</style>