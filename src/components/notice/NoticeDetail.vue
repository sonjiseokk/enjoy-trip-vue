<template>
    <div class="container text-center pt-5">
      <h4>{{ notice.subject }}</h4>
  
      <br />
      <div class="card mb-3 m-auto">
        <div class="card-header text-right" style="font-size: 0.8em">
          등록 날짜 : {{ notice.createDate }}<br />조회수 : {{ notice.viewCount }}
        </div>
        <div class="card-body" style="height: 300px">
          <p class="card-text text-left" v-html="notice.content"></p>
        </div>
      </div>
      <br />
      <div class="btn-group">
        <router-link
          v-if="userinfo.loginId != null"
          class="btn btn-dark"
          to="/notice/modify"
          >수정하기</router-link
        >
        <button
        v-if="userinfo.loginId != null"
          class="btn btn-dark"
          @click="deleteNotice(notice.num)"
        >
          삭제하기
        </button>
        <router-link class="btn btn-dark" to="/notice/list">공지 목록</router-link>
      </div>
      <br />
    </div>
  </template>
  
  <script>
import http from '@/api/http-common';
  
  export default {
    name: "NoticeDetail",
    data(){
      return {
        notice : {},
        userinfo : {}
      }
    },
    mounted(){
      this.userinfo = this.$store.state.session;
    

      const boardId = this.$route.params.boardId;
      console.log(this.userinfo);
      http.get(`/api/board/detail/${boardId}`)
      .then((response) => {
        this.notice = response.data.data;
      })
      .catch((e) => {
        console.log(e);
      })
    }
  };
  </script>
  
  <style scoped>
  h4 {
    font-weight: 600;
  }
  .card {
    border: #ffffff solid 1px;
    border-bottom-color: rgba(0, 0, 0, 0.125);
  }
  </style>
  