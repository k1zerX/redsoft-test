<template lang="pug">

div(
  block="rs-preloader"
)

</template>

<script>

export default {
  name: 'rs-preloader',
}

</script>

<style lang="scss">

.rs-preloader {
  --size: 30px;
  $width: calc(var(--size) / 20);
  $space-before: calc(var(--size) / 10);
  $space-after: calc(var(--size) / 4);
  --color: var(--rs-color-on-primary);

  @mixin rs-preloader {
    border-radius: 50%;
    border: $width solid rgba(0, 0, 0, 0.0);
    border-bottom-color: var(--color);
    border-top-color: var(--color);
    animation: rs-preloader 0s linear infinite;
  }

  height: var(--size);
  width: var(--size);
  position: relative;
  display: inline-block;
  @include rs-preloader;
  animation-duration: 4s;

  &::before {
    @include rs-preloader;
    animation-duration: 3s;
    content: "";
    position: absolute;
    top: $space-before;
    left: $space-before;
    bottom: $space-before;
    right: $space-before;
  }

  &::after {
    @include rs-preloader;
    animation-duration: 2s;
    content: "";
    position: absolute;
    top: $space-after;
    left: $space-after;
    bottom: $space-after;
    right: $space-after;
  }
}

@keyframes rs-preloader {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rs-preloader_done {
  to {
  }
}

</style>
