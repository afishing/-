


<template>
  <div>
    <el-card v-for="article in paginatedArticles" :key="article.id" class="article-card">
      <div class="article-header">
        <h2>{{ article.title }}</h2>
        <div class="article-meta">
          <span><el-tag>{{ article.author }}</el-tag></span>
          <span><el-tag type="success">{{ article.category }}</el-tag></span>
          <span> <el-tag type="danger">{{article.tags}}</el-tag></span>
        </div>
      </div>
      <div class="article-summary">
        <el-tag type="warning">{{ article.tabloid }}</el-tag>
      </div>


      <el-button style="margin-left: 10px; margin-top: 10px;" @click="collectArticle(article.id,article)">
        {{article.isCollected?'已收藏':'收藏'}}
<!--        {{ collectedArticles.includes(article.id) ? '取消收藏' : '收藏' }}-->
      </el-button>
      <el-button type="danger" @click="exportExcel(article.id)">导出Excel</el-button>
      <el-link class="read-more" :underline="false" @click="readArticle(article)">阅读全文</el-link>



    </el-card>
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
// import index from "async";
import axios from "axios";


export default {

  name:"articleCenter",
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
          state:'',
        },
      ],
      currentPage: 1,
      pageSize: 5
    };
  },
  created() {
    axios.get("api/findAllArticles").then(result=>{
      // console.log(result.data);
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
    readArticle(article) {
      // 进入文章详情页
      // console.log(article);
      // const a="/articleDetails?id="+article.id+"&content="+article.content;
      this.$router.push({path: '/articleDetails',query:{article:article}});
    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },

    collectArticle(id) {
      if(this.$store.state.isLogin){
        axios.get('api/collectArticle?userId='+this.$store.state.user.id+"&articleId="+id).then(result=>{
          console.log(result.data);
          if(result.data===true){
            this.$message.success("收藏成功");
          }
        })
      }else{
        this.$message.error("用户尚未登录");
      }

      // this.$router.go(0);

      },
    exportExcel(id){
      window.open('api/excelInfoTwo?id='+id, '_blank');
      window.close('api/excelInfoTwo?id='+id);
    }

      // const index = this.collectedArticles.indexOf(id);
      // if (index > -1) {
      //   this.collectedArticles.splice(index, 1);
      // } else {
      //   this.collectedArticles.push(id);
      // }
  },
};
</script>

<style scoped>
.article-card {
  margin: 20px 0;
}
.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.article-meta {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.article-meta > span {
  margin-right: 10px;
}
.article-summary {
  margin-top: 10px;
  line-height: 1.5;
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.read-more {
  display: block;
  text-align: right;
  margin-top: 10px;
}
</style>



