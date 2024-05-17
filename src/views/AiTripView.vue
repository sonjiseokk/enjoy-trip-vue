<template>
    <div style="z-index: -1">
      <div class="min-vh-75 relative" style="margin-top: 200px">
        <div class="container absolute">
          <div class="row">
            <div class="col-md-7 text-center mx-auto">
              <h1 style="font-size: 50px !important;" class="text-dark mt-3">AI 트립</h1>
              <div style="height: 30px;"></div>
              <h4>AI가 나의 성향과 관심사를 분석하여 맞춤형 여행 정보를 제공합니다.</h4>
              <hr>
            </div>
          </div>
        </div>
        <main class="ai-main">
        <AiRecommendList/>
      </main>
      </div>

    </div>
</template>

<script>
import AiRecommendList from '@/components/ai/AiRecommendList.vue'
export default {
  components :{
    AiRecommendList
  }
}
</script>
<style scoped src="./style/style.css"></style>
<style>
.ai-main{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
</style>