<template>
  <div v-if="tripList && tripList.length != 0">
    <draggable :list="localTripList">
      <div v-for="(element,index) in localTripList" :key="index">
        <like-trip-list-item :trip="element" />
      </div>
    </draggable>
  </div>
  <div v-else>
    <div>아직 아무것도 고르지 않았습니다.</div>
  </div>
</template>

<script>
import LikeTripListItem from "./LikeTripListItem.vue";
import { VueDraggableNext } from 'vue-draggable-next'
export default {
  data() {
    return {
      localTripList: [...this.tripList] // Prop을 로컬 데이터로 복제
    };
  },
  components: { draggable : VueDraggableNext, LikeTripListItem },
  props: {
    tripList: Array,
  },
  watch: {
    tripList: {
      handler(newList) {
        this.localTripList = [...newList];
      },
      deep: true
    },
  },
}
</script>

<style scoped>
/* 추가적인 스타일링이 필요하면 여기에 추가하세요 */
</style>
