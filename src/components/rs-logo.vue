<template lang="pug">

img(
block="rs-logo"
  v-if="dark"
  src="@/assets/logo_dark.svg"
)
img(
block="rs-logo"
  v-else
  src="@/assets/logo.svg"
)

</template>

<script>

export default {
  name: 'rs-logo',
  props: [
    'dark',
  ],
}

</script>

<style lang="scss">

.rs-logo {
  --size: var(--rs-logo-size);

  width: var(--size);
  height: var(--size);
}

</style>
