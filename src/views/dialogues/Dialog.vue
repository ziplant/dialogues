<template lang="pug">
DialogChat(v-if="!isFetching" :dialog="dialog")
SpinnerLoader(v-else)
</template>

<script>
import DialogChat from "@/components/dialogues/DialogChat";
import SpinnerLoader from "@/components/loaders/SpinnerLoader";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useRequest from "@/compositions/request";

export default {
  props: ["dialogId"],
  setup() {
    const { getters } = useStore();
    const route = useRoute();
    const { isFetching } = useRequest();

    const dialogId = computed(() => route.params.dialogId);
    const dialog = computed(() => {
      isFetching.value = true;
      setTimeout(() => {
        isFetching.value = false;
      }, 600);
      return getters.getDialogById(dialogId.value);
    });

    return {
      isFetching,
      dialog,
      dialogId,
    };
  },
  components: {
    DialogChat,
    SpinnerLoader,
  },
};
</script>

<style lang="sass"></style>
