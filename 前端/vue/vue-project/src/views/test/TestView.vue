<!--<template>-->
<!--  <el-container>-->
<!--    <el-header>-->
<!--      <h1>发布文章</h1>-->
<!--    </el-header>-->
<!--    <el-main>-->
<!--      <el-form ref="articleForm" :model="form" :rules="rules" label-width="100px">-->
<!--        <el-form-item label="标题" prop="title">-->
<!--          <el-input v-model="form.title"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="作者" prop="author">-->
<!--          <el-input v-model="form.author"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="内容" prop="content">-->
<!--          <el-input v-model="form.content" type="textarea"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="submitForm">提交</el-button>-->
<!--          <el-button @click="resetForm">重置</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </el-main>-->
<!--  </el-container>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  name:"TestView",-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        title: '',-->
<!--        author: '',-->
<!--        content: ''-->
<!--      },-->
<!--      rules: {-->
<!--        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],-->
<!--        author: [{ required: true, message: '请输入作者名称', trigger: 'blur' }],-->
<!--        content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    submitForm() {-->
<!--      this.$refs.articleForm.validate(valid => {-->
<!--        if (valid) {-->
<!--          // 提交文章-->
<!--          console.log('文章标题：', this.form.title)-->
<!--          console.log('作者名称：', this.form.author)-->
<!--          console.log('文章内容：', this.form.content)-->
<!--          this.$message.success('发布成功')-->
<!--        } else {-->
<!--          this.$message.error('请完善文章信息')-->
<!--          return false-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    resetForm() {-->
<!--      this.$refs.articleForm.resetFields()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->






<!--<template>-->
<!--  <div>-->
<!--    <el-row>-->
<!--      <el-col :span="16" :offset="4">-->
<!--        <h1>文章列表</h1>-->
<!--        <el-card v-for="(article, index) in articles" :key="index" class="article-card" shadow="hover">-->
<!--          <div slot="header" class="clearfix">-->
<!--            <span>{{ article.title }}</span>-->
<!--            <el-button style="float:right" type="text" icon="el-icon-star-off" :class="{ 'is-active': article.isFavorited }" @click="toggleFavorite(article)">-->
<!--              {{ article.isFavorited ? '已收藏' : '收藏' }}-->
<!--            </el-button>-->
<!--          </div>-->
<!--          <div class="article-content">-->
<!--            <div class="article-meta">-->
<!--              <span class="meta-item">{{ article.author }}</span>-->
<!--              <span class="meta-item">{{ article.category }}</span>-->
<!--            </div>-->
<!--            <div class="article-summary">-->
<!--              <p>{{ article.summary }}</p>-->
<!--            </div>-->
<!--            <div class="article-tags">-->
<!--              <el-tag v-for="(tag, index) in article.tags" :key="index">{{ tag }}</el-tag>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name:"TestView",-->
<!--  data() {-->
<!--    return {-->
<!--      articles: [-->
<!--        {-->
<!--          title: '文章1',-->
<!--          author: '作者1',-->
<!--          category: '分类1',-->
<!--          summary: '这是文章1的简介',-->
<!--          tags: ['标签1', '标签2'],-->
<!--          isFavorited: false,-->
<!--        },-->
<!--        {-->
<!--          title: '文章2',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          summary: '这是文章2的简介',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          isFavorited: false,-->
<!--        },-->
<!--        {-->
<!--          title: '文章3',-->
<!--          author: '作者3',-->
<!--          category: '分类3',-->
<!--          summary: '这是文章3的简介',-->
<!--          tags: ['标签5', '标签6'],-->
<!--          isFavorited: false,-->
<!--        },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    toggleFavorite(article) {-->
<!--      article.isFavorited = !article.isFavorited;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.article-card {-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.article-meta {-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--.meta-item {-->
<!--  margin-right: 10px;-->
<!--  font-size: 14px;-->
<!--  color: #999;-->
<!--}-->

<!--.article-summary {-->
<!--  margin-bottom: 10px;-->
<!--  font-size: 16px;-->
<!--}-->

<!--.article-tags {-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--.el-tag {-->
<!--  margin-right: 10px;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--</style>-->




<!--<template>-->
<!--  <div>-->
<!--    <h1>所有文章</h1>-->
<!--    <el-card v-for="article in articles" :key="article.id" style="margin-bottom: 20px;">-->
<!--      <div slot="header">-->
<!--        <h2>{{ article.title }}</h2>-->
<!--      </div>-->
<!--      <div style="display: flex; justify-content: space-between;">-->
<!--        <p>-->
<!--          <b>作者：</b>{{ article.author }}-->
<!--        </p>-->
<!--        <p>-->
<!--          <b>分类：</b>{{ article.category }}-->
<!--        </p>-->
<!--        <p>-->
<!--          <b>标签：</b>{{ article.tags.join(', ') }}-->
<!--        </p>-->
<!--      </div>-->
<!--      <p style="margin-top: 10px;">{{ article.summary }}</p>-->
<!--      <el-button type="primary" style="margin-top: 10px;" @click="goToArticle(article.id)">-->
<!--        阅读全文-->
<!--      </el-button>-->
<!--      <el-button style="margin-left: 10px; margin-top: 10px;" @click="collectArticle(article.id)">-->
<!--        {{ collectedArticles.includes(article.id) ? '取消收藏' : '收藏' }}-->
<!--      </el-button>-->
<!--    </el-card>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name:"TestView",-->
<!--  data() {-->
<!--    return {-->
<!--      articles: [-->
<!--        {-->
<!--          id: 1,-->
<!--          title: '文章1标题',-->
<!--          author: '作者1',-->
<!--          category: '分类1',-->
<!--          tags: ['标签1', '标签2'],-->
<!--          summary: '这是一篇文章1的摘要。',-->
<!--          content: '这是一篇文章1的内容。',-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          title: '文章2标题',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签1', '标签3'],-->
<!--          summary: '这是一篇文章2的摘要。',-->
<!--          content: '这是一篇文章2的内容。',-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: '文章3标题',-->
<!--          author: '作者3',-->
<!--          category: '分类3',-->
<!--          tags: ['标签2', '标签3'],-->
<!--          summary: '这是一篇文章3的摘要。',-->
<!--          content: '这是一篇文章3的内容。',-->
<!--        },-->
<!--      ],-->
<!--      collectedArticles: [],-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    goToArticle(id) {-->
<!--      this.$router.push({ path: `/article/${id}` });-->
<!--    },-->
<!--    collectArticle(id) {-->
<!--      const index = this.collectedArticles.indexOf(id);-->
<!--      if (index > -1) {-->
<!--        this.collectedArticles.splice(index, 1);-->
<!--      } else {-->
<!--        this.collectedArticles.push(id);-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->






<!--<template>-->
<!--  <div>-->
<!--    <el-card v-for="(article, index) in paginatedArticles" :key="index" class="article-card">-->
<!--      <div class="article-header">-->
<!--        <h2>{{ article.title }}</h2>-->
<!--        <div class="article-meta">-->
<!--          <span>{{ article.author }}</span>-->
<!--          <span>{{ article.category }}</span>-->
<!--          <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="article-summary">{{ article.summary }}</div>-->
<!--      <el-link class="read-more" :underline="false" @click="readArticle(article)">阅读全文</el-link>-->
<!--    </el-card>-->
<!--    <el-pagination-->
<!--        background-->
<!--        :current-page="currentPage"-->
<!--        :page-size="pageSize"-->
<!--        layout="prev, pager, next"-->
<!--        :total="articles.length"-->
<!--        @current-change="handlePageChange"-->
<!--    ></el-pagination>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name:"TestView",-->
<!--  data() {-->
<!--    return {-->
<!--      articles: [-->
<!--        {-->
<!--          title: '文章标题1',-->
<!--          author: '作者1',-->
<!--          category: '分类1',-->
<!--          tags: ['标签1', '标签2'],-->
<!--          summary: '这是一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题2',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题3',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题4',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题5',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题6',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题7',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题8',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        {-->
<!--          title: '文章标题9',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签3', '标签4'],-->
<!--          summary: '这是另一篇文章的简介内容，只显示部分内容。'-->
<!--        },-->
<!--        // 更多文章...-->
<!--      ],-->
<!--      currentPage: 1,-->
<!--      pageSize: 5-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    paginatedArticles() {-->
<!--      const startIndex = (this.currentPage - 1) * this.pageSize;-->
<!--      const endIndex = startIndex + this.pageSize;-->
<!--      return this.articles.slice(startIndex, endIndex);-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    readArticle(article) {-->
<!--      // 进入文章详情页-->
<!--      console.log(article);-->
<!--    },-->
<!--    handlePageChange(currentPage) {-->
<!--      this.currentPage = currentPage;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.article-card {-->
<!--  margin: 20px 0;-->
<!--}-->
<!--.article-header {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--}-->
<!--.article-meta {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  margin-top: 10px;-->
<!--}-->
<!--.article-meta > span {-->
<!--  margin-right: 10px;-->
<!--}-->
<!--.article-summary {-->
<!--  margin-top: 10px;-->
<!--  line-height: 1.5;-->
<!--  height: 3em;-->
<!--  overflow: hidden;-->
<!--  text-overflow: ellipsis;-->
<!--}-->
<!--.read-more {-->
<!--  display: block;-->
<!--  text-align: right;-->
<!--  margin-top: 10px;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div>-->
<!--    <h1>所有文章</h1>-->
<!--    <el-card v-for="article in articles" :key="article.id" style="margin-bottom: 20px;">-->
<!--      <div slot="header">-->
<!--        <h2>{{ article.title }}</h2>-->
<!--      </div>-->
<!--      <div style="display: flex; justify-content: space-between;">-->
<!--        <p>-->
<!--          <b>作者：</b>{{ article.author }}-->
<!--        </p>-->
<!--        <p>-->
<!--          <b>分类：</b>{{ article.category }}-->
<!--        </p>-->
<!--        <p>-->
<!--          <b>标签：</b>{{ article.tags.join(', ') }}-->
<!--        </p>-->
<!--      </div>-->
<!--      <p style="margin-top: 10px;">{{ article.summary }}</p>-->
<!--      <el-button type="primary" style="margin-top: 10px;" @click="goToArticle(article.id)">-->
<!--        阅读全文-->
<!--      </el-button>-->
<!--      <el-button style="margin-left: 10px; margin-top: 10px;" @click="collectArticle(article.id)">-->
<!--        {{ collectedArticles.includes(article.id) ? '取消收藏' : '收藏' }}-->
<!--      </el-button>-->
<!--    </el-card>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      articles: [-->
<!--        {-->
<!--          id: 1,-->
<!--          title: '文章1标题',-->
<!--          author: '作者1',-->
<!--          category: '分类1',-->
<!--          tags: ['标签1', '标签2'],-->
<!--          summary: '这是一篇文章1的摘要。',-->
<!--          content: '这是一篇文章1的内容。',-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          title: '文章2标题',-->
<!--          author: '作者2',-->
<!--          category: '分类2',-->
<!--          tags: ['标签1', '标签3'],-->
<!--          summary: '这是一篇文章2的摘要。',-->
<!--          content: '这是一篇文章2的内容。',-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          title: '文章3标题',-->
<!--          author: '作者3',-->
<!--          category: '分类3',-->
<!--          tags: ['标签2', '标签3'],-->
<!--          summary: '这是一篇文章3的摘要。',-->
<!--          content: '这是一篇文章3的内容。',-->
<!--        },-->
<!--      ],-->
<!--      collectedArticles: [],-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    goToArticle(id) {-->
<!--      this.$router.push({ path: `/article/${id}` });-->
<!--    },-->
<!--    collectArticle(id) {-->
<!--      const index = this.collectedArticles.indexOf(id);-->
<!--      if (index > -1) {-->
<!--        this.collectedArticles.splice(index, 1);-->
<!--      } else {-->
<!--        this.collectedArticles.push(id);-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->


<!--<template>-->
<!--  <div>-->
<!--    <el-collapse v-model="activeNames"-->
<!--                 style="border:none;margin-left:30px;">-->
<!--      <el-collapse-item name="1">-->
<!--        <template slot="title">-->
<!--          <p class="title">运行信息</p>-->
<!--        </template>-->
<!--        <div class="row"-->
<!--             style="margin-top:18px;">-->
<!--          <span>开关:{{on}}</span>-->
<!--          <span style="margin-left:77px">亮度:{{light}}</span>-->
<!--        </div>-->
<!--      </el-collapse-item>-->
<!--      <el-collapse-item name="2">-->
<!--        <template slot="title">-->
<!--          <p class="title">设备信息</p>-->
<!--        </template>-->
<!--        <div class="row"-->
<!--             style="margin-top:18px;">-->
<!--          <p class="col_left">设备名称:{{devName}}</p>-->
<!--          <p class="col_right">产品名称:{{prodName}}</p>-->
<!--        </div>-->
<!--        <div class="row"-->
<!--             style="overflow:hidden">-->
<!--          <p class="col_left">设备ID:{{devId}}</p>-->
<!--          <p class="col_right">规格型号:{{modelId}}</p>-->
<!--        </div>-->
<!--      </el-collapse-item>-->
<!--    </el-collapse>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data () {-->
<!--    return {-->
<!--      on: "开",-->
<!--      light: 100,-->
<!--      devName: '虎牌双色灯',-->
<!--      prodName: '双色灯',-->
<!--      devId: 'M000012',-->
<!--      modelId: '双色灯5045',-->
<!--      activeNames: ['1', '2']-->
<!--      //这里的activeNames要与<el-collapse>绑定的v-model值一致-->
<!--      //['1', '2']里面的值要与<el-collapse-item>唯一表示name属性值一致-->
<!--      //这样就可以实现默认展开指定折叠面板块-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.title {-->
<!--  font-size: 18px;-->
<!--  font-family: Microsoft YaHei;-->
<!--  font-weight: bold;-->
<!--  color: #303133;-->
<!--  padding-bottom: 17px;-->
<!--  padding-top: 17px;-->
<!--}-->
<!--::v-deep .el-collapse-item__header.is-active {-->
<!--  border-bottom: 1px solid #ebeef5;-->
<!--}-->
<!--::v-deep .el-collapse-item__wrap {-->
<!--  border: none;-->
<!--}-->
<!--p {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--.row {-->
<!--  overflow: hidden;-->
<!--  margin-bottom: 22px;-->
<!--}-->
<!--.row .col_left {-->
<!--  float: left;-->
<!--  width: 420px;-->
<!--}-->
<!--.row .col_right {-->
<!--  float: left;-->
<!--}-->
<!--</style>-->



<!--<template>-->
<!--  <div class="login">-->
<!--    <el-form ref="form" :model="form" label-width="100px" class="login-form">-->
<!--      <h2 class="login-title">用户登录</h2>-->
<!--      <el-form-item label="用户名">-->
<!--        <el-input v-model="form.username"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码">-->
<!--        <el-input type="password" v-model="form.password"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm">登录</el-button>-->
<!--        <el-button @click="resetForm">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        username: '',-->
<!--        password: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    submitForm() {-->
<!--      this.$refs.form.validate(valid => {-->
<!--        if (valid) {-->
<!--          // 提交表单逻辑-->
<!--          console.log(this.form)-->
<!--        } else {-->
<!--          console.log('表单验证失败！')-->
<!--          return false-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    resetForm() {-->
<!--      this.$refs.form.resetFields()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.login {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  height: 100vh;-->
<!--}-->

<!--.login-form {-->
<!--  width: 400px;-->
<!--}-->

<!--.login-title {-->
<!--  text-align: center;-->
<!--  margin-bottom: 30px;-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div class="article-publish">-->
<!--    <el-form ref="form" :model="form" label-width="100px" class="article-form">-->
<!--      <h2 class="article-title">发布文章</h2>-->
<!--      <el-form-item label="标题">-->
<!--        <el-input v-model="form.title"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="标签">-->
<!--        <el-checkbox-group v-model="form.tags">-->
<!--          <el-checkbox label="科技"></el-checkbox>-->
<!--          <el-checkbox label="生活"></el-checkbox>-->
<!--          <el-checkbox label="游戏"></el-checkbox>-->
<!--          <el-checkbox label="体育"></el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="作者">-->
<!--        <el-input v-model="form.author"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="内容">-->
<!--        <el-input type="textarea" :rows="6" v-model="form.content"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="简介">-->
<!--        <el-input type="textarea" :rows="3" v-model="form.summary"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm">发布</el-button>-->
<!--        <el-button @click="resetForm">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        title: '',-->
<!--        tags: [],-->
<!--        author: '',-->
<!--        content: '',-->
<!--        summary: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    submitForm() {-->
<!--      this.$refs.form.validate(valid => {-->
<!--        if (valid) {-->
<!--          // 提交表单逻辑-->
<!--          console.log(this.form)-->
<!--        } else {-->
<!--          console.log('表单验证失败！')-->
<!--          return false-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    resetForm() {-->
<!--      this.$refs.form.resetFields()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.article-publish {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  height: 100vh;-->
<!--}-->

<!--.article-form {-->
<!--  width: 600px;-->
<!--}-->

<!--.article-title {-->
<!--  text-align: center;-->
<!--  margin-bottom: 30px;-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div>-->
<!--    {{$store.state.sum}}-->
<!--    <button @click="add">加加</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->


<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--    }-->
<!--  },-->
<!--  methods:{-->


<!--  },-->
<!--  mounted() {-->
<!--    console.log(this);-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <h1>用户信息</h1>-->
<!--    <el-form ref="userInfoForm" :model="userInfo" label-width="100px">-->
<!--      <el-form-item label="账号">-->
<!--        <el-input v-model="userInfo.username" disabled></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码">-->
<!--        <el-input type="password" v-model="userInfo.password" show-password></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="昵称">-->
<!--        <el-input v-model="userInfo.nickname"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="性别">-->
<!--        <el-radio-group v-model="userInfo.gender">-->
<!--          <el-radio label="male">男</el-radio>-->
<!--          <el-radio label="female">女</el-radio>-->
<!--        </el-radio-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm">保存</el-button>-->
<!--        <el-button @click="resetForm">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      userInfo: {-->
<!--        username: '',-->
<!--        password: '',-->
<!--        nickname: '',-->
<!--        gender: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    submitForm() {-->
<!--      // 提交表单数据的方法，这里省略实现-->
<!--      console.log('提交表单：', this.userInfo)-->
<!--    },-->
<!--    resetForm() {-->
<!--      // 重置表单数据的方法-->
<!--      this.$refs.userInfoForm.resetFields()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->

<!--    <div class="login-box">-->
<!--      <div class="lb-header">-->
<!--        <a href="/userLogin" class="active" id="login-box-link">登录</a>-->
<!--        <a href="/userEnroll" id="signup-box-link">注册</a>-->
<!--      </div>-->
<!--      <div class="social-login">-->
<!--        <a href="#">-->
<!--          <i class="fa fa-facebook fa-lg"></i>-->
<!--          Login in with facebook-->
<!--        </a>-->
<!--        <a href="#">-->
<!--          <i class="fa fa-google-plus fa-lg"></i>-->
<!--          log in with Google-->
<!--        </a>-->
<!--      </div>-->
<!--      <form class="email-login">-->
<!--        <div class="u-form-group">-->
<!--          <input type="email" placeholder="Email"/>-->
<!--        </div>-->
<!--        <div class="u-form-group">-->
<!--          <input type="password" placeholder="Password"/>-->
<!--        </div>-->
<!--        <div class="u-form-group">-->
<!--          <button>Log in</button>-->
<!--        </div>-->
<!--        <div class="u-form-group">-->
<!--          <a href="#" class="forgot-password">Forgot password?</a>-->
<!--        </div>-->
<!--      </form>-->
<!--&lt;!&ndash;      <form class="email-signup">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="u-form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="email" placeholder="Email"/>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="u-form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="password" placeholder="Password"/>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="u-form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="password" placeholder="Confirm Password"/>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="u-form-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <button>Sign Up</button>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </form>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<style scoped>-->
<!--body{-->
<!--  background-color: #1cbb9b;-->
<!--}-->
<!--.login-box{-->
<!--  position:relative;-->
<!--  margin: 10px auto;-->
<!--  width: 500px;-->
<!--  height: 380px;-->
<!--  background-color: #fff;-->
<!--  padding: 10px;-->
<!--  border-radius: 3px;-->
<!--  -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);-->
<!--  -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);-->
<!--  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);-->
<!--}-->
<!--.lb-header{-->
<!--  position:relative;-->
<!--  color: #00415d;-->
<!--  margin: 5px 5px 10px 5px;-->
<!--  padding-bottom:10px;-->
<!--  border-bottom: 1px solid #eee;-->
<!--  text-align:center;-->
<!--  height:28px;-->
<!--}-->
<!--.lb-header a{-->
<!--  margin: 0 25px;-->
<!--  padding: 0 20px;-->
<!--  text-decoration: none;-->
<!--  color: #666;-->
<!--  font-weight: bold;-->
<!--  font-size: 15px;-->
<!--  -webkit-transition: all 0.1s linear;-->
<!--  -moz-transition: all 0.1s linear;-->
<!--  transition: all 0.1s linear;-->
<!--}-->
<!--.lb-header .active{-->
<!--  color: #029f5b;-->
<!--  font-size: 18px;-->
<!--}-->
<!--.social-login{-->
<!--  position:relative;-->
<!--  float: left;-->
<!--  width: 100%;-->
<!--  height:auto;-->
<!--  padding: 10px 0 15px 0;-->
<!--  border-bottom: 1px solid #eee;-->
<!--}-->
<!--.social-login a{-->
<!--  position:relative;-->
<!--  float: left;-->
<!--  width:calc(40% - 8px);-->
<!--  text-decoration: none;-->
<!--  color: #fff;-->
<!--  border: 1px solid rgba(0,0,0,0.05);-->
<!--  padding: 12px;-->
<!--  border-radius: 2px;-->
<!--  font-size: 12px;-->
<!--  text-transform: uppercase;-->
<!--  margin: 0 3%;-->
<!--  text-align:center;-->
<!--}-->
<!--.social-login a i{-->
<!--  position: relative;-->
<!--  float: left;-->
<!--  width: 20px;-->
<!--  top: 2px;-->
<!--}-->
<!--.social-login a:first-child{-->
<!--  background-color: #49639F;-->
<!--}-->
<!--.social-login a:last-child{-->
<!--  background-color: #DF4A32;-->
<!--}-->
<!--.email-login,.email-signup{-->
<!--  position:relative;-->
<!--  float: left;-->
<!--  width: 100%;-->
<!--  height:auto;-->
<!--  margin-top: 20px;-->
<!--  text-align:center;-->
<!--}-->
<!--.u-form-group{-->
<!--  width:100%;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--.u-form-group input[type="email"],-->
<!--.u-form-group input[type="password"]{-->
<!--  width: calc(50% - 22px);-->
<!--  height:45px;-->
<!--  outline: none;-->
<!--  border: 1px solid #ddd;-->
<!--  padding: 0 10px;-->
<!--  border-radius: 2px;-->
<!--  color: #333;-->
<!--  font-size:0.8rem;-->
<!--  -webkit-transition:all 0.1s linear;-->
<!--  -moz-transition:all 0.1s linear;-->
<!--  transition:all 0.1s linear;-->
<!--}-->
<!--.u-form-group input:focus{-->
<!--  border-color: #358efb;-->
<!--}-->
<!--.u-form-group button{-->
<!--  width:50%;-->
<!--  background-color: #1CB94E;-->
<!--  border: none;-->
<!--  outline: none;-->
<!--  color: #fff;-->
<!--  font-size: 14px;-->
<!--  font-weight: normal;-->
<!--  padding: 14px 0;-->
<!--  border-radius: 2px;-->
<!--  text-transform: uppercase;-->
<!--}-->
<!--.forgot-password{-->
<!--  width:50%;-->
<!--  text-align: left;-->
<!--  text-decoration: underline;-->
<!--  color: #888;-->
<!--  font-size: 0.75rem;-->
<!--}-->
<!--</style>-->








<!--<template>-->
<!--  <el-table-->
<!--      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"-->
<!--      style="width: 100%">-->
<!--    <el-table-column-->
<!--        label="Date"-->
<!--        prop="date">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--        label="Name"-->
<!--        prop="name">-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--        align="right">-->
<!--      <template slot="header">-->
<!--        <el-input-->
<!--            v-model="search"-->
<!--            size="mini"-->
<!--            placeholder="输入关键字搜索"/>-->
<!--      </template>-->
<!--      <template slot-scope="scope">-->
<!--        <el-button-->
<!--            size="mini"-->
<!--            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
<!--        <el-button-->
<!--            size="mini"-->
<!--            type="danger"-->
<!--            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--  </el-table>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      tableData: [{-->
<!--        date: '2016-05-02',-->
<!--        name: '王小虎',-->
<!--        address: '上海市普陀区金沙江路 1518 弄'-->
<!--      }, {-->
<!--        date: '2016-05-04',-->
<!--        name: '刘二狗',-->
<!--        address: '上海市普陀区金沙江路 1517 弄'-->
<!--      }, {-->
<!--        date: '2016-05-01',-->
<!--        name: '骚白',-->
<!--        address: '上海市普陀区金沙江路 1519 弄'-->
<!--      }, {-->
<!--        date: '2016-05-03',-->
<!--        name: '辛巴',-->
<!--        address: '上海市普陀区金沙江路 1516 弄'-->
<!--      }],-->
<!--      search: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    handleEdit(index, row) {-->
<!--      console.log(index, row);-->
<!--    },-->
<!--    handleDelete(index, row) {-->
<!--      console.log(index, row);-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->



<!--<template>-->
<!--  <div>-->
<!--    <el-button type="success" @click="dialogVisible=true">点我</el-button>-->
<!--    <el-dialog :visible.sync="dialogVisible" title="对话框" width="50%">-->
<!--      <el-form ref="form" :model="form" label-width="100px">-->
<!--        <el-form-item label="标题">-->
<!--          <el-input v-model="form.title"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="作者">-->
<!--          <el-input v-model="form.author"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="类别">-->
<!--          <el-select v-model="form.category">-->
<!--            <el-option label="选项一" value="option1"></el-option>-->
<!--            <el-option label="选项二" value="option2"></el-option>-->
<!--            <el-option label="选项三" value="option3"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="简介">-->
<!--          <el-input v-model="form.intro"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="内容">-->
<!--          <el-input type="textarea" v-model="form.content"></el-input>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">取消</el-button>-->
<!--        <el-button type="primary" @click="submitForm">确定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      dialogVisible: false,-->
<!--      form: {-->
<!--        title: '',-->
<!--        author: '',-->
<!--        category: '',-->
<!--        intro: '',-->
<!--        content: '',-->
<!--      },-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    openDialog(data) {-->
<!--      // 设置表单数据-->
<!--      this.form.title = data.title;-->
<!--      this.form.author = data.author;-->
<!--      this.form.category = data.category;-->
<!--      this.form.intro = data.intro;-->
<!--      this.form.content = data.content;-->

<!--      // 显示对话框-->
<!--      this.dialogVisible = true;-->
<!--    },-->
<!--    submitForm() {-->
<!--      // 提交表单逻辑-->
<!--      console.log(this.form);-->
<!--      this.dialogVisible = false;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->



<!--<template>-->
<!--  <div>-->
<!--    <el-menu :default-active="$route.path"-->
<!--             class="el-menu-demo" mode="horizontal"-->
<!--             :router="true"-->
<!--             @select="handleSelect">-->
<!--      <el-menu-item index="/admUserCenter">账号管理</el-menu-item>-->
<!--      <el-menu-item index="/admArticleCenter">文章管理</el-menu-item>-->
<!--    </el-menu>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    handleSelect(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->



<template>
  <div>
    <el-button type="primary" @click="handleUpload">选择文件并上传</el-button>
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" accept=".csv, application/vnd.ms-excel" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    handleUpload() {
      // 触发文件选择对话框
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      // 发送文件数据到服务器
      axios.post('/upload-url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response => {
            // 处理上传成功的响应
            console.log(response.data);
          })
          .catch(error => {
            // 处理上传失败的错误
            console.error(error);
          });
    }
  }
}
</script>






