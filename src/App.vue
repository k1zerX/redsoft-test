<template lang="pug">
  div(
    block="rs-app"
  )
    rs-header(
      elem="header"
      :routes="routes"
    )
    router-view(
      elem="content"
    )
    rs-footer(
      elem="footer"
      :routes="routes"
      :contacts="contacts"
    )
</template>

<script>

import RsHeader from '@/components/rs-header.vue';
import RsFooter from '@/components/rs-footer.vue';

export default {
  name: 'rs-app',
  components: {
    RsHeader,
    RsFooter,
  },
  data() {
    return {
      routes: [
        {
          path: '/',
          name: 'Каталог',
        },
        {
          path: '/delivery',
          name: 'Доставка',
        },
        {
          path: '/payment',
          name: 'Оплата',
        },
        {
          path: '/contacts',
          name: 'Контакты',
        },
        {
          path: '/about',
          name: 'О галерее',
        },
      ],
      contacts: [
        {
          icon: 'fa fa-phone',
          text: '+7 (495) 555-55-55'
        },
        {
          icon: 'fa fa-map-marker',
          text: 'г. Москва, ул. Расплетина, 24',
        },
      ],
    };
  },
}

</script>

<style lang="scss">

:root {
  --rs-color-primary: #5b3a32;
  --rs-color-on-primary: #f4f6f9;
  --rs-color-primary-dark: #403432;
  --rs-color-primary-light: #776763;
  --rs-color-background: #f6f3f3;
  --rs-color-on-background: #343030;
  --rs-color-secondary: #eceaea;
  --rs-color-on-secondary: #555555;
  --rs-color-neutral: #e1e1e1;
  --rs-color-neutral-text: #9f9f9f;
  --rs-color-neutral-active: #b5b5b5;

  @media only screen and (min-width: 1200px) {
    --rs-page-padding: 0 352px;
    --rs-page-padding: 0 24px;

    --rs-header-height: 96px;
    --rs-footer-height: 96px;
    --rs-header-padding: var(--rs-page-padding);
    --rs-footer-padding: var(--rs-page-padding);
    --rs-header-spacing: 48px;
    --rs-footer-spacing: 48px;
    --rs-logo-size: 48px;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

@mixin h-font {
  font-family: 'Merriweather', serif;
  font-style: normal;
  line-height: 150%;
}

.h {
  &1 {
    @include h-font;
    font-size: 24px;
    font-weight: bold;
  }

  &2 {
    @include h-font;
    font-size: 18px;
    font-weight: normal;
  }

  &3 {
    @include h-font;
    font-size: 16px;
    font-weight: bold;
  }

  &4 {
    @include h-font;
    font-size: 14px;
    font-weight: bold;
  }

  &5 {
    @include h-font;
    font-size: 14px;
    font-weight: normal;
  }

  &6 {
    @include h-font;
    font-size: 14px;
    font-weight: 300;
  }
}

h1 {
  @extend .h1;
  color: var(--rs-color-on-background);
}

h2 {
  @extend .h2;
  color: var(--rs-color-on-background);
}

h3 {
  @extend .h3;
  color: var(--rs-color-on-background);
}

h4 {
  @extend .h4;
  color: var(--rs-color-on-background);
}

h5 {
  @extend .h5;
  color: var(--rs-color-on-background);
}

h6 {
  @extend .h6;
  color: var(--rs-color-on-background);
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  background: var(--rs-color-background);
}

.rs-app {
  height: 100%;
  display: grid;
  grid-template-areas: "header"
                       "content"
                       "footer";
  grid-template-rows: auto 1fr auto;

  &__header {
    grid-area: header;
  }

  &__content {
    grid-area: content;
    padding: var(--rs-page-padding);
  }

  &__footer {
    grid-area: footer;
  }

}

</style>
