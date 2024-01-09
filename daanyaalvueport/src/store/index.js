import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    home: "",
    about: "",
    resume: [],
    projects: [],
    testimonials: [],
    contact: ""

  },
  getters: {

  },
  mutations: {
    setHome(state , data){
      state.home = data
    },
    setAbout(state , about){
      state.about = about
    },
    setResume(state , resume){
      state.resume = resume
    },
    setProjects(state , projects ){
      state.projects = projects
    },
    setTestimonials(state , testimonials){
      state.testimonials = testimonials
    },
    setContact(state , contact){
      state.contact = contact
    }
  },
  actions: {
    getHome (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setHome',res.data.home)
      })
    },
    getAbout (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setAbout',res.data.about)
      })
    },
    getResume (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setResume',res.data.resume)
      })
    },
    getProjects (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setProjects',res.data.projects)
      })
    },
    getTestimonials (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setTestimonials',res.data.testimonials)
      })
    },
    getContact (context){
      axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
      .then (res => {
        context.commit('setContact',res.data.contact)
      })
    },

    // getData(context){
    //   axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
    //     .then(res => res.data )
    //     context.commit('setHome' , res.home)
    //     // context.commit('setAbout' , about.about)
    // }


  },
  modules: {

  }
})
