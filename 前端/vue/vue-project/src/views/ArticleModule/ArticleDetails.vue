<template>
<div>
  <el-descriptions
      size="mini"
      border

  >
    <template slot="title">
      <h1 align="center">{{article.title}}</h1>
    </template>
    <el-descriptions-item label="作者">{{ article.author }}</el-descriptions-item>
    <el-descriptions-item label="分类">{{ article.category }}</el-descriptions-item>
  </el-descriptions>

  <div style="color: aqua">内容:</div>
  <div>{{article.content}}</div>

</div>
</template>

<script>


export default {
  name: "ArticleDetails",
  data(){
    return{
      article:{
        id:'',
        title: '',
        author: '',
        content:'',
        category: '',
        tags: '',
        tabloid:''
      }
    }
  },
  methods:{
  },
  mounted() {
    this.article=this.$route.query.article;
  },
  watch:{
    article:{
      immediate:true,
      deep:true,
      handler(newValue,oldValue){
        console.log(oldValue+"被改变了");
      }
    }
  }
}
</script>

<style scoped>

</style>