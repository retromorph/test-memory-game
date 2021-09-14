<template>
  <router-view />
</template>

<style lang="stylus">
@import "~normalize.css"
@import "~@/assets/styles/variables.styl"
@import "~@/assets/styles/mixins.styl"

body
  background-color primary-color

h1
  margin: 2px 0
  color secondary-color
  h1()

h2
  margin: 2px 0
  color secondary-color
  h2()

h4
  margin: 2px 0
  color secondary-color
  h4()

a
  text-decoration none
</style>
