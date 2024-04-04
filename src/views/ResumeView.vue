<template lang="">
   <div class="resume">
     <h1 class="resumeW text-uppercase fw-bold-semi">Education</h1>
    <section class="thirdSec row" id="resumee" >
        <div v-for="resum in $store.state.resume" :key="resum" >
          <div class="col-12 my-3">
            <img class="logo" :src= resum.logo>
          </div>
          <div class="col words mx-3">
            <h4>{{resum.year}}</h4>
            <h2>{{resum.place}}</h2>
            <p class="container">
           {{resum.description}}
            </p>
          </div>
        </div>
      </section>
   </div>
   <div class="resume work">
   <h1 class=" resumeW text-uppercase fw-bold-semi" >Experience</h1>
   <section class="">
    <div class="col words mx-1">
      <h4>2024</h4>
      <h2>Life Choices Coding Academy</h2>
      <h4 class="container">Intern</h4>
    </div>
   </section>
  </div>
   <br><br>
   <section id="forthSec">
    <h1 class="resumeW text-uppercase">Skills</h1>
          <div class="container-fluid theSk my-5 " >
              <div class="skilly" v-for="skill in $store.state.skills" :key="skill">
                <img :src=skill.skill alt=""/>
              </div>
          </div>
      </section>

</template>
<script>
export default {
 
}

</script>
<style scoped>


.theSk{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.work{
  margin-top:5%;
  margin-bottom: 3%;
}
.thirdSec img {
  width: 100px;
  height: 100px;
}
.resume{
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 60px;
  position: relative;
  text-align: center;
}
.col-12 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.words{
  font-size: 20px;
}
.words h4{
  color: #fff;
  margin-bottom: 20px;
}
.words h5{
  font-size: 15px;
  color: #d9d9d9;
}
.words h3{
  color: #D41028;
  font-size: 19px;
}
 
.words h2{
  color: #D41028;
  text-shadow: 2px 1px 1px #070606;
  margin-bottom: 20px;
}
.words p{
  color: #fff;
  margin-bottom: 20px;
}
.resumeW{
  text-align:center;
  color:#D41028;
  font-size:60px;
  text-shadow: 2px 1px 1px #070606;
  margin-top:40px;
}
.resumeH{
  text-align: center;
  color: #D41028;
  font-size: 60px;
  text-shadow: 2px 1px 1px #070606;
  
}
.skills {
  text-align: center;
  margin-top: 5%;
  color: #D41028;
  font-size: 60px;
  margin-bottom: 2%;
  text-shadow: 2px 1px 1px #070606;
}
.container-lg{
  display: flex;
  justify-content: space-evenly;
}
img {
  width: auto;
  height: 15vh;

}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
}
.col-md-4 {
  width: fit-content;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 480px) {
  .container-lg{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.resumeW{
  font-size: 50px
}
}
/* end of css */
</style>