<template>
    <div class="m-2" style="display: flex; align-items: center">
      <div
        class="card mb-3"
        style="max-width: 540px"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="thumnailImage"
              class="img-fluid rounded-start"
              alt="Trip Image"
              style="height: 100%"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body p-2">
              <div class="card-title">{{ trip.title }}</div>
              <p class="card-text">
                <small class="text-body-secondary">{{ trip.addr1 }}</small>
              </p>
            </div>
            <div class="m-1">
                <button @click='selectLike(trip.contentId)' class = "btn btn-primary ps-2 pe-2 pt-1 pb-1" style='width: fit-content; height: fit-content'>추천받기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: {

    },
    data() {
      return {
        isColor: false,
        thumnailImage: "", // 초기 이미지 경로 설정
      };
    },
    props: {
      trip: Object,
    },
    created() {
      this.thumnailImage =
        this.trip.firstImage !== ""
          ? this.trip.firstImage
          : require("@/assets/noimage.jpg");
    },
    updated() {
      // 이미지 경로를 조건에 따라 설정
      this.thumnailImage =
        this.trip.firstImage !== ""
          ? this.trip.firstImage
          : require("@/assets/noimage.jpg");
    },
    methods: {
      colorChange(flag) {
        this.isColor = flag;
      },
    selectLike() {
        this.$emit('setLike', this.trip.contentId);
    }
    },
  };
  </script>
  
  <style scoped>
  .apt {
    width: 50px;
  }
  
  .apt-info-div div {
    white-space: nowrap;
    width: 401px;
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
  