<template>

  <div class="HomeMain">
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd">AI를 통해 추천받으세요</p>
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd">Travel Pick</p>
  </div>

  <div class="HomeMid1">
    <div class="HomeMid1Left">
      <img src="@/assets/hello2.gif" width="400px" style="
            margin: 0 auto;
            margin-top: 5%;
            border-radius: 2rem;
            filter: drop-shadow(5px 5px 5px #000);
          " />
    </div>
    <div class="HomeMid1Right">
      <p style="font-size: 4rem; font-family: LINESeedKR-Bd">안녕하세요</p>
      <p style="font-size: 3rem; font-family: LINESeedKR-Bd">Travel Pick 입니다.</p>
    </div>
  </div>

  <div class="HomeMid2">
    <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
      내가 좋아할 관광지만 Pick
    </p>
    <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
      Travel Pick만의 추천 알고리즘으로 관광지를 쉽게 선택하세요!
    </p>
    <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
      나의 성향에 따른 맞춤형 여행지를 추천해드리겠습니다.
    </p>
    <br>
    <br>
    <br>

    <div class="row">
      <div class = "col-1"></div>
      <div class="card col-4 HomeCard">
        <a href='/trip'><img src="@/assets/maincard1.png" class="card-img-top mt-5" alt="..." style='height: 300px'></a>
        <div class="card-body">
          <p class="card-text">위치를 기반으로 관광지를 검색하고 그와 유사한 관광지에 대해서도 알아보세요</p>
        </div>
      </div>
      <div class = "col-2">

      </div>
      <div class="card col-4 HomeCard">
        <img src= "@/assets/maincard2.png" class="card-img-top mt-5" alt="..." style='height: 300px'>
        <div class="card-body">
          <p class="card-text">방문했던 여행지가 정말 좋았다면 내 관광지에 저장해보세요. 내 관광지 목록을 통해서 비슷한 여행지를 추천해드릴게요</p>
        </div>
      </div>
    </div>

    <NewsView></NewsView>
  </div>
</template>

<script setup>
import NewsView from './NewsView.vue';
</script>
<style scoped src="../../views/style/style.css"></style>
<style scoped>
.HomeMain {
  width: 100%;
  height: 420px;
  /* background-color: rgb(187, 149, 149); */
  text-align: center;
  padding: 10rem;
}
.HomeMid1 {
  width: 100%;
  height: 500px;
  padding-left: 10rem;
  padding-right: 15rem;
  /* background-color: rgb(112, 92, 92); */
}
.HomeMid1Left {
  width: 50%;
  height: 500px;
  /* background-color: rgb(84, 61, 61); */
  float: left;
  padding-left: 8rem;
}
.HomeMid1Right {
  width: 50%;
  height: 100%;
  /* background-color: rgb(215, 208, 208); */
  float: left;
  /* text-align: center; */
  padding-left: 6rem;
  padding-top: 8rem;
}
.HomeMid2 {
  width: 100%;
  height: 900px;
  background-color: #D8BFD8;
  text-align: center;
  padding-top: 10rem;
}
.HomeCard{
  background-color: #e6e6fa;
}
</style>