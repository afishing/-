<template>
<div></div>
</template>

<script>
export default {
  name: "ExitLogin",
  beforeCreate() {
    this.$store.state.isLogin=false;
    this.$store.state.user.id="";
    this.$store.state.user.username="";
    this.$store.state.user.password="";
    this.$message.success("退出登录成功");
    this.$router.push("/");
  }
}
</script>

<style scoped>

</style>