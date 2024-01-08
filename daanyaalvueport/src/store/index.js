import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    home: null,
    about: null,
    resume: [],
    projects: [],
    testimonials: [],
    contact: null

  },
  getters: {

  },
  mutations: {
    setHome(state , home){
      state.home = home
    },
    setAbout(state , about){
      state.about = about
    },
    setResume(state , resume){
      state.resume = resume
    },
    setProjects(state , projects ){
      state.projects = projects
    }
    // setHome(state , home){
    //   state.home = home
    // },
    // setHome(state , home){
    //   state.home = home
    // }
  },
  actions: {
    getData(){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then(res => console.log(res.data) )
        // context.commit('setHome' , home.home)
        // context.commit('setAbout' , about.about)
    }


  },
  modules: {

  }
})
