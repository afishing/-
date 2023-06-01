<template>
  <div>
<div align="center">
  <el-tag type="danger">当前文章数目为：</el-tag>
  {{articles.length}}<br>
  <el-button type="success" @click="ExportExcels()">导出所有文章Excel数据</el-button>
</div>

    <el-collapse v-for="article in articles" :key="article.id" >
      <el-collapse-item name="1">
        <template slot="title">
          <span>  <h2>{{article.title}}</h2></span>
          <span><el-tag>{{article.category}}</el-tag></span>
          <div><el-tag type="info">{{article.tabloid}}</el-tag></div>
          <el-button type="danger" @click="deleteArticle(article)">删除文章</el-button>
          <el-button type="primary" @click="openDialog(article)">修改文章</el-button>
        </template>
        <div style="color: #409eff">内容:</div>
        {{article.content}}

      </el-collapse-item>

    </el-collapse>

    <el-dialog :visible.sync="dialogVisible" title="对话框" width="50%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.category">
            <el-option label="古诗" value="古诗"></el-option>
            <el-option label="现代小说" value="现代小说"></el-option>
            <el-option label="武侠小说" value="武侠小说"></el-option>
            <el-option label="修仙之旅" value="修仙之旅"></el-option>
            <el-option label="冒险之旅" value="冒险之旅"></el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="标签">-->
<!--          <el-checkbox-group v-model="form.tags">-->
<!--            <el-checkbox label="浪漫" value="浪漫" name="type"></el-checkbox>-->
<!--            <el-checkbox label="奉献" value="浪漫" name="type"></el-checkbox>-->
<!--            <el-checkbox label="惆怅" value="惆怅" name="type"></el-checkbox>-->
<!--            <el-checkbox label="励志" value="励志" name="type"></el-checkbox>-->
<!--            <el-checkbox label="热血" value="热血" name="type"></el-checkbox>-->
<!--            <el-checkbox label="开放" value="开放" name="type"></el-checkbox>-->
<!--            <el-checkbox label="爱情" value="爱情" name="type"></el-checkbox>-->
<!--          </el-checkbox-group>-->
<!--        </el-form-item>-->
        <el-form-item label="简介">
          <el-input v-model="form.tabloid"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>




    <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="articles.length"
        @current-change="handlePageChange"
    ></el-pagination>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AdmArticleCenter",
  data() {
    return {
      articles: [
        {
          id:'',
          title: '',
          author: '',
          content:'',
          category: '',
          tags: '',
          tabloid:'',
          isCollected:'',
        },
      ],
      dialogVisible: false,
      form:{
        id:'',
        title: '',
        author: '',
        content:'',
        category: '',
        tags: '',
        tabloid:'',
      },

      currentPage: 1,
      pageSize: 5
    };
  },

  created() {
    axios.get("api/findAllArticles").then(result=>{
      console.log(result.data);
      this.articles=result.data.articles;
    })
  },
  computed: {
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.articles.slice(startIndex, endIndex);
    }
  },
  methods: {
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
    deleteArticle(article){
      console.log(article.author);

      axios.get('api/articleDeleteTwo?id='+article.id);
      this.$message("删除成功");
      this.$router.push('/blankThree');


    },
    openDialog(data) {
      // 设置表单数据
      this.form.id=data.id;
      this.form.title = data.title;
      this.form.author = data.author;
      this.form.category = data.category;
      this.form.tabloid = data.tabloid;
      this.form.content = data.content;
      this.form.tags=data.tags;

      // 显示对话框
      this.dialogVisible = true;
    },
    submitForm() {
      // 提交表单逻辑
      console.log(this.form);
      this.dialogVisible = false;
      axios.get('api/articleEdit?author=' + this.form.author
          + "&category=" + this.form.category
          + "&tabloid=" + this.form.tabloid
          + "&content=" + this.form.content +
          "&tags=" + this.form.tags +
          "&title=" + this.form.title+"&id="+this.form.id);
      this.$message.success("修改成功");
      this.$router.push('/blankFive');
    },

    ExportExcels(){
      // axios.get('api/exportAllExcels');
      window.open('api/exportAllExcels', '_blank');
      window.close('api/exportAllExcels');
    }
  },
}
</script>

<style scoped>

</style>