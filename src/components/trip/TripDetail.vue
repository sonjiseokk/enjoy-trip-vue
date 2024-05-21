<template>
    <div v-if="trip">
        <div class="detail-name">
            <div class="title-area">
              <h3>{{ trip.title }}</h3>
              <like-button :contentId="trip.contentId"></like-button>
            </div>
        </div>
        <div class="detail-img-div">
            <img class="sell-thumbnail" :src="thumnailImage" alt="Image 1" />
        </div>

        <!-- <router-view /> -->
        <!-- <detail-info v-if="detail_type.info"></detail-info>
        <detail-deal v-else-if="detail_type.deal"></detail-deal>
        <detail-infra v-else-if="detail_type.infra"></detail-infra> -->
    </div>
</template>

<script>

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
 
    }
}
</script>

<style scoped>
.title-area {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
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
