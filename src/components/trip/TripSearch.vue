<template>
  <div>
    <div class="map-name-div">
      <div>
        <input type="text" class="form-control name-search" placeholder="관광지명" style="width: 150px" v-model="allSearchKeyword" />
        <p class="text-danger" v-if="allSearchEmpty">검색어를 입력해주세요.</p>
      </div>
      <div>
        <button class="btn btn-success" style="margin-right: 90px; margin-bottom: 40px;" @click="searchAll">
          전체검색
        </button>
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="map-select-div">
      <select class="form-control" v-model="sido">
        <option value="all">시/도</option>
        <option v-for="(sido, index) in sidos" :key="index" :value="sido">
          {{ sido.sidoName }}
        </option>
      </select>
      <select class="form-control" v-model="gugun">
        <option value="all">구/군</option>
        <option v-for="(gugun, index) in guguns" :key="index" :value="gugun">
          {{ gugun.gugunName }}
        </option>
      </select>
      <select class="form-control" v-model="contentType">
        <option value="all">관광지</option>
        <option v-for="(contentType, index) in contentTypes" :key="index" :value="contentType">
          {{ contentType.typeName }}
        </option>
      </select>
    </div>
    <div class="map-name-div">
      <div>
        <input type="text" class="form-control name-search" placeholder="관광지명" style="width: 256px" v-model="keyword" />
      </div>
      <div>
        <button class="btn btn-primary" style="margin: 0" @click="search">
          검색
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http-common";
export default {
  data() {
    return {
      sido: "all",
      gugun: "all",
      contentType: "all",
      keyword: "",
      allSearchKeyword : "",
      sidos: [],
      guguns: [],
      contentTypes : [],
      allSearchEmpty : false
    }
  },
  created() {
    http.get(`/api/trip/sido`)
      .then((response) => {
        this.sidos = response.data.data;
      })
      .catch((e) => {
        console.log("에러에요 에러");
        console.error(e);
      });
    http.get(`/api/trip/contentType`)
    .then((response) => {
      this.contentTypes = response.data.data;
    })
    .catch((e) => {
      
      console.error(e);
    })
  },
  watch: {
    // 'sido' 속성이 변경될 때마다 이 함수가 실행됩니다
    sido(newSido) {
      if (newSido !== 'all') {
        this.getGugun(newSido);
      }
    },
  },
  methods: {
    getGugun(sido) {
      http.get(`/api/trip/gugun?sido=${sido.sidoCode}`)
      .then((response) => {
        this.guguns = response.data.data;
      })
      .catch((e) => {
        console.log(e);
      })
    },
    // 검색
    search(){
      if(this.sido === 'all' || this.gugun === 'all' || this.contentType === 'all'){
        return;
      }
      const formData = {
        keyword : this.keyword,
        contentTypeId : this.contentType.contentTypeId,
        sidoCode : this.sido.sidoCode,
        gugunCode : this.gugun.gugunCode,
      }
      this.$emit('search',formData);
    },
    searchAll(){
      if(this.allSearchKeyword === ''){
        this.allSearchEmpty = true;
        return;
      } else{
        this.allSearchEmpty = false;
        this.$emit('allSearch',this.allSearchKeyword);
      }

    }
  }
}

</script>

<style>
.map-select-div {
  display: flex;
  justify-content: center;
}

.map-name-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 17px;
}
</style>