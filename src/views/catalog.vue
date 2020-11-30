<template lang="pug">

div(
  block="rs-catalog"
)
  h1(
    elem="title"
  ) Картины эпохи Возрождения
  div(
    elem="content"
  )
    rs-painting-card(
      elem="content-painting-card"
      v-for="(painting, id) in paintings"
      :key="`rs-painting_${id}`"
      v-bind="painting"
    )

</template>

<script>

import RsPaintingCard from '@/components/rs-painting-card.vue';

export default {
  name: 'rs-catalog',
  components: {
    RsPaintingCard,
  },
  data() {
    return {
      paintings: [
        {
          id: '0',
          name: 'Рождение Венеры',
          author: 'Сандро Боттичелли',
          price: '2 000 000 $',
          discounted: '1 000 000 $',
          isSold: false,
        },
        {
          id: '1',
          name: 'Тайная вечеря',
          author: 'Леонардо да Винчи',
          price: '3 000 000 $',
          discounted: '',
          isSold: false,
        },
        {
          id: '2',
          name: 'Сотворение Адама',
          author: 'Микеладжело',
          price: '6 000 000 $',
          discounted: '5 000 000 $',
          isSold: false,
        },
        {
          id: '3',
          name: 'Урок анатомии',
          author: 'Рембрандт',
          price: '',
          discounted: '',
          isSold: true,
        },
      ],
    };
  },
}

</script>

<style lang="scss">

.rs-catalog {
  &__title {
    margin-top: 45px;
    margin-bottom: 7px;
  }

  &__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    &-painting-card {
      margin-top: 32px;
    }
  }
}

</style>
