<template lang="pug">
.dialog-list
  router-link(
    to="/dialogues"
    @click="$emit('close-sidebar')"
  ).dialog-list_header Сообщения 
    span.dialog-list_amount {{dialogues.length}}
  ul.dialog-list_list
    li.dialog-list_item(
      v-for="dialog in dialogues" :key="dialog.id")
      router-link(:to="`/dialogues/${dialog.id}`" @click="$emit('close-sidebar')")
        DialogItem(:dialog="dialog")
</template>

<script>
import DialogItem from "./DialogItem";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { getters } = useStore();
    const dialogues = computed(() => getters.getDialogues);

    return {
      dialogues,
    };
  },
  components: {
    DialogItem,
  },
};
</script>

<style lang="sass">
%list-item
  padding: 20px
  border-bottom: 1px solid #e9edf2

.dialog-list
  &_header
    display: block
    color: #656b77
    @extend %list-item
  &_amount
    font-weight: bold
    color: #d2d8de
    padding-left: 10px
  &_list
    list-style: none
    padding: 0
    margin: 0
  &_item
    a
      @extend %list-item
      display: block
      border-left: 2px solid transparent
      &.router-link-active
        background-color: #ffffff
        border-left-color: #398bff
</style>
