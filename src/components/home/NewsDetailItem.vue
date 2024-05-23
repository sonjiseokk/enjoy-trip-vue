<script setup>
import { defineProps } from 'vue';

const props = defineProps(['news']);
console.log(props.news.title);

function formatDate(dateString) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

    const date = new Date(dateString);
    const day = days[date.getDay()];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${year}년 ${month} ${dayOfMonth}일 (${day}) ${ampm} ${hours}시 ${strMinutes}분`;
}

const formattedDate = formatDate(props.news.pubDate);
</script>

<template>
    <!-- <div class="card text-center" style="width: 400px; height: 500px">
        <div class="card-body">
            <h3 class="card-title" v-html='props.news.title'></h3>
            <p class="card-text" v-html='props.news.description'></p>
            <a :href="props.news.link" class="btn btn-secondary">보러가기</a>
        </div>
    </div> -->
    <div class="card text-center" style="width: 400px; height: 450px;">
        <div class="card-body d-flex flex-column justify-content-between" style="height: 100%;">
            <div class="align-self-start">
                <h3 class="card-title text-primary" v-html="props.news.title"></h3>
                <p class="card-text" v-html="formattedDate"></p>
            </div>
            <div>
                <p class="card-text" v-html="props.news.description"></p>
            </div>
            <div class="align-self-end">
                <a :href="props.news.link" class="btn btn-secondary">보러가기</a>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>