<template>
  <div>
    <el-collapse v-for="article in articles" :key="article.id" >
      <el-collapse-item name="1">
        <template slot="title">
          <span>  <h2>{{article.title}}</h2></span>
          <span><el-tag>{{article.category}}</el-tag></span>
          <div><el-tag type="info">{{article.tabloid}}</el-tag></div>
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
  name: "ArticleCenterOne",
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
  },
}
</script>

<style scoped>

</style>