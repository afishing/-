<template>
<div>
  <div class="login">
    <el-form ref="admin" :model="admin" :rules="rules" label-width="100px" class="login-form">
      <h2 class="login-title">用户登录</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="admin.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="admin.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserLoginView",
  data(){
    return{
      admin:{
        id:'',
        username:'',
        password:'',
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger: 'change'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'change'}

        ]
      }

    }
  },
  methods:{
    login(){
      axios.get("api/ordUserLoginServlet?"+"username="+this.admin.username+"&password="+this.admin.password).then(result=>{
        if(result.data.success){
          this.$store.state.isLogin=true;
          this.$store.state.user.username=this.admin.username;
          this.$store.state.user.password=this.admin.password;
          this.$store.state.user.id=result.data.user.id;
          console.log("登录成功");
          this.$router.push('/articleCenterOne');
        }else{
          alert("登录失败");
        }
      })
    },
    resetForm() {
      this.$refs.admin.resetFields()
    }
  },

}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;

  height: 100vh;
}

.login-form {
  width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
}

</style>


