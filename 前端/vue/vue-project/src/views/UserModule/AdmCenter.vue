<template>
  <div>
    <el-menu :default-active="$route.path"
             class="el-menu-demo" mode="horizontal"
             :router="true"
             @select="handleSelect">
      <el-menu-item index="/admCenter/admUserCenter">账号管理</el-menu-item>
      <el-menu-item index="/admCenter/admArticleCenter">文章管理</el-menu-item>
    </el-menu>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name:'AdmCenter',
  data() {
    return {
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>