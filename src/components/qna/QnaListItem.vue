<template>
  <tr @click="getQna(qna.boardId)">
    <td>{{ qna.boardId }}</td>
    <td>{{ qna.subject }}</td>
    <td>{{ qna.createDate }}</td>
    <td>{{ qna.userId }}</td>
    <td>{{ qna.viewCount }}</td>
  </tr>
</template>

<script>
export default {
  name: "QnaListItem",
  props: {
    qna: Object,
  },
  methods: {
    getQna(boardId) {
      // Navigate to the detailed page with the boardId as a route parameter
      this.$router.push(`/qna/detail/${boardId}`);
    },
  },
};
</script>

<style></style>
