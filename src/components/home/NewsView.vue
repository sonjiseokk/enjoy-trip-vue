<script setup>
import { ref, onMounted } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import http from "@/api/http-common";

import NewsDetailItem from './NewsDetailItem.vue';

const newsList = ref([]);

onMounted(() => {
    http.get(`/api/news/list/여행지`)
        .then((response) => {
          newsList.value = response.data.data;
        })
        .catch((error) => {
          alert(error.message);
        });
})

</script>

<template>
    <div class="row" style='height: 600px; margin-top: 80px'>
        <h1>관광지에 대한 뉴스도 확인해보세요!</h1>
        <div class="carousel-container">
            <Carousel :itemsToShow="3">
            <template v-slot:default="{ prev, next }">
                <Slide v-for="(news, index) in newsList" :key="index">
                    <NewsDetailItem :news="news"> </NewsDetailItem>
                </Slide>
                <button @click="prev" class="carousel-button prev-button">‹</button>
                <button @click="next" class="carousel-button next-button">›</button>
            </template>
            </Carousel>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
  max-width: 1700px; /* 캐러셀의 최대 너비를 설정 */
  margin: auto; /* 가운데 정렬 */
  position: relative; /* 버튼 위치를 위해 추가 */
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>