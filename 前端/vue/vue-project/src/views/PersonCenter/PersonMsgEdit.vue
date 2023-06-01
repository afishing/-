<template>
<div>
  <el-form ref="admin" :model="admin" label-width="100px" class="login-form">
    <h2 class="login-title" align="center">用户信息</h2>
    <el-form-item label="账号" prop="username">
      <el-input v-model="admin.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input  v-model="admin.password"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="admin.sex">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="昵称" prop="nickName">
      <el-input  v-model="admin.nickName"></el-input>
    </el-form-item>
    <el-form-item label="个人简介" prop="selfTabloid">
      <el-input v-model="admin.selfTabloid"></el-input>
    </el-form-item>
    <el-form-item label="地区" prop="area">
      <el-input v-model="admin.area"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonMsgEdit",
  data(){
    return{
      admin:{
        id:'',
        username:'',
        password:'',
        nickName:'',
        sex:'',
        selfTabloid:'',
        area:''
      }
    }
  },
  methods:{
    save(){
      axios.get('api/updateOneUser?username='+this.admin.username+"&password="+this.admin.password
      +"&nickName="+this.admin.nickName+"&sex="+this.admin.sex+"&selfTabloid="+this.admin.selfTabloid
      +"&area="+this.admin.area+"&id="+this.admin.id).then(result=>{
        this.$message.success("修改成功");
        this.$router.push('/BlankSix');
      })
      // axios.post('api/updateOneUser',{user:this.admin},{headers:{'Content-Type':'application/json'}}).then(result=>{
      //   console.log(result.data);
      // })
    },
    resetForm() {
      this.$refs.admin.resetFields()
    }
  },
  created() {
    if(this.$store.state.isLogin){
      this.admin.username=this.$store.state.user.username;
      this.admin.password=this.$store.state.user.password;
      axios.get('api/oneUserAllMsg?username='+this.admin.username+"&password="+this.admin.password).then(result=>{
        this.admin=result.data.user;
        this.$store.state.user.username=this.admin.username;
        this.$store.state.user.password=this.admin.password;
      })
    }else{
      this.$message.error("用户尚未登录");
    }




  }

}
</script>
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

<style scoped>

</style>