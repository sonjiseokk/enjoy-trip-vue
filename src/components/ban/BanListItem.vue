<template>
  <tr @click="getBan(ban.boardId)">
    <td>{{ ban.boardId }}</td>
    <td>{{ getType(ban.boardTypeId) }}</td>
    <td>{{ ban.subject }}</td>
    <td>{{ ban.createDate }}</td>
    <td>{{ ban.userId }}</td>
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
    getType(boardTypeId) {
      if (boardTypeId === 1) {
        return "공지사항";
      }
      else if (boardTypeId === 2) {
        return "QNA";
      }
      else {
        return "여행후기";
      }
    }
  },
};
</script>

<style></style>
