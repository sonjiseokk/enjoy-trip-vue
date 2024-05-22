<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import http from "@/api/http-common";

import AiLikeListItem from "./AiLikeListItem.vue";

const tripList = ref([]);

const emit = defineEmits(['setLike'])
const setLike = (newValue) => {
    emit('setLike', newValue);
}

onMounted(() => {
    http.get(`/api/member/mylike`)
        .then((response) => {
            console.log(response.data.data)
            tripList.value = response.data.data;
        })
        .catch((error) => {
            alert(error.message); 
        });
})
</script>

<template>
    <div>
        <div class="card text-center">
            <div class="card-header">
                내 관광지
            </div>
            <div class="card-body">
                <div v-for="(element,index) in tripList" :key="index">
                    <ai-like-list-item :trip="element" @setLike='setLike'/>
                </div>
            </div>
            <div class="card-footer text-muted">
                목록에서 여행지를 선택하고<br>비슷한 관광지를 추천받아보세요
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>