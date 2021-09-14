<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
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
  h1()

h2
  margin: 2px 0
  h2()

h4
  margin: 2px 0
  h4()
</style>
