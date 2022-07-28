/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-07 21:23:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-28 23:12:19
 * @FilePath: /vue3-demo/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
/**
 * 私有路由表
 */
const privateRoutes=[
  {
    path:'/user',
    redirect:"/user/manage",
    component: () =>import("@/layout/index.vue"),
    meta:{
      title:'user',
      icon:'personal'
    },
    children:[
      // 用户管理
      {
        path: "/user/manage",
        component: () =>import( "@/views/user/user-manage/index.vue"),
        meta:{
          title:"userManage",
          icon:"el-icon-user"
        }
      },
      // 用户信息
      {
        path: "/user/info/:id",
        component: () =>import( "@/views/user/user-info/index.vue"),
        meta:{
          title:"userInfo",
          icon:"el-icon-user"
        }
      },
      // 角色列表
      {
        path: "/user/role",
        component: () =>import( "@/views/role/role-list/index.vue"),
        meta:{
          title:"roleList",
          icon:"el-icon-user"
        }
      },
      // 权限列表
      {
        path: "/user/permission",
        component: () =>import( "@/views/permission/permission-list/index.vue"),
        meta:{
          title:"permissionList",
          icon:"el-icon-user"
        }
      },
      // 导入
      {
        path: "/user/import",
        component: () =>import( "@/views/import/index.vue"),
        meta:{
          title:"excelImport",
          icon:"el-icon-user"
        }
      },
    ]
  },
  {
    path: "/article",
    redirect:"/article/raking",
    component: () =>import("@/layout/index.vue"),
    children:[
      // 文章排名
      {
        path: "/article/raking",
        component: () =>import( "@/views/article/article-raking/index.vue"),
        meta:{
          title:"articleRaking",
          icon:"el-icon-user"
        }
      },
      //文章详情
      {
        path: "/article/detail/:id",
        component: () =>import( "@/views/article/article-detail/index.vue"),
        meta:{
          title:"articleDetail",
          icon:"el-icon-user"
        }
      },
      // 文章编辑
      {
        path: "/article/editor/:id",
        component: () =>import( "@/views/article/article-editor/index.vue"),
        meta:{
          title:"articleEditor",
          icon:"el-icon-user"
        }
      },
      // 文章创建
      {
        path: "/article/create",
        component: () =>import( "@/views/article/article-create/index.vue"),
        meta:{
          title:"articleCreate",
          icon:"el-icon-user"
        }
      },
    ]
  },
]
/**
 * 公开路由表
 */
const publicRoutes=[
  {
    path: "/",
    name: "layout",
    component: () =>import("@/layout/index.vue"),
    children:[
      //个人中心
      {
        path: "/profile",
        name: "profile",
        component: () =>import( "@/views/profile/index.vue"),
        meta:{
          title:"profile",
          icon:"el-icon-user"
        }
      },
      // 404
      {
        path: "/404",
        name: "404",
        component: () =>import( "@/views/error/404.vue"),
      },
      // 401
      {
        path: "/401",
        name: "401",
        component: () =>import( "@/views/error/401.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( "@/views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "@/views/login/index.vue"),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes:[...privateRoutes,...publicRoutes],
});

export default router;
