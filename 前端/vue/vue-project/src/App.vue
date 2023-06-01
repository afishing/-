<template>
  <div id="app">

    <IndexView></IndexView>




<!--    <h2 align="center">小型文章发布管理系统</h2>-->
<!--    <router-link to="/userLogin">用户登录</router-link><br>-->
<!--    <router-link to="/admLogin">管理员登录</router-link><br>-->
<!--    <router-link to="/test">测试一下</router-link>-->
<!--    <router-view/>-->



  </div>
</template>

<script>


import IndexView from "@/views/indexView.vue";

export default {
  name:'AppView',

  components: {IndexView},



  methods:{

  },

}

</script>

<style>



</style>
