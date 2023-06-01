<template>
  <div class="edit-article">
    <el-form ref="article" :model="article" :rules="rules" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="category">
        <el-select v-model="article.category" placeholder="请选择">
          <el-option label="古诗" value="古诗"></el-option>
          <el-option label="现代小说" value="现代小说"></el-option>
          <el-option label="武侠小说" value="武侠小说"></el-option>
          <el-option label="修仙之旅" value="修仙之旅"></el-option>
          <el-option label="冒险之旅" value="冒险之旅"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标签" prop="tags">
        <el-checkbox-group v-model="article.tags">
          <el-checkbox label="浪漫" value="浪漫"></el-checkbox>
          <el-checkbox label="奉献" value="浪漫"></el-checkbox>
          <el-checkbox label="惆怅" value="惆怅"></el-checkbox>
          <el-checkbox label="励志" value="励志"></el-checkbox>
          <el-checkbox label="热血" value="热血"></el-checkbox>
          <el-checkbox label="开放" value="开放"></el-checkbox>
          <el-checkbox label="爱情" value="爱情"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="简介" prop="tabloid">
        <el-input type="textarea" :rows="3" v-model="article.tabloid"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="10" v-model="article.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button type="warning" @click="handleUpload">上传Excel文件</el-button>
        <input ref="fileInput" name="file" type="file" style="display: none" @change="handleFileChange" accept="application/vnd.ms-excel" />
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "roughArticleEdit",
  data() {
    return {
      article: {
        id:'',
        author: this.$store.state.user.username,
        category: '',
        tabloid: '',
        content: '',
        tags: [],
        title: '',




      },
      rules:{
        title:[
            {required:true,message:'请输入文章标题',trigger: 'change'}
        ],tags:[
            {required:true,message:'请输入文章标签',trigger: 'change'}
        ],author:[
            {required:true,message:'请输入文章作者',trigger: 'change'}
        ],content:[
            {required:true,message:'请输入文章内容',trigger: 'change'}
        ],tabloid:[
            {required:true,message:'请输入文章简介',trigger: 'change'}
        ],category:[
            {required:true,message:'请输入文章分类',trigger: 'change'}
        ],
      }
    }
  },
  methods: {
    submitForm() {
      if(this.$store.state.isLogin===true) {
        console.log(this.article);
        axios.get('api/articleStore?author=' + this.article.author
            + "&category=" + this.article.category
            + "&tabloid=" + this.article.tabloid
            + "&content=" + this.article.content +
            "&tags=" + this.article.tags +
            "&title=" + this.article.title).then(result => {
              if(result.data==="success"){
                this.$message.success("发布成功!!!");
                this.$router.push("/blankFour");
              }
            }
        )
      }else{
        this.$message.error("用户尚未登陆");
      }
    },
    resetForm() {
      this.$refs.article.resetFields();
    },
    handleUpload() {
      // 触发文件选择对话框
      this.$refs.fileInput.click();
    },




    handleFileChange(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      // 发送文件数据到服务器
      axios.post('api/excelInfo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response => {
            this.article=response.data.article;
            this.article.author=this.$store.state.user.username;
          })
    }



  },
}
</script>



<style scoped>

</style>