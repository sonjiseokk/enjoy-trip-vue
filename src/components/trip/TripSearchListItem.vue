<template>
    <div
    class="m-2"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
    style="display: flex; align-items: center"
  >
  <div class="apt-icon-div">
    <i class="bi bi-house-door-fill apt-icon"></i>
  </div>

    <div class="apt-info-div">
      <div style="text-overflow: ellipsis">
        [{{ trip.title }}]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isColor : false,
    }
  },
  created(){
    console.log(this.trip);
  },
  methods : {
    colorChange(flag) {
      this.isColor = flag;
    },
  },
  props : {
    trip : Object
  }
}
</script>

<style scoped>
.apt {
  width: 50px;
}

.apt-info-div div {
  white-space: nowrap;
  width: 278px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 16px;
}
.mouse-over-bgcolor {
  background-color: rgb(214, 211, 211);
}
.apt-icon-div {
  margin: 8px 21px 8px 15px;
}
.apt-icon {
  font-size: 25px;
  color: #2196f3;
}
</style>