<template>
    <div class="container">
        <div class="mb-2 input-group d-flex justify-content-between">
            <div class="btn-group">
                <button v-if="userInfo != null && userInfo.id == 'admin'" class="btn btn-dark" @click="writeNotice">
                    글쓰기
                </button>
                <button class="btn btn-dark" @click="getNoticeList">전체 목록</button>
            </div>
            <notice-search></notice-search>
        </div>
        <table class="table table-hover">
            <colgroup>
                <col style="width: 5%" />
                <col style="width: 50%" />
                <col style="width: 15%" />
                <col style="width: 15%" />
                <col style="width: 15%" />
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>작성자</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <notice-list-item v-for="notice in selectedNotices" :key="notice.num"
                    :notice="notice"></notice-list-item>
            </tbody>
        </table>
        <section class="py-7">
            <div class="container">
                <div class="py-2">
                    <div class="">
                        <ul class="pagination pagination-primary mt-4 d-flex justify-content-center">
                            <li class="page-item">
                                <a class="page-link" aria-label="Previous" :class="{ hide: hidePrevious }"
                                    @click="previousPage">
                                    <span aria-hidden="true"><b-icon icon="chevron-left"></b-icon></span>
                                </a>
                            </li>
                            <li class="page-item" v-for="(page, index) in pages" :key="index"
                                :class="{ active: page == curPage }">
                                <a class="page-link" @click="getList(page)">{{ page }}</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" aria-label="Next" :class="{ hide: hideNext }" @click="nextPage">
                                    <span aria-hidden="true"><b-icon icon="chevron-right"></b-icon></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
  import NoticeSearch from "@/components/notice/NoticeSearch.vue";
  import NoticeListItem from "@/components/notice/NoticeListItem.vue";

  import http from "@/api/http-common";

  
  export default {
    name: "NoticeList",
    data() {
      return {
        pages: [],
        selectedNotices: [],
        dataLength: 0,
        totalPage: 0,
        startPage: 1,
        endPage: 5,
        curPage: 1,
        hidePrevious: true,
        hideNext: true,
      };
    },
    mounted(){
        http.get('/api/board?boardType=2')
        .then((response) => {
            this.selectedNotices = response.data.data;
            console.log(this.selectedNotices)
        })
        .catch((e) => {
            console.error(e);
            
        })
    },
    components: {
      NoticeSearch,
      NoticeListItem,
    },
    
  };
</script>
  
  <style scoped>
  .page-link {
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 25px;
    border-radius: 50% !important;
    margin: 0 3px;
  }
  .hide {
    display: none;
  }
  .page-item.active .page-link {
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 50% !important;
    background-color: #7895b2 !important;
    border-color: #7895b2 !important;
  }
  </style>
  