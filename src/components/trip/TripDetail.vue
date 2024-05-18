<template>
    <div v-if="trip">
        <div class="detail-name">
            <div class="title-area">
              <h3>{{ trip.title }}</h3>
              <like-button></like-button>
            </div>
        </div>
        <div class="detail-img-div">
            <img class="sell-thumbnail" :src="thumnailImage" alt="Image 1" />
        </div>
        <div class="detail-menu-bar">
            <button @click="showRooms" class="btn menu"
                :class="{ 'active btn-primary': false, 'btn-outline-primary': true }" id="info">
                숙박
            </button>
            <button @click="showShopping" class="btn menu"
                :class="{ 'active btn-primary': false, 'btn-outline-primary': true }">
                쇼핑
            </button>
            <button @click="showReisure" class="btn menu"
                :class="{ 'active btn-primary': false, 'btn-outline-primary': true }">
                레포츠
            </button>
            <button @click="showRestaurant" class="btn menu"
                :class="{ 'active btn-primary': false, 'btn-outline-primary': true }">
                음식점
            </button>
        </div>

        <!-- <router-view /> -->
        <!-- <detail-info v-if="detail_type.info"></detail-info>
        <detail-deal v-else-if="detail_type.deal"></detail-deal>
        <detail-infra v-else-if="detail_type.infra"></detail-infra> -->
    </div>
</template>

<script>
import http from "@/api/http-common";
import LikeButton from './LikeButton.vue';
export default {
  components: { LikeButton },
    data() {
        return {
            trip : {},
            thumnailImage : '',
        }
    },
    watch: {
        '$store.state.clickedTrip': {
            handler(newVal) {
                this.trip = newVal;
                this.thumnailImage = this.trip.thumnailImage !== '' ? this.trip.thumnailImage : require('@/assets/noimage.jpg');
            },
            immediate: true
        }
    },
    methods : {
        dispalynone(){
            this.$store.commit('closeDetail', );
        },
        showRooms(){
          console.log(this.trip);
          const formData = {
            contentTypeId : 32,
            sidoCode : this.trip.sidoCode,
            gugunCode : this.trip.gugunCode,
          }
          http.post(`/api/trip/search`,formData)
          .then((response) => {
            console.log(response.data);
            this.$store.commit('placeMarkers',{data : response.data})
          })
          .catch((e) => {
            console.error(e)
            alert('해당 정보가 없습니다.')
        });
        },
        showShopping(){
          console.log(this.trip);
          const formData = {
            contentTypeId : 38,
            sidoCode : this.trip.sidoCode,
            gugunCode : this.trip.gugunCode,
          }
          http.post(`/api/trip/search`,formData)
          .then((response) => {
            console.log(response.data);
            this.$store.commit('placeMarkers',{data : response.data})
          })
          .catch((e) => {
            console.error(e)
            alert('해당 정보가 없습니다.')
          });
          
        },
        showRestaurant(){
          console.log(this.trip);
          const formData = {
            contentTypeId : 39,
            sidoCode : this.trip.sidoCode,
            gugunCode : this.trip.gugunCode,
          }
          http.post(`/api/trip/search`,formData)
          .then((response) => {
            console.log(response.data);
            this.$store.commit('placeMarkers',{data : response.data})
          })
          .catch((e) => {
            console.error(e)
            alert('해당 정보가 없습니다.')
        });
        },
        showReisure(){
          console.log(this.trip);
          const formData = {
            contentTypeId : 28,
            sidoCode : this.trip.sidoCode,
            gugunCode : this.trip.gugunCode,
          }
          http.post(`/api/trip/search`,formData)
          .then((response) => {
            console.log(response.data);
            this.$store.commit('placeMarkers',{data : response.data})
          })
          .catch((e) => {
            console.error(e)
            alert('해당 정보가 없습니다.')
          });
        },

    }
}
</script>

<style scoped>
.title-area {
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  width: 385px !important;
}
.mouse-over-bgcolor {
  background-color: rgb(214, 211, 211);
}

.close-div {
  position: relative;
  width: 323px;
  right: -180px;
}

.close {
  background-color: #9ca3b1;
  width: 32px;
  height: 32px;
  color: white;
  padding: 9px;
  border-radius: 3px;
}

.detail-name {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail-img-div img {
  padding: 11px 11px 40px 0;
  width: 400px;
  height: 300px;
}
.detail-menu-bar {
    margin-left: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 326px;
}

.on {
  font-weight: bold;
  color: #2196f3;
}
.table td,
.table th {
  white-space: break-spaces;
}

.detail-menu-bar .menu {
  font-weight: bold;
}
.menu.active {
  background-color: #2196f3 !important;
}
</style>
