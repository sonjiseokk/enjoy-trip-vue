<template>
    <div>
        <div class="page-header min-vh-40 relative">
            <div class="container absolute">
                <div class="row">
                    <div class="text-light col-md-7 text-center mx-auto">
                        <h3>Q & A</h3>
                    </div>
                </div>
            </div>
        </div>
        <section class="card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
export default {
    name: "QnaView",
};
</script>

<style></style>
