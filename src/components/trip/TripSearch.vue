<template>
    <div>
      <div style="height: 100px"></div>
      <div class="map-select-div">
        <select class="form-control" v-model="sido" @change="gugunList">
          <option value="all">시/도</option>
          <option v-for="(sido, index) in sidos" :key="index" :value="sido">
            {{ sido }}
          </option>
        </select>
        <select class="form-control" v-model="gugun" @change="dongList">
          <option value="all">구/군</option>
          <option v-for="(gugun, index) in guguns" :key="index" :value="gugun">
            {{ gugun }}
          </option>
        </select>
        <select class="form-control" v-model="landMark" @change="houseList">
          <option value="all">관광지</option>
          <option v-for="(dong, index) in dongs" :key="index" :value="dong">
            {{ dong }}
          </option>
        </select>
      </div>
      <div class="map-name-div">
        <div>
          <input
            type="text"
            class="form-control name-search"
            placeholder="관광지명"
            style="width: 256px"
            v-model="name"
          />
        </div>
        <div>
          <button class="btn btn-primary" style="margin: 0" @click="nameList">
            검색
          </button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    data() {
    return {
      sido: "all",
      gugun: "all",
      landMark: "all",
      name: "",
    };
  },
}
</script>

<style>
.map-select-div {
  display: flex;
  justify-content: center;
}

.map-name-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
}
</style>