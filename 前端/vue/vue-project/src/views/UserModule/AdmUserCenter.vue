<template>
<div>

  <el-table
      :data="userForm"
      style="width: 100%"
      ref="multipleTable"
      tooltip-effect="dark"
  >
    <el-table-column
        type="selection"
        width="55"
        :show-overflow-tooltip="true"
    >
    </el-table-column>
    <el-table-column
        prop="id"
        label="编号"
        width="100">
    </el-table-column>
    <el-table-column
        prop="username"
        label="用户名"
        width="150">
    </el-table-column>
    <el-table-column
        prop="password"
        label="密码"
        width="150">
    </el-table-column>
    <el-table-column
        prop="nickName"
        label="昵称"
        width="150">
    </el-table-column>
    <el-table-column
        label="操作"
        width="100">
      <template slot-scope="scope">
        <!-- <el-button  type="text" size="small">查看</el-button> -->
        <el-button size="small" @click="deleteUser(scope)">删除</el-button>
      </template>

    </el-table-column>
  </el-table>





</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AdmCenter",
  data(){

    return{
      userForm:[{
        id:'',
        username:'',
        password:'',
        nickName:'',
      }],
    }
  },
  methods:{
    deleteUser(scope){
      console.log(this.userForm[scope.$index].username+"已被删除");
      axios.post("api/UserDeleteServlet?"+"userId="+this.userForm[scope.$index].id).then(result=>{
        console.log(result.data);
        if(result.data==="success"){
          this.$message.success("删除成功");
          // this.$router.go(0);
          this.$router.push("/blankOne");
        }else{
          console.log("删除失败");
          alert("删除失败");
        }
      })
      axios.get('api/articleDelete?author='+this.userForm[scope.$index].username);

      axios.get('api/articleUnCollectTwo?userId='+this.$store.state.user.id);
    }
  },
  created() {
    axios.get("api/queryAllUsersServlet"
    ).then(result=>{
      console.log(result.data.users);
      this.userForm=result.data.users;
    })
  },
}
</script>

<style scoped>



</style>