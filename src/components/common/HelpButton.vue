<template>
    <div class="help-button">
        <VTooltip>
            <i 
              class="bi bi-question-circle question-icon"
            ></i>
            <template #popper>
              <div style="height: 15px;"></div>
                <div>
                    <p>Travel Pick은 유저의 관심 목록을 수집하여 벡터 값으로 저장해요!
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;이렇게 저장된 값들로 유사도를 측정하여 AI가 추천해준답니다.</p>
                </div>
            </template>
        </VTooltip>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    }
  };
  </script>
  
  <style scoped>
  .help-button {
    position: relative;
    display: inline-block;
  }
  
  .question-icon {
    font-size: 28px;
    color: black;
    cursor: pointer;
  }
  
  .tooltip {
    background-color: aliceblue;
    color: black;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
  .tooltip p {
  margin: 0;
}
  </style>
  