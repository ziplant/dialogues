<template lang="pug">
.dialog-chat
  .dialog-chat_content
    .dialog-chat_inner
      .dialog-messages
        .dialog-messages_inner#dialogMessages
          ul.dialog-messages_list
            li.dialog-messages_item.dialog-messages_item--filler
            li.dialog-messages_item(
              v-for="message in dialog.parts"
              :key="message.id"
            )
              DialogMessage(:message="message")
  LinearLoader(v-if="isFetching")
  form.send-form(
    @submit.prevent="submit"
    :class="{'send-form--disabled': isFetching}"
  )
    input.send-form_input(
      type="text" 
      placeholder="Введите текст..." 
      v-model="messageText"
      :disabled="isFetching"
    )
    button.send-form_submit(
      type="submit" 
      :disabled="isFetching"
      :style="{backgroundImage: `url(${require('@/assets/img/icons/send-icon.svg')})`}"
    ) 

</template>

<script>
import DialogMessage from "./DialogMessage";
import LinearLoader from "@/components/loaders/LinearLoader";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import useRequest from "@/compositions/request";
import useScrollDown from "@/compositions/scrollDown";

export default {
  props: ["dialog"],
  setup({ dialog }) {
    const { dispatch } = useStore();
    const { isFetching, sendRequest } = useRequest();
    const { scrollDown } = useScrollDown();

    const messageText = ref("");

    onMounted(() => {
      scrollDown(dialogMessages);
    });

    const submit = async (e) => {
      if (!messageText.value) return;

      sendRequest(async () => {
        await dispatch("sendMessage", {
          dialogId: dialog.id,
          message: {
            id: Date.now(),
            author: "petya",
            text: messageText.value,
            created: new Date(),
          },
        });

        scrollDown(dialogMessages);
      });

      messageText.value = "";
    };

    return {
      isFetching,
      messageText,
      submit,
    };
  },
  components: {
    DialogMessage,
    LinearLoader,
  },
};
</script>

<style lang="sass">
.dialog-chat
  display: flex
  flex-direction: column
  height: 100%
  &_content
    display: flex
    flex-direction: column
    flex: 1
  &_inner
    height: 100%

.dialog-messages
  position: relative
  height: 100%
  &_inner
    position: absolute
    width: 100%
    top: 0
    left: 0
    height: inherit
    overflow-y: auto
  &_list
    display: flex
    flex-direction: column
    list-style: none
    padding: 23px 0
    box-sizing: border-box
    margin: 0
    height: inherit
  &_item
    padding: 0 33px
    &--filler
      flex: 1

.send-form
  display: flex
  &--disabled
    pointer-events: none
    user-select: none
  &_input
    flex: 1
    width: 100px
    box-sizing: border-box
    border: none
    border-top: 1px solid #e9edf2
    padding: 0 33px
    background-color: #fff
    &:focus
      outline: none
  &_submit
    width: 80px
    height: 80px
    background-color: #398bff
    border: none
    cursor: pointer
    background-repeat: no-repeat
    background-position: 55% 55%
    background-size: 32px 18px
</style>
