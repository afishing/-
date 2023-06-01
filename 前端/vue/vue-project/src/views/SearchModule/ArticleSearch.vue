<template>

  <div>
    <el-table
        :data="articles.filter(data => !search || data.title.includes(search)||data.author.includes(search)
        ||data.tags.includes(search)||data.category.includes(search))"
        style="width: 100%">
      <el-table-column
          label="标题"
          prop="title">
      </el-table-column>
      <el-table-column
          label="作者"
          prop="author">
      </el-table-column>
      <el-table-column
          label="分类"
          prop="category">
      </el-table-column>
      <el-table-column
          label="标签"
          prop="tags">
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
  name:'ArticleSearch',
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
      search: ''
    }
  },
  methods: {

  },
  created() {
    axios.get("api/findAllArticles").then(result=>{
      // console.log(result.data);
      this.articles=result.data.articles;
    })
  },
}
</script>

<style scoped>

</style>