import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      jwt : {},
      lat: 37.566826,
      lng: 126.9786567,
      mapTripTitle : '기본 위치',
      detailOpen : false,
      clickedTrip: {},
      session: {},

      markerInfoList : [
        { name: "기본 위치" ,lat: 37.566826, lng: 126.9786567 }
      ],
    };
  },
  mutations: {
    getDefaultInfoList(state){
      state.markerInfoList = [
        { name: "기본 위치" ,lat: 37.566826, lng: 126.9786567 }
      ];
    },
    // `state`를 첫 번째 매개변수로 받고, 두 번째 매개변수로 `payload`를 받습니다.
    changeMap(state, payload) {
      state.lat = payload.lat;
      state.lng = payload.lng;
    },
    changeTitle(state,payload){
        state.mapTripTitle = payload.title;
    },
    openDetail(state){
        state.detailOpen = true;
        console.log("Detail is open:", state.detailOpen);
    },
    closeDetail(state){
        state.detailOpen = false;
    },
    clickTrip(state,payload){
        state.clickedTrip = payload.trip;
    },
    // JWT 인증
    setJwt(state,payload){
      console.log("저장하는 값은" + JSON.stringify(payload.jwt));
      state.jwt = JSON.stringify(payload.jwt);
      sessionStorage.setItem('jwt', state.jwt);
      localStorage.setItem('jwt',state.jwt)
      console.log(state.jwt);
    },

    placeMarkers(state, payload){
      state.markerInfoList = [];
      console.log(payload.data);
      payload.data.forEach((location) => {
        // location 객체에서 lat와 lng를 직접 추가합니다.
        state.markerInfoList.push({ name : location.title, lat: location.latitude, lng: location.longitude });
      });

      console.log(state.markerInfoList);
    }
  },
})

export default store;
