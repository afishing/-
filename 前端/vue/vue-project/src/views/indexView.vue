<template>
  <div id="app">






    <!--    <h2 align="center">小型文章发布管理系统</h2>-->
    <!--    <router-link to="/userLogin">用户登录</router-link><br>-->
    <!--    <router-link to="/admLogin">管理员登录</router-link><br>-->
    <!--    <router-link to="/test">测试一下</router-link>-->
    <!--    <router-view/>-->

    <el-container style="height:100%">
      <el-aside width="150px" style="height:100%">
        <el-menu
            :default-active="$route.path"
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>登录</span>
            </template>
            <el-menu-item index="/userLogin">
              <span>用户登录</span>
            </el-menu-item>
            <el-menu-item index="/userEnroll">
              <span>用户注册</span>
            </el-menu-item>
            <el-menu-item index="/admLogin">
              <span>管理员登录</span>
            </el-menu-item>
            <el-menu-item index="/exitLogin">
              <span>退出登录</span>
            </el-menu-item>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span slot="title">文章中心</span>
            </template>


            <el-menu-item index="/articleCenterOne">
              <span slot="title">展示方式一</span>
            </el-menu-item>
            <el-menu-item index="/articleCenterTwo">
              <span slot="title">展示方式二</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-search"></i>
              <span>查询中心</span>
            </template>
            <el-menu-item index="/articleSearch">
              <span>文章查询</span>
            </el-menu-item>
            <el-menu-item index="/userSearch">
              <span>用户查询</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/personMsg">
              <span>信息修改</span>
            </el-menu-item>
            <el-menu-item index="/personArticle">
              <span>文章管理</span>
            </el-menu-item>
          </el-submenu>



          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span slot="title">编辑文章</span>
            </template>

            <el-menu-item index="/roughArticleEdit">
              <span slot="title">粗略编辑</span>
            </el-menu-item>

            <el-menu-item index="/DetailedArticleEdit">
              <span slot="title">精密编辑</span>
            </el-menu-item>


          </el-submenu>



          <el-menu-item index="/collectArticles">
            <i class="el-icon-reading"></i>
            <span slot="title">收藏列表</span>
          </el-menu-item>




          <el-menu-item index="6" disabled>

          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>

        <router-view></router-view>

      </el-main>
    </el-container>

  </div>
</template>

<script>


export default {
  name:'IndexView',





  methods:{

  },
  components: {}

}
</script>

<style>
/*.el-header, .el-footer {*/
/*  background-color: #B3C0D1;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 60px;*/
/*}*/

/*.el-aside {*/
/*  background-color: #D3DCE6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 200px;*/
/*}*/

/*.el-main {*/
/*  background-color: #E9EEF3;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 160px;*/
/*}*/

/*body > .el-container {*/
/*  margin-bottom: 40px;*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
</style>
