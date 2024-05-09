<template>
    <tr @click="getNotice(notice.num)">
        <td>{{ notice.num }}</td>
        <td>{{ notice.title }}</td>
        <td>{{ notice.regdate }}</td>
        <td>{{ notice.count }}</td>
    </tr>
</template>

<script>

export default {
    name: "NoticeListItem",
    props: {
        notice: {},
    },
    methods : {
        getNotice(){
            
        }
    }

};
</script>

<style></style>