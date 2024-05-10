<template>
    <tr @click="getNotice(notice.boardId)">
        <td>{{ notice.boardId }}</td>
        <td>{{ notice.subject }}</td>
        <td>{{ notice.createDate }}</td>
        <td>{{ notice.userId }}</td>
        <td>{{ notice.viewCount }}</td>
    </tr>
</template>

<script>

export default {
    name: "NoticeListItem",
    props: {
        notice: {},
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