<template lang="pug">
.dialogues
  .dialogues_sidebar(:class="{'dialogues_sidebar--visible': isOpen}")
    DialogList(@close-sidebar="closeSidebar()")
  .dialogues_content
    h2.title(v-if="!$route.params.dialogId") Добро пожаловать!
    router-view
  button.dialogues_sidebar-toggle(@click="toggleSidebar()")
    .btn-bar
    .btn-bar
    .btn-bar
</template>

<script>
import DialogList from "@/components/dialogues/DialogList";
import { ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    const closeSidebar = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      toggleSidebar,
      closeSidebar,
    };
  },
  components: {
    DialogList,
  },
};
</script>

<style lang="sass">
.dialogues
  display: flex
  height: 100%
  position: relative
  &_sidebar
    flex-basis: 300px
    background-color: #f3f6f8
    overflow-y: auto
    &-toggle
      display: none
    @media screen and (max-width: 768px)
      display: none
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 9
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      &--visible
        display: block
      &-toggle
        display: block
        background-color: #398bff
        color: #fff
        border: none
        padding: 7px 12px
        box-shadow: 0 0 3px -1px #000
        border-radius: 3px
        position: absolute
        right: 20px
        top: 13px
        z-index: 10
        cursor: pointer
  &_content
    flex: 1
    background-color: #ffffff
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
</style>
