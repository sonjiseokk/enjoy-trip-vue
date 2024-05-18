<template>
    <button class="like-button">
        <i class="bi bi-hand-thumbs-up"></i> Like
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
      .like-button {
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        margin-bottom: 10px;
        margin-left: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #007bff;
        background-color: transparent;
        border: 1px solid #007bff;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .like-button:hover {
        background-color: #007bff;
        color: #fff;
      }
      .like-button .bi {
        margin-right: 5px;
      }
</style>