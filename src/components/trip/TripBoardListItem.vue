<template>
    <tr @click="getTrip(trip.contentId)">
      <td>{{ trip.boardId }}</td>
      <td>{{ trip.subject }}</td>
      <td>{{ trip.createDate }}</td>
      <td>{{ trip.userId }}</td>
      <td>{{ trip.viewCount }}</td>
    </tr>
  </template>
  
  <script>
  export default {
    name: "tripListItem",
    props: {
      trip: {},
    },
    methods: {
      getTrip(contentId) {
        this.$router.push({
          path: `/tripboard/${contentId}/detail/${contentId}`,
          state: this.trip
        });
      },
    },
  };
  </script>
  
  <style></style>
  