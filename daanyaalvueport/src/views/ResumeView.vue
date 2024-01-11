<template lang="">
   <div class="resume">
     <h1 class="resumeH">Resume</h1>
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
   <section id="forthSec" data-aos="fade-up"  data-aos-offset="200"
      data-aos-duration="1000">
        <div class="container-lg mt-4">
          <h1 class="skills">Skills</h1>
          <div class="row mt-5 content" v-for="skill in $store.state.skills" :key="skill">
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
              <p>Intermediate</p>
            </div>
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
              <p>Intermediate</p>
            </div>
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
              <p>Beginner</p>
            </div>
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
              <p>Intermediate</p>
            </div>
            <div class="skilly col-md-4">
              <img :src=skill.skill alt=""/>
              <p>Intermediate</p>
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
  width: 150px;
  height: 150px;
}
.resume{
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50px;
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
  border: 2px solid red;

}
.resumeH{
  text-align: left;
  color: #D41028;
  font-weight: 900;
  font-size: 50px;
  padding-left: 50px;
}
.skills {
    margin-top: 10%;
  color: rgb(179, 1, 1);
  font-size: 50px;
  margin-bottom: 10%;
  
}
img {
  width: auto;
  height: 20vh;
}
.skilly:hover {
  width: auto;
  height: 21vh;
  transition: 0.5s;
  border-radius: 10px;
  transition: .2;
}
.content {
    width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 2rem;
  background-color: transparent;
}
.col-md-4 {
  width: fit-content;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(179, 1, 1);
}
</style>