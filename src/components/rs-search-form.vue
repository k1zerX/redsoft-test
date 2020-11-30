<template lang="pug">

div(
  block="rs-search-form"
)
  input.h5(
    elem="input"
    :placeholder="placeholder"
  )
  rs-button(
    elem="button"
  ) Найти

</template>

<script>

import RsButton from '@/components/rs-button.vue';

export default {
  name: 'rs-search-form',
  components: {
    RsButton,
  },
  props: [
    'placeholder',
  ],
}

</script>

<style lang="scss">

.rs-search-form {
  display: inline-flex;
  flex-flow: row nowrap;

  &__input {

    all: unset;
    width: 250px;
    padding: 0 16px;
    border: 1px solid var(--rs-color-neutral);
    border-right: 0;

    &::placeholder {
      color: var(--rs-color-neutral-text);
    }

    &:focus {
      border-color: var(--rs-color-neutral-active);
    }
  }

  &__button {
  }
}

</style>
