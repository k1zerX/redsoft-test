<template lang="pug">

div(
  block="rs-contacts"
)
  span(
    elem="contact"
    v-for="(contact, id) in contacts"
    :key="`rs-contact_${id}`"
  )
    i(
      elem="contact-icon"
      :class="contact.icon"
    )
    span.h5(
      elem="contact-text"
    ) {{ contact.text }}

</template>

<script>

export default {
  name: 'rs-contacts-bar',
  props: [
    'contacts'
  ],
}

</script>

<style lang="scss">

@import url('~@/assets/font-awesome/css/font-awesome.min.css');

.rs-contacts {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;

  &__contact {
    margin-left: 51px;

    &:first-child {
      margin-left: 0;
    }

    &-icon {
      margin-right: 10px;
    }
  }
}

</style>
