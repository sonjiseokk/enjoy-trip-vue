<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import {
  KakaoMap,
  KakaoMapMarker,
  KakaoMapMarkerPolyline,
} from "vue3-kakao-maps";
import http from "@/api/http-common";

const store = useStore();
const likeList = ref([]);
const orderedList = ref([]);
const markerList = ref([]);

const lat = computed(() => store.state.likelat);
const lng = computed(() => store.state.likelng);

onMounted(() => {
  http
    .get(`/api/member/mylike`)
    .then((response) => {
      likeList.value = response.data.data;
    })
    .catch((error) => {
      alert(error.message);
    });
});

const optimalPath = (id) => {
  http
    .post(`/api/member/optimalpath`, id)
    .then((response) => {
      orderedList.value = [];
      markerList.value = [];

      orderedList.value = response.data.data;
      console.log(response.data.data);

      if (orderedList.value && orderedList.value.length > 0) {
        for (var i = 0; i < orderedList.value.length; i++) {
          markerList.value.push({
            lat: orderedList.value[i].latitude,
            lng: orderedList.value[i].longitude,
          });
        }
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>

<template>
  <div>
    <div id="map">
      <KakaoMap
        :lat="lat"
        :lng="lng"
        :level="12"
        :draggable="true"
        style="width: 100%; height: 100vh"
      >
        <KakaoMapMarker :lat="lat" :lng="lng">
          <template v-slot:infoWindow
            ><div style="padding: 10px; margin-bottom: 10px">
              {{ $store.state.likeTripTitle }}
            </div></template
          >
        </KakaoMapMarker>

        <KakaoMapMarker
          v-for="item in likeList"
          :key="item.contentId"
          :lat="item.latitude"
          :lng="item.longitude"
          :clickable="true"
        >
          <template v-slot:infoWindow
            ><div
              style="padding: 10px; margin-bottom: 10px"
              @click="optimalPath(item.contentId)"
            >
              {{ item.title }}
            </div></template
          >
        </KakaoMapMarker>

        <KakaoMapMarkerPolyline :markerList="markerList" :endArrow="true" />
      </KakaoMap>
    </div>
  </div>
</template>

<style scss>
#map {
  width: 100vw;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 12px;
}
.map_wrap {
  position: absolute;
  height: 350px;
  top: 181px;
  right: 80px;
}
#category {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
}
#category li {
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}
#category li.on {
  background: #eee;
}
#category li:hover {
  background: #ffe6e6;
  border-left: 1px solid #acacac;
  margin-left: -1px;
}
#category li:last-child {
  margin-right: 0;
  border-right: 0;
}
#category li span {
  display: block;
  margin: 0 auto 3px;
  width: 27px;
  height: 28px;
}
/* #category li .category_bg {
  background: url("@/assets/img/marker/places_category.png") no-repeat;
} */
#category li .bank {
  background-position: -10px 0;
}
#category li .mart {
  background-position: -10px -36px;
}
#category li .pharmacy {
  background-position: -10px -72px;
}
#category li .oil {
  background-position: -10px -108px;
}
#category li .cafe {
  background-position: -10px -144px;
}
#category li .store {
  background-position: -10px -180px;
}
#category li.on .category_bg {
  background-position-x: -46px;
}
.placeinfo_wrap {
  position: absolute;
  bottom: 28px;
  left: -150px;
  width: 300px;
}
.placeinfo {
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  background: #fff;
}
.placeinfo:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.placeinfo_wrap .after {
  content: "";
  position: relative;
  margin-left: -12px;
  left: 50%;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.placeinfo a,
.placeinfo a:hover,
.placeinfo a:active {
  color: #fff;
  text-decoration: none;
}
.placeinfo a,
.placeinfo span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.placeinfo span {
  margin: 5px 5px 0 5px;
  cursor: default;
  font-size: 13px;
}
.placeinfo .title {
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px 6px 0 0;
  margin: -1px -1px 0 -1px;
  padding: 10px;
  color: #fff;
  background: #d95050;
  background: #d95050
    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}
.placeinfo .tel {
  color: #0f7833;
}
.placeinfo .jibun {
  color: #999;
  font-size: 11px;
  margin-top: 0;
}
.wrap {
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
.info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
}
.info .close:hover {
  cursor: pointer;
}
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
.info:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.info .link {
  color: #5085bb;
}
</style>
