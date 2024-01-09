<template>
  <div id="app">
     <NavBar/>
     <router-view/>

     <FooterView/>
    </div>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import FooterView from './components/FooterView.vue'
export default{

components: {NavBar,FooterView},
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


.navbar{
  background-color: rgb(5, 5, 5);
  color: rgb(196, 195, 195);
  font-size: medium;
  overflow-y: hidden;
    }

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
