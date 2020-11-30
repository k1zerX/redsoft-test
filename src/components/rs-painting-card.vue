<template lang="pug">

div(
  block="rs-painting-card"
  :class="cardMods"
)
  img(
    elem="image"
    :src="require(`@/assets/paintings/${id}.png`)"
  )
  span.h2(
    elem="title"
  ) {{ title }}
  span.h3(
    elem="price"
    v-if="!isSold && !discounted"
  ) {{ price }}
  span.h6(
    elem="non-discount"
    v-if="!isSold && discounted"
  ) {{ price }}
  span.h3(
    elem="discount"
    v-if="!isSold && discounted"
  ) {{ discounted }}
  rs-button(
    elem="button"
    v-if="!isSold"
    :class="buttonMods"
    @click.native="toBasket()"
  )
    span(
      v-if="!loading && inBasket"
    )
      i.fa.fa-check
      span В корзине
    span(
      v-if="!loading && !inBasket"
    ) Купить
    rs-preloader(
      v-if="loading"
    )
  span.h3(
    elem="placeholder"
    v-if="isSold"
  ) Продана на аукционе

</template>

<script>

import RsButton from '@/components/rs-button.vue';
import RsPreloader from '@/components/rs-preloader.vue';

export default {
  name: 'rs-painting-card',
  components: {
    RsButton,
    RsPreloader,
  },
  props: [
    'id',
    'name',
    'author',
    'price',
    'discounted',
    'isSold',
  ],
  data() {
    const { $store, id } = this;
    $store.commit('BASKET_GET', { id });
    const val = $store.state.basket[id];
    return {
      inBasket: $store.state.basket[id],
      loading: false,
    };
  },
  computed: {
    title() {
      return `«${this.name}»\n${this.author}`;
    },
    cardMods() {
      let mod = this.isSold ? 'sold'
              : this.discounted ? 'discounted'
              : '';
      return mod ? `rs-painting-card_${mod}` : '';
    },
    buttonMods() {
      return this.inBasket ? 'rs-button_bright' : '';
    },
  },
  methods: {
    async toBasket() {
      const { $store, id } = this;
      this.loading = true;

      let res = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
      await new Promise(resolve => setTimeout(resolve, 2000)); // anough to appreciate the beauty of the preloader


      this.inBasket = !this.inBasket;
      $store.commit('BASKET_SET', { id, value: this.inBasket });
      this.loading = false;
    },
  },
}

</script>

<style lang="scss">

.rs-painting-card {
  --width: 280px;
  --height: 330px;
  --img-height: 160px;
  --content-padding: 24px;

  width: var(--width);
  height: var(--height);
  border: 1px solid var(--rs-color-neutral);
  color: var(--rs-color-on-background);
  display: grid;
  align-items: center;
  grid-template-areas: "image  image  image   image"
                       ".      title  title   .    "
                       ".      price  button  .    "
                       ".      .      .       .    ";
  grid-template-columns: var(--content-padding) 1fr auto var(--content-padding);
  grid-template-rows: auto
                      1fr
                      auto
                      var(--content-padding);

  &_sold {
    color: var(--rs-color-neutral-text);
    grid-template-areas: "image  image        image"
                         ".      title        .    "
                         ".      placeholder  .    "
                         ".      .            .    ";
    grid-template-columns: var(--content-padding) 1fr var(--content-padding);
    grid-template-rows: auto
                        1fr
                        auto
                        var(--content-padding);

    &::after {
      width: var(--width);
      height: var(--img-height);
      background: var(--rs-color-neutral);
      opacity: 0.5;
      position: absolute;
      content: "";
    }
  }

  &_discounted {
    grid-template-areas: "image  image         image   image"
                         ".      title         title   .    "
                         ".      non-discount  button  .    "
                         ".      discount      button  .    "
                         ".      .             .       .    ";
    grid-template-columns: var(--content-padding) 1fr 1fr var(--content-padding);
    grid-template-rows: auto
                        1fr
                        auto
                        auto
                        var(--content-padding);
  }

  &__image {
    grid-area: image;
    width: var(--width);
    height: var(--img-height);
  }

  &__title {
    grid-area: title;
    align-self: start;
    white-space: pre-wrap;
    margin-top: 20px;
  }

  &__price {
    grid-area: price;
  }

  &__non-discount {
    grid-area: non-discount;
    text-decoration: line-through;
    color: var(--rs-color-neutral-text);
  }

  &__discount {
    grid-area: discount;
  }

  &__button {
    grid-area: button;
    justify-self: end;
    align-self: end;
  }

  &__placeholder {
    grid-area: placeholder;
    margin: 12px 0;
  }
}

</style>
