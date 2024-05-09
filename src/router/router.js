import { createWebHistory, createRouter } from "vue-router";
import MainView from "@/views/MainView.vue";
import TripView from "@/views/TripView.vue";
import NoticeView from "@/views/NoticeView.vue";
import NoticeList from "@/components/notice/NoticeList.vue";
import NoticeSearch from "@/components/notice/NoticeSearch.vue";
import NoticeDetail from "@/components/notice/NoticeDetail.vue";
const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/trip",
    component : TripView,
  },
  {
    path: "/notice",
    component : NoticeView,
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
        path: "detail/:num",
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 