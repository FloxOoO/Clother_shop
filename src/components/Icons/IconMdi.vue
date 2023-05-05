<template>
  <svg class="base-icon" xnlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path :d="icon"></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.base-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  width: 24px;
  height: 24px;
}
</style>