<template>
<div>
  <div class="title-box">
    <input type="text" class="title" v-model="article.title" placeholder="请输入标题..." />
    <el-button type="text" @click="openDialog">提交</el-button>
  </div>
  <mavon-editor v-model="article.content" class="editor" />



</div>
</template>

<script>
export default {
  name: "ArticleEdit",
  data() {
    return {
      showDialog: false,
      categories: [],
      inputTag: "",
      inputTagVisible: false,
      showAddCategoryInput: false,
      article: {
        title: "",
        content: "",
        category: "",
        tags: [],
        tabloid: "",
        type: true,
        author: "",
        newCategory: "",
      },
    };
  },

  methods: {
    // 断言 target 为非空
    assertNotEmpty(target, msg) {
      if (!target) {
        this.$message({
          message: msg,
          type: "warning",
        });
        return false;
      }
      return true;
    },
// 打开文章信息填写框
    openDialog() {

      if(this.$store.state.isLogin===true){
        if (
            this.assertNotEmpty(this.article.title, "请填写文章标题") &&
            this.assertNotEmpty(this.article.content, "请填写文章内容")
        ) {
          this.showDialog = true;
          console.log(this.article.content);
        }
      }else{
        this.$message.error('用户尚未登录');
      }
    },

  },
}
</script>

<style scoped>
.editor {
  height: 650px;
}

.title-box {
  display: grid;
  grid-template-columns: 22fr 2fr;
}
.title {
  background: none;
  color: #303133;
  text-indent: 0px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  display: block;

  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  line-height: 1;
  overflow: visible;
  margin-bottom: 15px;
  padding: 4px;
}
.title:focus {
  border-color: #409eff;
}

</style>