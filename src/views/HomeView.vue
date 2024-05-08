<template>
    <section class="card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
        <!-- 사이트 주요 기능 설명 -->
        <section class="my-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-4 ms-auto me-auto">
                <div class="rotating-card-container">
                  <div
                    class="card card-rotate card-background card-background-mask-primary shadow-primary"
                  >
                    <div class="front front-background" style="height: 400px; width: 100%">
                      <div class="card-body text-center">
                        <h3 class="text-white">
                          여행지 <br />
                          주변 정보
                        </h3>
                        <p class="text-white opacity-8">저희 사이트에서 손쉽게 확인할 수 있습니다</p>
                      </div>
                    </div>
                    <div class="back back-background">
                      <div class="card-body text-center">
                        <h3 class="text-white">Discover More</h3>
                        <p class="text-white opacity-8">
                          다양한 검색 방법을 통해 아파트 매매 실거래 자료를 확인할 수 있습니다.
                        </p>
                        <button class="btn btn-light btn-sm w-75 mx-auto mt-3">
                          <router-link id="apt" to="/apt" class="ml-3 mr-3 nav-link text-secondary"
                            >Try Search!</router-link
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-8 ms-auto">
                <div class="row justify-content-start">
                  <div class="col-sm-6">
                    <div class="info">
                      <b-icon icon="clipboard-data" style="color: #7895b2" font-scale="2"></b-icon>
                      <h5 class="font-weight-bolder mt-3">실거래 데이터</h5>
                      <p class="pe-5">
                        공공데이터 사이트에서 직접 가져온 아파트 매매 실거래 자료를 확인할 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="info">
                      <b-icon icon="search" style="color: #7895b2" font-scale="2"></b-icon>
                      <h5 class="font-weight-bolder mt-3">매매 자료 조회</h5>
                      <p class="pe-3">
                        시/도를 선택하여 나타난 다각형을 클릭하거나, 구/군, 읍/면/동을 검색하여 해당
                        장소의 데이터를 조회할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-start mt-5">
                  <div class="col-sm-6 mt-3">
                    <b-iconstack font-scale="2" stackvariant="white">
                      <b-icon stacked icon="search" style="color: #7895b2"></b-icon>
                      <b-icon
                        stacked
                        icon="bar-chart-fill"
                        style="color: #7895b2"
                        scale="0.5"
                        shift-v="2"
                        shift-h="-1.4"
                      ></b-icon>
                    </b-iconstack>
                    <h5 class="font-weight-bolder mt-3">자세한 조회</h5>
                    <p class="pe-5">
                      지역 뿐만아니라 아파트 명을 검색하여 전국 조회할 수 있습니다. 또한 면적, 층,
                      가격의 범위를 정하여 세밀한 조회가 가능합니다.
                    </p>
                  </div>
                  <div class="col-sm-6 mt-3">
                    <div class="info">
                      <b-icon icon="card-list" scale="2" style="color: #7895b2"></b-icon>
                      <h5 class="font-weight-bolder mt-3">안내</h5>
                      <p class="pe-3">
                        공지사항과 QnA 게시판을 통해 안내를 도와드리고 있습니다. 급히 도움이
                        필요하시다면 챗봇도 사용해 보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
</template>

<script>
export default {

}
</script>
<style scoped src="./style/style.css"></style>
<style>

</style>