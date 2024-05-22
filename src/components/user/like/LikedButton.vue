<template>
    <button :class="['like-button', { liked: liked }]" @click="liked ? cancelLike() : doLike()">
      <i :class="liked ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'"></i> 
      {{ liked ? 'Liked' : 'Like' }}
    </button>
  </template>
  
  <script>
  import http from "@/api/http-common";
  
  export default {
    props: {
      contentId: Number
    },
    data() {
      return {
        liked: true
      };
    },
    updated(){
      http.get(`/api/member/like/${this.contentId}`)
      .then((response) => {
        if (response.data.data == true){
          this.liked = true;
        } else{
          this.liked = false;
        }
      })
      .catch((e) =>  console.error(e));
    },
    methods: {
      doLike() {
        http.post(`/api/member/like/${this.contentId}`)
        .then((response) => {
          if (response.status === 200) {
            this.liked = true;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },
      cancelLike(){
        http.delete(`/api/member/like/${this.contentId}`)
        .then((response) => {
          if (response.status === 200) {
            this.liked = false;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .like-button {
    width: 80px;
    display: inline-flex;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 10px;
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
  .like-button.liked {
    background-color: #007bff;
    color: #fff;
  }
  .like-button .bi {
    margin-right: 5px;
  }
  </style>
  