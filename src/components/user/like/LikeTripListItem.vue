<template>
  <div class="m-2" style="display: flex; align-items: center">
    <div
      class="card mb-3"
      style="max-width: 540px"
      @mouseover="colorChange(true)"
      @mouseout="colorChange(false)"
      :class="{ 'mouse-over-bgcolor': isColor }"
      @click="cardClick(trip)"
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
          <div class="card-body">
            <div class="card-title">{{ trip.title }}</div>
            <p class="card-text">
              <small class="text-body-secondary">{{ trip.address }}</small>
            </p>
          </div>
          <div class="row g-1">
            <liked-button :contentId="trip.contentId"></liked-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikedButton from "@/components/user/like/LikedButton.vue";
export default {
  components: {
    LikedButton,
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
    cardClick() {
      this.$store.commit("changeMap", {
        lat: this.trip.latitude,
        lng: this.trip.longitude,
      });
      this.$store.commit("changeTitle", { title: this.trip.title });
      this.$store.commit("openDetail");
      this.$store.commit("clickTrip", { trip: this.trip });
    },
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
