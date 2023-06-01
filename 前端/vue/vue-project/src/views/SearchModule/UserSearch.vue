<template>
<div>
  <el-table
      :data="admins.filter(data=>!search||data.username.includes(search)||data.nickName.includes(search))"
      style="width: 100%">
    <el-table-column
        label="账号"
        prop="username">
    </el-table-column>
    <el-table-column
        label="昵称"
        prop="nickName">
    </el-table-column>
    <el-table-column
        label="性别"
        prop="sex">
    </el-table-column>
    <el-table-column
        label="个人简介"
        prop="selfTabloid">
    </el-table-column>
    <el-table-column
        label="地区"
        prop="area">
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button type="danger" @click="collectUser(scope)">关注</el-button>
      </template>

    </el-table-column>


    <el-table-column
        align="right">
      <template slot="header">
        <input type="text" v-model="search" placeholder="请输入关键词">
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserSearch",
  data(){
    return{
      admins:[
        {
          id:'',
        username:'',
        nickName:'',
        sex:'',
        selfTabloid: '',
        area:'',
      }
      ],
      search:'',
    }
  },
  created() {
    axios.get("api/queryAllUsersServlet"
    ).then(result=>{
      console.log(result.data.users);
      this.admins=result.data.users;
    })
  },
  methods:{
    collectUser(scope) {
      if (this.$store.state.isLogin) {
        axios.get('api/userCollect?userId=' + this.$store.state.user.id + "&collectUserId=" + this.admins[scope.$index].id);
        this.$message.success("关注成功");
      }else{
        this.$message.error("用户尚未登录");
      }
    }

  }
}
</script>

<style scoped>

</style>