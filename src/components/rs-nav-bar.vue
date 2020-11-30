<template lang="pug">

div(
  block="rs-nav-bar"
)
  div(
    elem="elem"
  )
    rs-logo(
      elem="elem-logo"
      :dark="dark"
    )
  div(
    elem="elem"
    v-for="(route, id) in routes"
    :key="`rs-route_${id}`"
  )
    router-link.h5(
      elem="elem-link"
      :to="route.path"
    ) {{ route.name }}

</template>

<script>

import RsLogo from '@/components/rs-logo.vue';

export default {
  name: 'rs-nav-bar',
  components: {
    RsLogo,
  },
  props: [
    'routes',
    'spacing',
    'dark',
  ],
}

</script>

<style lang="scss">

.rs-nav-bar {
  width: var(--size);
  height: var(--size);

  --between-spacing: 48px;

  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;

  &__elem {
    margin-left: var(--between-spacing);

    &:first-child {
      margin-left: 0;
    }

    &-link {
      text-decoration: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>
