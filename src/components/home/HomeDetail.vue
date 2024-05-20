<template>

  <div class="HomeMain">
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd">AI를 통해 추천받으세요</p>
    <p style="font-size: 4rem; font-family: LINESeedKR-Bd">Travel Pick</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <img src="@/assets/down_arrow.png" width="40px" height="40px" style="margin: 0 auto; " />
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

  </div>
</template>

<script>
export default {

}
</script>
<style scoped src="../../views/style/style.css"></style>
<style scoped>
.HomeMain {
  width: 100%;
  height: 840px;
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
  height: 100%;
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
</style>