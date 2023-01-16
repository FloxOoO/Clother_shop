<template>
  <div class="popup">
    <slot> {{ popupText }} </slot>
  </div>
</template>
<script>
export default {
  name: 'MainHeaderPopup',
  props: {
    popupText: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.popup {
  position: absolute;
  padding: 20px;
  background-color: white;
  color: black;
  height: 130px;
  width: 300px;
  border: 1px solid grey;
  box-shadow: 0px 0px 5px 1px grey;
  line-height: 20px;
}
</style>