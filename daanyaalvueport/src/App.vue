<template>
 
    <NavBar/>
    <router-view/>
    <SpinnerView/>
    <FooterView/>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import FooterView from './components/FooterView.vue'
  import SpinnerView from './components/SpinnerView.vue'
export default{

components: {NavBar,SpinnerView,FooterView},
computed:{
    getHome(){
      return this.$store.dispatch("getHome")
    },
    getAbout(){
      return this.$store.dispatch("getAbout")
    },
    getResume(){
      return this.$store.dispatch("getResume")
    },
    getSkills(){
      return this.$store.dispatch("getSkills")
    },
    getProjects(){
      return this.$store.dispatch("getProjects")
    },
    getTestimonials(){
      return this.$store.dispatch("getTestimonials")
    },
    getContact(){
      return this.$store.dispatch("getContact")
    }
  },
mounted(){
  this.getHome
  this.getAbout
  this.getResume
  this.getSkills
  this.getProjects
  this.getTestimonials
  this.getContact
}
} 
</script>

<style>
*{
  font-family: Outfit;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-image: url('https://drive.google.com/uc?id=1CmC7CWPQMsKj0WGK1a5G9O9i4otIlZtk');
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
  overflow-y: hidden;
  
}



nav a.router-link-exact-active {
  color: #D41028;
}

.footic{
      color: white;
    }
    .footer{
      position: absolute;
      text-align: center;
      background-color: black;

    }
footer{
    justify-content: space-between !important;
}

.footer-bar {
    margin: 0px;
    justify-content: space-around;
}
.footinfo {
    text-align: left;
}
.icon{
  color: #D41028;
}
</style>
