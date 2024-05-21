<template>
    <div>
        <div class="page-header min-vh-40 relative">
        <div class="container absolute">
            <div class="row">
            <div class="text-light col-md-7 text-center mx-auto">
                <h3>여행후기</h3>
            </div>
            </div>
        </div>
        </div>
        <section class="row d-flex flex-row card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
            <div class="card col-3">
                <img :src='trip.thumnailImage' class="card-img-top mt-5" alt="...">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pb-2">
                        <h5 class = 'mt-5'>{{ trip.title }}</h5>
                        <div class = 'mt-5'>{{ trip.address }}</div>
                    </li>
                    <li class="list-group-item pt-2">
                        <div class="card-body">
                            <p class="card-text">{{tripDescription.overview}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class = "col-9">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import http from "@/api/http-common";

const trip = ref({});
const tripDescription = ref({});
const route = useRoute();

onMounted(() => {
    http.get(`/api/trip/find?contentId=` + route.params.id)
        .then((response) => {
            trip.value = response.data;
        })
        .catch((error) => {
            alert(error.message);
        });

    http.get(`/api/trip/view?contentId=` + route.params.id )
        .then((response) => {
            tripDescription.value = response.data;
            console.log(response.data);
        })
        .catch((error) => {
            alert(error.message);
        });
})

watch(trip, async () => {
    http.get(`/api/trip/find?contentId=` + route.params.id)
        .then((response) => {
            trip.value = response.data;
        })
        .catch((error) => {
            alert(error.message);
        });

    http.get(`/api/trip/view?contentId=` + route.params.id )
        .then((response) => {
            tripDescription.value = response.data;
            console.log(response.data);
        })
        .catch((error) => {
            alert(error.message);
        });
})

// onUpdated(() => {
//     http.get(`/api/trip/find?contentId=` + route.params.id)
//         .then((response) => {
//             trip.value = response.data;
//         })
//         .catch((error) => {
//             alert(error.message);
//         });

//     http.get(`/api/trip/view?contentId=` + route.params.id )
//         .then((response) => {
//             tripDescription.value = response.data;
//             console.log(response.data);
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// })

</script>

<style></style>
