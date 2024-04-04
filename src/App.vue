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
  background-image: url('https://i.postimg.cc/9ffnXC9m/red-ae-1.jpg');
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
  border-image: fill 1 linear-gradient(#000, rgba(0, 0, 0, 0.067));
}



nav a.router-link-exact-active {
  color: #D41028;
}
html::-webkit-scrollbar{
  display:none;
  margin-top:130px;
}
html{
  -ms-overflow-style: none;
  scrollbar-width:none
}

</style>
