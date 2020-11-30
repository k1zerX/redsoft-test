<template lang="pug">

span.h4(
  block="rs-button"
)
  slot

</template>

<script>

export default {
  name: 'rs-button',
}

</script>

<style lang="scss">

.rs-button {
  --color: var(--rs-color-primary-dark);
  --hover-color: var(--rs-color-primary-light);
  --visited-color: var(--rs-color-primary);
  --disabled-color: #c1b4b1;
  --text-color: var(--rs-color-on-primary);

  width: 120px;
  height: 48px;
  background: var(--color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;

  &_bright {
   background: var(--visited-color);
 }

  &:hover:not([disabled]) {
    background: var(--hover-color);
    cursor: pointer;
  }

  &[disabled] {
    background: var(--disabled-color);
  }
}

</style>
