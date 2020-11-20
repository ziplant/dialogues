<template lang="pug">
DialogChat(:dialog="dialog" :key="dialogId")
</template>

<script>
import DialogChat from "@/components/dialogues/DialogChat";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  props: ["dialogId"],
  setup() {
    const { getters } = useStore();
    const route = useRoute();

    const dialogId = computed(() => route.params.dialogId);
    const dialog = computed(() => getters.getDialogById(dialogId.value));

    return {
      dialog,
      dialogId,
    };
  },
  components: {
    DialogChat,
  },
};
</script>

<style lang="sass"></style>
