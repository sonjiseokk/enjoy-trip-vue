<template>
    {{ title }}
</template>

<script>
export default {
    props : {
        title : String,
    },
    mounted() {
        console.log('나오니')
        console.log(this.title);
    },
}
</script>

<style scoped>
#content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 50px;
    min-height: 50px;
}
</style>