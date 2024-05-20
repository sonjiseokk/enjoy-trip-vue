<template>
    <div v-if="tripList && tripList.length != 0">
      <like-trip-list-item
        v-for="(trip, index) in tripList"
        :key="index"
        :trip="trip"
      />
    </div>
    <div v-else>
      <div>아직 아무것도 고르지 않았습니다.</div>
    </div>
  </template>

<script>
import LikeTripListItem from "./LikeTripListItem.vue";
export default {
  components: { LikeTripListItem },
    props : {
        tripList : Array,
    }
}
</script>

<style>

</style>