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
    <p style="font-size: 2.5rem; font-family: LINESeedKR-Bd">
      내가 좋아할 관광지만 Pick
    </p>
    <p style="font-size: 2.5rem; font-family: LINESeedKR-Bd">
      Travel Pick만의 추천 알고리즘으로 관광지를 쉽게 선택하세요!
    </p>
    <p style="font-size: 2.5rem; font-family: LINESeedKR-Bd">
      나의 성향에 따른 맞춤형 여행지를 추천해드리겠습니다.
    </p>

  </div>

  <div class="HomeMid3">
    <div class="HomeMid3Left">
      <p style="font-size: 4rem; font-family: LINESeedKR-Bd">관광지 정보 제공</p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        위치를 확인하고 정보를 얻어보세요!
      </p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        관광지를 선택하면 유사한 관광지도 추천해요
      </p>
    </div>
    <div class="HomeMid3Right">
      <img src="@/assets/home3.gif" width="700px" style="
            margin: 0 auto;
            margin-top: 10%;
            border-radius: 2rem;
            filter: drop-shadow(5px 5px 5px #000);
          " />
    </div>
  </div>

  <div class="HomeMid4">
    <div class="HomeMid3_1Left">
      <img src="@/assets/home4.gif" width="700px" style="
            margin: 0 auto;
            margin-top: 0%;
            margin-left: 30%;
            border-radius: 2rem;
            filter: drop-shadow(5px 5px 5px #000);
          " />
    </div>
    <div class="HomeMid3_1Right">
      <p style="font-size: 4rem; font-family: LINESeedKR-Bd">추천 서비스 제공</p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        나의 관심목록으로 관광지를 추천받을 수 있어요!
      </p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        내가 좋아할 관광지만 쉽게 선택하세요
      </p>
    </div>
  </div>

  <div class="HomeMid5">
    <div class="HomeMid3Left">
      <p style="font-size: 4rem; font-family: LINESeedKR-Bd">최단 경로 제공</p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        관심 목록에 관광지만 넣어주세요
      </p>
      <p style="font-size: 1.5rem; font-family: LINESeedKR-Bd; color: gray">
        Travel Pick이 거리를 다 계산해드릴게요!
      </p>
    </div>
    <div class="HomeMid3Right">
      <img src="@/assets/home5.gif" width="700px" style="
            margin: 0 auto;
            margin-top: 10%;
            border-radius: 2rem;
            filter: drop-shadow(5px 5px 5px #000);
          " />
    </div>
  </div>



  <div style="margin-top: 50px; margin-bottom: 100px;">


    <NewsView></NewsView>

  </div>
  <div class="HomeFoot">
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd">이제 Travel Pick 만의 서비스를 즐겨보세요!</p>
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd"></p>
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
  height: 500px;
  background-color: #D8BFD8;
  text-align: center;
  padding-top: 10rem;
}

.HomeCard {
  background-color: #e6e6fa;
}

.HomeMid3Left {
  width: 50%;
  height: 100%;
  /* background-color: rgb(84, 61, 61); */
  float: left;
  padding-top: 9rem;
  padding-left: 20rem;
}

.HomeMid3Right {
  width: 50%;
  height: 100%;
  /* background-color: rgb(215, 208, 208); */
  float: left;
}

.HomeMid3 {
  width: 100%;
  height: 500px;
  /* background-color: rgb(117, 57, 57); */
}

.HomeMid3_1 {
  width: 100%;
  height: 500px;
  /* background-color: rgb(238, 232, 232); */
}

.HomeMid3_1Left {
  width: 50%;
  height: 100%;
  /* background-color: rgb(214, 214, 214); */
  float: left;
}

.HomeMid3_1Right {
  width: 50%;
  height: 100%;
  /* background-color: rgb(204, 140, 140); */
  float: left;
}

.HomeMid3_1RightImg {
  background-color: aliceblue;
  width: 50%;
  height: 100%;
  float: left;
}

.HomeMid3_1RightInfo {
  float: left;
}

.HomeMid4 {
  margin-top: 100px;
  width: 100%;
  height: 400px;
  /* background-color: rgb(187, 149, 149); */
}

.HomeMid4_1 {
  width: 100%;
  height: 500px;
  background-color: rgb(238, 232, 232);
}

.HomeMid4_2 {
  width: 100%;
  height: 500px;
  background-color: rgb(238, 232, 232);
}

.HomeMid5 {
  width: 100%;
  height: 530px;
  /* background-color: rgb(187, 149, 149); */
}

.HomeFoot {
  width: 100%;
  height: 400px;
  padding-left: 10rem;
  padding-top: 10rem;
  background-color: rgb(255, 230, 227);
}
</style>