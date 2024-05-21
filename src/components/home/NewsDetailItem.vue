<script setup>
import { defineProps } from 'vue';

const props = defineProps(['news']);
console.log(props.news.title);
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
                <p class="card-text" v-html="props.news.pubDate"></p>
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