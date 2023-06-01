
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
//响应组件中用户的动作，处理业务逻辑=======类似于Java中的service业务逻辑
const actions={


}
//修改state中的数据========类似于Java中的dao数据操作
const mutations={
    JudgeLogin(username,password){
        if(username!=null&&password!=null&&username!==''&&password!==''){
            this.$store.state.isLogin=true;
        }
    },
}
//具体保存的数据
const state={
    user:{
        id:'',
        username:'',
        password:'',
    },
    isLogin:false,
}

const getters={

}

const setters={

}

export default new Vuex.Store({
    actions,
    mutations,
    state
})




