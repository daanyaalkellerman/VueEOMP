<template lang="">
   <div class="resume">
     <h1 class="resumeH text-uppercase fw-bold-semi">Resume</h1>
    <section class="thirdSec row" id="resumee" >
        <div v-for="resum in $store.state.resume" :key="resum" >
          <div class="col-12 my-3">
            <img class="logo" :src= resum.logo>
          </div>
          <div class="col words mx-3">
            <h4>{{resum.year}}</h4>
            <h2>{{resum.place}}</h2>
            <p>
           {{resum.description}}
            </p>
          </div>
        </div>
        <!-- <div> -->
          <!-- <div class="col-12 my-3">
            <img class="logo" :src=$store.state.resume[2].logo>
          </div>
          <div class="col words mx-3">
            <h4>{{$store.state.resume[2].year}}</h4>
            <h2>{{$store.state.resume[2].place}}</h2>
            <p>
            {{$store.state.resume[2].description}}
            </p>
          </div>
        </div>
        <div>
          <div class="col-12 my-3">
            <img class="logo" :src=$store.state.resume[3].logo>
          </div>
          <div class="col words mx-3">
            <h4>{{$store.state.resume[3].year}}</h4>
            <h2>{{$store.state.resume[3].place}}</h2>
            <p>
            {{$store.state.resume[3].description}}
            </p>
          </div>
        </div> -->
      </section>
   </div>
   <br><br>
   <section id="forthSec">
      <h1 class="skills text-uppercase fw-bold-semi">Skills</h1>
        <div class="container-lg mt-4">
          <div class="row mt-5 content" v-for="skill in $store.state.skills" :key="skill">
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
            </div>
          </div>
        </div>
      </section>

</template>
<script>
export default {
 
}

</script>
<style scoped>
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
.words h2{
  color: #D41028;
  text-shadow: 2px 1px 1px #070606;
  margin-bottom: 20px;
}
.words p{
  color: #fff;
  margin-bottom: 20px;
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
}
</style>