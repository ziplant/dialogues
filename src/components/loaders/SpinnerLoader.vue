<template lang="pug">
.preloader
  .lds-dual-ring
</template>

<style lang="sass">
.preloader
  display: flex
  justify-content: center
  align-items: center
  height: 100%
.lds-dual-ring
  display: block
  width: 80px
  height: 80px
  &::after
    content: " "
    display: block
    width: 50px
    height: 50px
    margin: 8px
    border-radius: 50%
    border: 2px solid #398bff
    border-color: #398bff transparent #398bff transparent
    animation: lds-dual-ring 1.2s linear infinite

@keyframes lds-dual-ring
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>
