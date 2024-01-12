import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    home: "",
    about: "",
    resume: [],
    skills: [],
    projects: [],
    testimonials: [],
    contact: ""

  },
  getters: {

  },
  mutations: {
    //sets the state array
    setHome(state , data){
      state.home = data
    },
    setAbout(state , about){
      state.about = about
    },
    setResume(state , resume){
      state.resume = resume
    },
    setSkills(state , skills){
      state.skills = skills
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
    //fetchs the json file
    getHome (context){
      //error handling
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setHome',res.data.home)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getAbout (context){
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setAbout',res.data.about)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getResume (context){
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setResume',res.data.resume)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getSkills (context){
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          console.log(res.data.skills);
          context.commit('setSkills',res.data.skills)
        })      
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getProjects (context){
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setProjects',res.data.projects)
        })    
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getTestimonials (context){
      try {
        
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setTestimonials',res.data.testimonials)
        })
      } catch (error) {
        alert('cannot retrieve data',error)
      }
    },
    getContact (context){
      try {
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then (res => {
          context.commit('setContact',res.data.contact)
        })       
      } catch (error) {
        alert('cannot retrieve data',error)
      }
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
