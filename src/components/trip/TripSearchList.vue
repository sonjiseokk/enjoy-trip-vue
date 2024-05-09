<template>
    <div v-if="tripList && tripList.length != 0">
      <trip-search-list-item
        v-for="(trip, index) in tripList"
        :key="index"
        :trip="trip"
      />
    </div>
    <div v-else>
      <h4>검색 목록이 없습니다.</h4>
    </div>
  </template>

<script>
import TripSearchListItem from './TripSearchListItem.vue'
export default {
  components: { TripSearchListItem },
    props : {
        tripList : Array,
    }
}
</script>

<style>

</style>