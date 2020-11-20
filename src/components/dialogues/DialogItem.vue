<template lang="pug">
.dialog-item
  .dialog-item_header
    .dialog-item_subject {{dialog.subject}}
    .dialog-item_date {{dateFormatted}}
  .dialog-item_content
    .dialog-item_placeholder {{slicedText}}
</template>

<script>
export default {
  props: ["dialog"],
  setup({ dialog }) {
    const dateFormatted = new Date(dialog.created)
      .toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .slice(0, -3);

    const slicedText =
      dialog.parts[0].text.length > 70
        ? `${dialog.parts[0].text.slice(0, 70)}...`
        : dialog.parts[0].text;

    return {
      dateFormatted,
      slicedText,
    };
  },
};
</script>

<style lang="sass">
.dialog-item
  &_header
    display: flex
    justify-content: space-between
    align-items: center
    line-height: 20px
  &_subject
    color: #35383d
    font-weight: 600
  &_date
    color: #7d8790
    font-size: 10px
    font-weight: 500
    text-transform: uppercase
  &_content
  &_placeholder
    color: #7d8790
    font-size: 13px
    line-height: 18.41px
    height: 40px
    overflow: hidden
</style>
