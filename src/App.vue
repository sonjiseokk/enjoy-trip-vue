<template>
  <div id="app">
    <NavBar 
    class=".navbar-show" 
    :class="{'navbar-hidden' : !showNavbar}"/>
    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

const OFFSET = 200;

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      // 상단바 보여줄지 말지
      showNavbar: true,
      // 직전 스크롤 포지션
      lastScrollPosition: 0,
      // 현재 스크롤 포지션
      scrollValue: 0,
    }
  },
  
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  methods : {
    onScroll(){
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  },
  
}
</script>

<style scoped>
.navbar-show {
  top: 0;
  transition: 0.1s all ease-out;
}
.navbar-hidden {
  /* display: none; */
  top: -90px;
  /* transform: translate(0, -100%); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Jua&display=swap");
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
.logo {
  font-family: "Libre Barcode 128 Text", cursive !important;
}
* {
  font-family: "SUIT-Medium", sans-serif !important;
}
</style>