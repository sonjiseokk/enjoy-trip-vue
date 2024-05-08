<template>

    <div class="HomeMain">
        <p style="font-size: 4rem; font-family: LINESeedKR-Bd">여행지 가이드</p>
        <p style="font-size: 4rem; font-family: LINESeedKR-Bd">Enjoy Trip에서 손쉽게</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src="@/assets/down_arrow.png" width="40px" height="40px" style="margin: 0 auto; "/>
    </div>

    <div class="HomeMid1">
      <div class="HomeMid1Left">
        <img
          src="@/assets/hello2.gif"
          width="400px"
          style="
            margin: 0 auto;
            margin-top: 5%;
            border-radius: 2rem;
            filter: drop-shadow(5px 5px 5px #000);
          "
        />
      </div>
      <div class="HomeMid1Right">
        <p style="font-size: 4rem; font-family: LINESeedKR-Bd">안녕하세요</p>
        <p style="font-size: 3rem; font-family: LINESeedKR-Bd">Enjoy Trip 입니다.</p>
      </div>
    </div>

    <div class="HomeMid2">
        <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
            내가 원하는 매물을 한 눈에 조회하고 검색하세요
        </p>
        <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
            이제껏 찾지 못했던 편리한 매물 서비스,
        </p>
        <p style="font-size: 2rem; font-family: LINESeedKR-Bd">
            다나와 홈즈와 함께 당신의 일상이 새로워질 거예요.
        </p>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped src="./style/style.css"></style>
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
  background-color: rgb(255, 218, 187);
  text-align: center;
  padding-top: 10rem;
}
</style>