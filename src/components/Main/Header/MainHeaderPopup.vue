<template>
  <div class="popup">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MainHeaderPopup'
}
</script>
<style lang="scss" scoped>
.popup {
  position: absolute;
  z-index: 10;
  padding: 20px;
  background-color: white;
  color: black;
  height: 130px;
  width: 300px;
  border: 1px solid grey;
  box-shadow: 0px 0px 5px 1px grey;
  line-height: 20px;
  margin-left: -20px;
  @media (max-width: 976px) {
    height: 250px;
    width: 200px;
  }
}
</style>