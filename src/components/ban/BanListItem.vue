<template>
  <tr @click="getBan(ban.boardId)">
    <td>{{ ban.boardId }}</td>
    <td>{{ ban.subject }}</td>
    <td>{{ ban.createDate }}</td>
    <td>{{ ban.userId }}</td>
    <td>{{ ban.viewCount }}</td>
  </tr>
</template>

<script>
export default {
  name: "BanListItem",
  props: {
    ban: {},
  },
  methods: {
    getBan(boardId) {
      // Navigate to the detailed page with the boardId as a route parameter
      this.$router.push(`/userpage/ban/${boardId}`);
    },
  },
};
</script>

<style></style>
