<template lang="pug">

footer(
  block="rs-footer"
)
  rs-nav-bar(
    :routes="routes"
    dark="true"
  )
  rs-contacts-bar(
    :contacts="contacts"
  )

</template>

<script>

import RsNavBar from '@/components/rs-nav-bar.vue';
import RsContactsBar from '@/components/rs-contacts-bar.vue';

export default {
  name: 'rs-footer',
  components: {
    RsNavBar,
    RsContactsBar,
  },
  props: [
    'routes',
    'contacts',
  ],
}

</script>

<style lang="scss">

.rs-footer {
  --height: var(--rs-footer-height);
  --padding: var(--rs-footer-padding);

  height: var(--height);
  padding: var(--padding);
  background: var(--rs-color-secondary);
  color: var(--rs-color-on-secondary);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

</style>
