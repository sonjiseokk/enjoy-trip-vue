<template>
    <tr @click="getNotice(qna.boardId)">
        <td>{{ qna.boardId }}</td>
        <td>{{ qna.subject }}</td>
        <td>{{ qna.createDate }}</td>
        <td>{{ qna.userId }}</td>
        <td>{{ qna.viewCount }}</td>
    </tr>
</template>

<script>

export default {
    name: "NoticeListItem",
    props: {
        qna: Object,
    },
    methods: {
        getNotice(boardId) {
            // Navigate to the detailed page with the boardId as a route parameter
            this.$router.push(`/notice/detail/${boardId}`);
        }
    }

};
</script>

<style></style>