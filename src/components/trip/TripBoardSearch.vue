<template>
    <div class="btn-group ml-auto">
      <input
        type="text"
        name="word"
        :value="title"
        class="form-control"
        placeholder="제목"
        aria-label="Search"
        aria-describedby="search-addon"
        style="max-width: 150px"
        @input="changeTitle($event.target.value)"
        @keyup.enter="searchTripBoard()"
      />
      <button type="button" class="btn btn-dark text-light" @click="searchTripBoard()">검색</button>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "TripBoardSearch",
    data() {
      return {
        title: "",
      };
    },
    methods : {
      changeTitle(value){
        this.title = value;
      },
      searchTripBoard(){
        this.$emit('search',this.title)
      }
    }
  };
  </script>
  
  <style></style>
  