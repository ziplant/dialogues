<template lang="pug">
.dialog-message(:class="{'dialog-message--right': message.author == username}")
 .dialog-message_body 
    .dialog-message_text {{message.text}}
 .dialog-message_footer
    .dialog-message_author {{message.author}}
    .dialog-message_date {{formattedDate}}
</template>

<script>
export default {
  props: ["message"],
  setup({ message }) {
    const username = "petya";

    const formattedDate = new Date(message.created).toLocaleString("ru-RU", {
      dateStyle: "short",
      timeStyle: "short",
    });

    return {
      username,
      formattedDate,
    };
  },
};
</script>

<style lang="sass">
.dialog-message
  display: inline-block
  max-width: 65%
  margin-bottom: 20px
  @media screen and (max-width: 768px)
    max-width: 90%
  &_body
    background-color: #f6f7f9
    padding: 20px
    border-radius: 8px 8px 8px 0px
  &_footer
    display: flex
    align-items: center
    margin-top: 10px
  &_text
    line-height: 19.83px
  &_author
    font-size: 13px
    font-weight: bold
    color: #000
    margin-right: 13px
  &_date
    font-size: 10px
  &--right
    float: right
    .dialog-message
      &_body
        background-color: #e9f5f4
        border-radius: 8px 8px 0px 8px
      &_footer
        justify-content: flex-end
</style>
