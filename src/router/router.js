import { createWebHistory, createRouter } from "vue-router";
import MainView from "@/views/MainView.vue";
import TripView from "@/views/TripView.vue";
import NoticeView from "@/views/NoticeView.vue";
import QnaView from "@/views/QnaView.vue";
import NoticeList from "@/components/notice/NoticeList.vue";
import NoticeSearch from "@/components/notice/NoticeSearch.vue";
import NoticeDetail from "@/components/notice/NoticeDetail.vue";
import QnaList from "@/components/qna/QnaList.vue";
import AppSignup from "@/views/AppSignup.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppUserpage from "@/views/AppUserpage.vue";
import ProfilePage from "@/components/user/ProfilePage.vue";
import ProfileModify from "@/components/user/ProfileModify.vue";
import PasswordChange from "@/components/user/PasswordChange";
import LikePage from "@/components/user/LikePage.vue";
import ManagePage from "@/components/ban/ManagePage.vue";
import AiTripView from "@/views/AiTripView.vue";
import NoticeInsert from "@/components/notice/NoticeInsert.vue";
import NoticeModify from "@/components/notice/NoticeModify.vue";
import QnaDetail from "@/components/qna/QnaDetail.vue";
import QnaModify from "@/components/qna/QnaModify.vue";
import QnaInsert from "@/components/qna/QnaInsert.vue";
import BanDetail from "@/components/ban/BanDetail.vue";
import BannedBoardPage from "@/components/ban/BannedBoardPage.vue";
import TripBoardView from "@/views/TripBoardView.vue";
import TripBoard from "@/components/trip/TripBoard.vue";
import TripBoardInsert from "@/components/trip/TripBoardInsert.vue";
import TripBoardDetail from "@/components/trip/TripBoardDetail.vue";
import TripBoardModify from "@/components/trip/TripBoardModify.vue";
import LikeView from "@/views/LikeView.vue";
const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/trip",
    component: TripView,
  },
  {
    path: "/notice",
    component: NoticeView,
    redirect: "/notice/list",
    children: [
      {
        path: "list",
        name: "noticelist",
        component: NoticeList,
        children: [
          {
            path: "search",
            name: "noticesearch",
            component: NoticeSearch,
          },
        ],
      },
      {
        path: "detail/:boardId",
        name: "noticedetail",
        component: NoticeDetail,
      },
      {
        path: "insert",
        name: "noticeinsert",
        component: NoticeInsert,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null || userInfo.role !== "ADMIN") {
            alert("관리자만 진행가능합니다.");
            next("/");
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
      {
        path: "modify/:boardId",
        name: "noticemodify",
        component: NoticeModify,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null || userInfo.role !== "ADMIN") {
            alert("관리자만 진행가능합니다.");
            next("/");
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
    ],
  },
  {
    path: "/qna",
    component: QnaView,
    redirect: "/qna/list",
    children: [
      {
        path: "list",
        name: "qnalist",
        component: QnaList,
        children: [
          {
            path: "search",
            name: "noticesearch",
            component: NoticeSearch,
          },
        ],
      },
      {
        path: "detail/:boardId",
        name: "qnadetail",
        component: QnaDetail,
      },
      {
        path: "insert",
        name: "qnainsert",
        component: QnaInsert,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null) {
            alert("로그인 후 사용 가능합니다.");
            next("/");
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
      {
        path: "modify/:boardId",
        name: "qnamodify",
        component: QnaModify,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null) {
            alert("로그인 후 사용 가능합니다.");
            next("/");
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
    ],
  },
  {
    path: "/ai",
    component: AiTripView,
  },
  {
    path: "/signup",
    name: "signup",
    component: AppSignup,
    beforeEnter: (to, from, next) => {
      // sessionStorage에서 값 가져오기
      const userInfo = sessionStorage.getItem("jwt");
      // 값이 없으면 다른 페이지로 이동
      if (userInfo) {
        alert("로그아웃 이후 이용 가능합니다.");
        next("/");
      } else {
        // 값이 있으면 계속 진행
        next();
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: AppLogin,
    beforeEnter: (to, from, next) => {
      // sessionStorage에서 값 가져오기
      const userInfo = sessionStorage.getItem("jwt");
      // 값이 없으면 다른 페이지로 이동
      if (userInfo) {
        alert("로그아웃 후 이용 가능합니다.");
        next("/");
      } else {
        // 값이 있으면 계속 진행
        next();
      }
    },
  },
  {
    path: "/userpage",
    name: "userpage",
    component: AppUserpage,
    redirect: "/userpage/profile",
    beforeEnter: (to, from, next) => {
      // sessionStorage에서 값 가져오기
      const userInfo = sessionStorage.getItem("jwt");
      // 값이 없으면 다른 페이지로 이동
      if (!userInfo) {
        if (to.path == "/userpage/password-change") {
          next();
          return;
        }
        alert("로그인 후 이용 가능합니다.");
        next("/login");
      } else {
        // 값이 있으면 계속 진행
        next();
      }
    },
    children: [
      {
        path: "profile",
        name: "profile",
        component: ProfilePage,
      },
      {
        path: "modify",
        name: "modify",
        component: ProfileModify,
      },
      {
        path: "like",
        name: "like",
        component: LikePage,
      },
      {
        path: "manage",
        name: "manage",
        component: ManagePage,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null || userInfo.role !== "ADMIN") {
            alert("관리자만 진행가능합니다.");
            next("/");
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
      {
        path: "ban/:boardId",
        name: "bandetail",
        component: BanDetail,
        // beforeEnter: (to, from, next) => {
        //   // sessionStorage에서 값 가져오기
        //   const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
        //   // 값이 없으면 다른 페이지로 이동
        //   if (userInfo === null || userInfo.role !== "ADMIN") {
        //     alert("관리자만 진행가능합니다.");
        //     next("/");
        //   } else {
        //     // 값이 있으면 계속 진행
        //     next();
        //   }
        // },
      },
      {
        path: "banned",
        name: "banned",
        component: BannedBoardPage,
      },
      {
        path: "password-change",
        name: "passwordChange",
        component: PasswordChange,
      },
    ],
  },
  {
    path: "/tripboard/:id",
    name: "tripboard",
    component: TripBoardView,
    redirect: (to) => {
      return `/tripboard/${to.params.id}/list/${to.params.id}`;
    },
    children: [
      {
        path: "list/:id",
        name: "tripboardlist",
        component: TripBoard,
      },
      {
        path: "insert/:id",
        name: "tripboardinsert",
        component: TripBoardInsert,
        beforeEnter: (to, from, next) => {
          // sessionStorage에서 값 가져오기
          const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
          // 값이 없으면 다른 페이지로 이동
          if (userInfo === null) {
            alert("로그인 후 사용 가능합니다.");
            next(`/tripboard/list/${to.params.id}`);
          } else {
            // 값이 있으면 계속 진행
            next();
          }
        },
      },
      {
        path: "detail/:id",
        name: "tripboarddetail",
        component: TripBoardDetail,
      },
      {
        path: "modify/:id",
        name: "tripboardmodify",
        component: TripBoardModify,
      },
    ],
  },
  {
    path: "/like",
    name: "like",
    component: LikeView,
    beforeEnter: (to, from, next) => {
      // sessionStorage에서 값 가져오기
      const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
      // 값이 없으면 다른 페이지로 이동
      if (userInfo === null) {
        alert("로그인 후 사용 가능합니다.");
        next(from);
      } else {
        // 값이 있으면 계속 진행
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
