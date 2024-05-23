import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      jwt: {},
      lat: 37.566826,
      lng: 126.9786567,
      likelat: 37.566826,
      likelng: 126.9786567,
      mapTripTitle: "현재 위치",
      likeTripTitle: "현재 위치",
      detailOpen: false,
      clickedTrip: {},
      session: {},
      isLoading: false,
      markerInfoList: [],
      likeMarkerInfoList: [],
      selectedLike: "",

      isLiked : false,
    };
  },
  mutations: {
    setDefaultInfoList(state, payload) {
      state.markerInfoList = [
        { name: "현재 위치", lat: payload.lat, lng: payload.lng },
      ];
      state.lat = payload.lat;
      state.lng = payload.lng;
    },
    setCurPoint(state, payload) {
      state.likeMarkerInfoList = [
        { name: "현재 위치", lat: payload.lat, lng: payload.lng },
      ];
      state.likelat = payload.lat;
      state.likelng = payload.lng;
    },
    // `state`를 첫 번째 매개변수로 받고, 두 번째 매개변수로 `payload`를 받습니다.
    changeMap(state, payload) {
      state.lat = payload.lat;
      state.lng = payload.lng;
    },
    changeLikeMap(state, payload) {
      state.likelat = payload.lat;
      state.likelng = payload.lng;
    },
    changeTitle(state, payload) {
      state.mapTripTitle = payload.title;
    },
    changeLikeTitle(state, payload) {
      state.likeTripTitle = payload.title;
    },
    openDetail(state) {
      state.detailOpen = true;
      console.log("Detail is open:", state.detailOpen);
    },
    closeDetail(state) {
      state.detailOpen = false;
    },
    clickTrip(state, payload) {
      console.log("클릭된 trip은 ");
      console.log(payload.trip);
      state.clickedTrip = payload.trip;
    },
    // JWT 인증
    setJwt(state, payload) {
      console.log("저장하는 값은" + JSON.stringify(payload.jwt));
      state.jwt = JSON.stringify(payload.jwt);
      sessionStorage.setItem("jwt", state.jwt);
      localStorage.setItem("jwt", state.jwt);
      console.log(state.jwt);
    },

    placeMarkers(state, payload) {
      state.markerInfoList = [];
      console.log(payload.data.data);
      payload.data.data.forEach((dto) => {
        console.log(dto);
        // info 객체에서 lat와 lng를 직접 추가합니다.
        state.markerInfoList.push({
          name: dto.info.title,
          lat: dto.info.latitude,
          lng: dto.info.longitude,
        });
      });

      console.log(state.markerInfoList);
    },
    progressLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    setLiked(state, payload) {
      state.isLiked = payload;
    }

  },
  actions: {
    progressLoading({ commit }) {
      commit("progressLoading");
    },
    endLoading({ commit }) {
      commit("endLoading");
    },

    updateLiked({ commit }, payload) {
      commit("setLiked", payload);
    }
  },
});

export default store;
