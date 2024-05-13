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
import AppUserpage from '@/views/AppUserpage.vue';
import ProfilePage from '@/components/user/ProfilePage.vue';
import ProfileModify from '@/components/user/ProfileModify.vue';
import LikePage from '@/components/user/LikePage.vue';
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
      // {
      //   path: "insert",
      //   name: "noticeinsert",
      //   component: NoticeInsert,
      // },
      // {
      //   path: "modify",
      //   name: "noticemodify",
      //   component: NoticeModify,
      // },
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
      // {
      //   path: "insert",
      //   name: "noticeinsert",
      //   component: NoticeInsert,
      // },
      // {
      //   path: "modify",
      //   name: "noticemodify",
      //   component: NoticeModify,
      // },
    ],
  },
  {
    path: "/signup",
    name: "signup",
    component: AppSignup,
  },
  {
    path: "/login",
    name: "login",
    component: AppLogin,
  },
  {
    path: "/userpage",
    name: "userpage",
    component: AppUserpage,
    redirect: "/userPage/profile",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
