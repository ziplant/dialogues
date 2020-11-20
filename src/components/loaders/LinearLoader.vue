<template lang="pug">
.bar-container
  .bar
  .bar
  .bar
  .bar

</template>

<style lang="sass">
.bar-container
  position: relative
  height: 2px
  width: 100%
  overflow: hidden

.bar
  content: ""
  display: inline
  position: absolute
  height: 100%
  width: 0
  right: 0
  background-color: #398bff
  &:nth-child(1)
    animation: linear_loader 2s linear 0s infinite

  &:nth-child(2)
    animation: linear_loader 2s linear 1s infinite

  &:nth-child(3)
    animation: linear_loader 2s linear 2s infinite


@keyframes linear_loader
    0%
      right: 100%
      width: 10%

    30%
      right: 0%
      width: 40%

    50%
      right: 0%
      width: 0%

    80%
      right: 0%
      width: 0%

    100%
      right: 0%
      width: 0%
</style>
