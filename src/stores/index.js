import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //相当于数据库，定义了

  },
  mutations: { //定义state数据的修改操作

  },
  actions: { //提交状态，调用mutations方法对数据进行操作

  },
  modules: {
    city
  }
})
