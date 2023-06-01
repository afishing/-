<template>
  <div>
    <el-collapse v-for="article in articles" :key="article.id" >
      <el-collapse-item name="1" v-show="article.state">
        <template slot="title">
          <span>  <h2>{{article.title}}</h2></span>
          <span><el-tag>{{article.category}}</el-tag></span>
          <div><el-tag type="info">{{article.tabloid}}</el-tag></div>
          <el-button type="danger" size="mini" @click="UnCollectArticle(article)">取消收藏</el-button>
        </template>
        <div style="color: #409eff">内容:</div>
        {{article.content}}

      </el-collapse-item>

    </el-collapse>


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
  name: "CollectArticles",
  data() {
    return {
      articles: [
        {
          id: '',
          title: '',
          author: '',
          content: '',
          category: '',
          tags: '',
          tabloid: '',
          state: '',
        },
      ],
      currentPage: 1,
      pageSize: 5
    }
  },
  computed: {
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.articles.slice(startIndex, endIndex);
    }
  },
  created() {
    axios.get('api/findCollectArticles?userId=' + this.$store.state.user.id).then(result => {
      console.log(result.data);
      this.articles = result.data.articles;
      this.articles.forEach(e=>{
        e.state = true;
      })
    })
  },
  methods: {
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },

    UnCollectArticle(article){
      console.log(article.state);
      axios.get('api/articleUnCollect?userId='+this.$store.state.user.id+"&articleId="+article.id);
      this.$router.push("/blankTwo");
      this.$message.warning("取消收藏成功");

    }


  }
}
</script>

<style scoped>

</style>