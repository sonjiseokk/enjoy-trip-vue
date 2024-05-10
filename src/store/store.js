import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      lat: 37.566826,
      lng: 126.9786567,
      mapTripTitle : '기본 위치',
      detailOpen : false,
      clickedTrip: {},
      session: {},
    };
  },
  mutations: {
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
    setSession(state, payload) {
      state.session = payload.session;
    },
    removeSession(state) {
      state.session = {};
    }
  },
})

export default store;