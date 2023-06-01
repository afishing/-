import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

// const routes = [
//   {path:'/',redirect:'/AppView'},
//   {path:'/admCenter',component:()=>import('../views/AdmUserCenter.vue')},
//   {path:'/userLogin',component:()=>import('../views/UserLoginView.vue')},
//   {path:'/admLogin',component:()=>import('../views/AdmLoginView.vue')},
//   {path:'/articleCenter',component:()=>import('../views/ArticleCenterTwo.vue'),
//     children:[
//       {path:'articleDetails',component:()=>import('../views/ArticleDetails.vue')},
//     ]},
//   {path:'/test',component:()=>import('../views/test/TestView.vue')},
//   {path:'/articleEdit',component:()=>import('../views/DetailedArticleEdit.vue')},
//
// ]
//
// const router = new VueRouter({
//   routes,
// })

const vueRouter= new VueRouter({
  routes:[
    {path:'/',redirect:'/userLogin',meta:{NoNeedGuard: true,name:'主页'}},
    {path:'/admCenter',component:()=>import('../views/UserModule/AdmCenter.vue'),children:[
        {path:'admUserCenter',component:()=>import('../views/UserModule/AdmUserCenter.vue'),meta:{name:'用户管理'}},
        {path:'admArticleCenter',component:()=>import('../views/UserModule/AdmArticleCenter.vue'),meta:{name:'用户文章管理'}}
      ]},


    // {path:'/admCenter',component:()=>import('../views/UserModule/AdmCenter.vue')},
    // {path:'/admArticleCenter',component:()=>import('../views/UserModule/AdmArticleCenter.vue')},
    {path:'/userLogin',component:()=>import('../views/UserModule/UserLoginView.vue')
    ,meta:{NoNeedGuard: true,name:'用户登录'}},

    {path:'/userEnroll',component:()=>import('../views/UserModule/userEnroll.vue')
    ,meta:{NoNeedGuard: true,name:'用户注册'}},

    {path:'/admLogin',component:()=>import('../views/UserModule/AdmLoginView.vue')
      ,meta:{NoNeedGuard: true,name:'管理员登录'}},

    {path:'/articleCenterOne',component:()=>import('../views/ArticleModule/ArticleCenterOne.vue')
      ,meta:{NoNeedGuard: true,name: '文章中心'}},

    {path:'/articleCenterTwo',component:()=>import('../views/ArticleModule/ArticleCenterTwo.vue'),
      meta:{NoNeedGuard:true,name:'文章中心'}},

    {path:'/test',component:()=>import('../views/test/TestView.vue')
    ,meta:{NoNeedGuard: true,name:'测试'}},

    {path:'/detailedArticleEdit',component:()=>import('../views/ArticleModule/DetailedArticleEdit.vue'),meta:{name:'文章编辑'}},

    {path:'/roughArticleEdit',component:()=>import('../views/ArticleModule/RoughArticleEdit.vue'),meta:{name:'文章编辑'}},

    {path:'/articleDetails',component:()=>import('../views/ArticleModule/ArticleDetails.vue'),meta:{name:'文章详情'}},

    {path:'/personMsg',component:()=>import('../views/PersonCenter/PersonMsgEdit.vue'),meta:{name:'个人信息'}},

    {path:'/personArticle',component:()=>import('../views/PersonCenter/PersonArticle.vue'),meta:{name:'个人文章'}},

    {path:'/collectArticles',component:()=>import('../views/ArticleModule/CollectArticles.vue'),meta:{name:'收藏中心'}},

    {path:'/articleSearch',component:()=>import('../views/SearchModule/ArticleSearch.vue'),meta:{name:'搜索中心'}},

    {path:'/userSearch',component:()=>import('../views/SearchModule/UserSearch.vue'),meta:{name:'搜索中心'}},



    {path:'/blankOne',component:()=>import('../views/test/BlankOne.vue')
      ,meta:{NoNeedGuard: true}},

    {path:'/blankTwo',component:()=>import('../views/test/BlankTwo.vue')
    ,meta:{NoNeedGuard: true}},

    {path:'/blankThree',component:()=>import('../views/test/BlankThree.vue')
    ,meta:{NoNeedGuard: true}},

    {path:'/blankFour',component:()=>import('../views/test/BlankFour.vue'),
      meta:{NoNeedGuard: true}},

    {path:'/blankFive',component:()=>import('../views/test/BlankFive.vue'),
      meta:{NoNeedGuard: true}},

    {path:'/blankFive',component:()=>import('../views/test/BlankSix.vue'),
      meta:{NoNeedGuard: true}},

    {path:'/exitLogin',component:()=>import('../views/UserModule/ExitLogin.vue'),
      meta:{NoNeedGuard: true}},

  ]
})

vueRouter.beforeEach((to, from, next)=>{
  if(to.meta.NoNeedGuard){
    next();
  }else{
    if(store.state.isLogin){
      next();
    }else{
      alert("用户尚未登录");
      document.location.href="/";
    }
  }

})

vueRouter.afterEach((to, from)=>{
  document.title=to.meta.name;
})


export default vueRouter;