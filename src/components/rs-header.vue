<template lang="pug">

header(
  block="rs-header"
)
  div(
    elem="wrapper"
  )
    rs-nav-bar(
      :routes="routes"
    )
    rs-search-form(
      placeholder="Поиск по названию картины"
    )

</template>

<script>

import RsNavBar from '@/components/rs-nav-bar.vue';
import RsSearchForm from '@/components/rs-search-form.vue';

export default {
  name: 'rs-header',
  components: {
    RsNavBar,
    RsSearchForm,
  },
  props: [
    'routes',
  ],
}

</script>

<style lang="scss">

.rs-header {
  --width: var(--rs-header-width);
  --height: var(--rs-header-height);
  --padding: var(--rs-header-padding);

  height: var(--height);
  padding: var(--padding);
  border-bottom: 1px solid var(--rs-color-neutral);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  &__wrapper {
    width: var(--width);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
}

</style>
