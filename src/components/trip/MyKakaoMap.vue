<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useStore } from 'vuex';
import { KakaoMap, KakaoMapMarker, KakaoMapInfoWindow } from 'vue3-kakao-maps';
import http from "@/api/http-common";
// 위치 정보를 저장할 ref 변수
const store = useStore();

const map = ref();
const markerList = ref([]);

const trip = ref({});

const lat = computed(() => store.state.lat);
const lng = computed(() => store.state.lng);

const markerInfoList = ref(store.state.markerInfoList);

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;

  console.log(markerInfoList.value);
  /* eslint-disable */
  updateMarkers();
};
const updateMarkers = () => {
  markerList.value = []; // 마커 리스트 초기화
  const bounds = new kakao.maps.LatLngBounds();

  for (let marker of markerInfoList.value) {
    const markerItem = {
      lat: marker.lat,
      lng: marker.lng,
      infoWindow: {
        content: marker.name,
        visible: false
      }
    };
    markerList.value.push(markerItem);
    bounds.extend(new kakao.maps.LatLng(Number(marker.lat), Number(marker.lng)));
  }

  if (map.value) {
    map.value.setBounds(bounds);
  }
};

// Vuex mutation을 구독하고 mutation이 발생할 때 updateMarkers 호출
const unsubscribe = store.subscribe((mutation, state) => {
  if (mutation.type === 'placeMarkers') {
    markerInfoList.value = state.markerInfoList;
    if (map.value) {
      updateMarkers();
    }
  }
});

onMounted(() => {
  trip.value = store.state.clickedTrip;
  console.log('시작할때')
  console.log(trip.value);
});

watch(
  () => store.state.clickedTrip,
  (newVal) => {
    trip.value = newVal;
  },
  { immediate: true }
);




onUnmounted(() => {
  // 컴포넌트가 언마운트될 때 구독 해제
  unsubscribe();
});
const marker = ref();

//마커 클릭 시 인포윈도우의 visible 값을 반전시킵니다
const onClickMapMarker = (markerItem) => {
  if (markerItem.infoWindow?.visible !== null && markerItem.infoWindow?.visible !== undefined) {
    markerItem.infoWindow.visible = !markerItem.infoWindow.visible;
  } else {
    markerItem.infoWindow.visible = true;
  }
};


const showRooms = () => {
  console.log(trip.value);
  const formData = {
    contentTypeId: 32,
    sidoCode: trip.value.sidoCode,
    gugunCode: trip.value.gugunCode,
  };
  http.post('/api/trip/search', formData)
    .then((response) => {
      console.log(response.data);
      store.commit('placeMarkers', { data: response.data });
    })
    .catch((e) => {
      console.error(e);
      alert('해당 정보가 없습니다.');
    });
};

const showShopping = () => {
  console.log(trip.value);
  const formData = {
    contentTypeId: 38,
    sidoCode: trip.value.sidoCode,
    gugunCode: trip.value.gugunCode,
  };
  http.post('/api/trip/search', formData)
    .then((response) => {
      console.log(response.data);
      store.commit('placeMarkers', { data: response.data });
    })
    .catch((e) => {
      console.error(e);
      alert('해당 정보가 없습니다.');
    });
};

const showRestaurant = () => {
  console.log(trip.value);
  const formData = {
    contentTypeId: 39,
    sidoCode: trip.value.sidoCode,
    gugunCode: trip.value.gugunCode,
  };
  http.post('/api/trip/search', formData)
    .then((response) => {
      console.log(response.data);
      store.commit('placeMarkers', { data: response.data });
    })
    .catch((e) => {
      console.error(e);
      alert('해당 정보가 없습니다.');
    });
};

const showLeisure = () => {
  console.log(trip.value);
  const formData = {
    contentTypeId: 28,
    sidoCode: trip.value.sidoCode,
    gugunCode: trip.value.gugunCode,
  };
  http.post('/api/trip/search', formData)
    .then((response) => {
      console.log(response.data);
      store.commit('placeMarkers', { data: response.data });
    })
    .catch((e) => {
      console.error(e);
      alert('해당 정보가 없습니다.');
    });
    
};

const isEmptyObject = computed(() => {
  const isEmpty = Object.keys(trip.value).length === 0;
  console.log('isEmptyObject 값:', isEmpty);
  return isEmpty;
});
</script>




<template>
  <div>
    <div id="map">
      <KakaoMap :lat="lat" :lng="lng" :draggable="true" style="width: 100%; height: 900px;"
        @onLoadKakaoMap="onLoadKakaoMap">
        <KakaoMapMarker :lat="marker.lat" :lng="marker.lng" :infoWindow="marker.infoWindow"
          @onClickKakaoMapMarker="onClickMapMarker(marker)" :clickable="true" v-for="(marker, index) in markerList"
          :key="index" />
        <!-- <template v-slot:infoWindow>
            <div style="padding: 10px; margin-bottom: 10px;">{{$store.state.mapTripTitle}}</div>
          </template> -->
        <!-- </KakaoMapMarker> -->
        <KakaoMapInfoWindow :marker="marker" :lat="lat" :lng="lng" :visible="true">
          <div>{{ $store.state.mapTripTitle }}</div>
        </KakaoMapInfoWindow>
      </KakaoMap>
    </div>

    <div class="map_wrap" style="z-index: 3" v-show="!isEmptyObject">
      <ul id="category">
        <li id="BK9" data-order="0" @click="showRooms">
          <i class="bi bi-building" style="font-size: 25px;"></i>
          <br>
          숙박
        </li>
        <li id="MT1" data-order="1" @click="showShopping">
          <i class="bi bi-cart" style="font-size: 25px;"></i>
          <br>
          쇼핑
        </li>
        <li id="PM9" data-order="2" @click="showLeisure">
          <i class="bi bi-scooter" style="font-size: 25px;"></i>
          <br>
          레포츠
        </li>
        <li id="OL7" data-order="3" @click="showRestaurant">
          <i class="bi bi-shop" style="font-size: 25px;"></i>
          <br>
          음식점
        </li>
      </ul>
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
  background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
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