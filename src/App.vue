<template>
  <div id="app">

    <div class="top-0">
      <NavBar class=".navbar-show" :class="{'navbar-hidden' : !showNavbar}" />

    </div>

    <main class="main-content position-relative border-radius-lg">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>

    </main>

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

@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

* {
  font-family: "LINESeedKR-Bd", sans-serif !important;
}
</style>