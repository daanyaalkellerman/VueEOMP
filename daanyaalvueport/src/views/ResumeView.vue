<template lang="">
   <div class="resume">
    <section class="thirdSec row" id="resumee"  >
        <div>
          <h1 class="resumeH">{{$store.state.resume[0].resumeH}}</h1>
          <div class="col-12 my-3">
            <img :src=$store.state.resume[1].logo>
          </div>
          <div class="col">
            <h4>{{$store.state.resume[1].year}}</h4>
            <h2>{{$store.state.resume[1].place}}</h2>
            <p>
           {{$store.state.resume[1].description}}
            </p>
          </div>
        </div>
        <div>
          <div class="col-12 my-3">
            <img :src=$store.state.resume[2].logo>
          </div>
          <div class="col">
            <h4>{{$store.state.resume[2].year}}</h4>
            <h2>{{$store.state.resume[2].place}}</h2>
            <p>
            {{$store.state.resume[2].description}}
            </p>
          </div>
        </div>
        <div>
          <div class="col-12 my-3">
            <img :src=$store.state.resume[3].logo>
          </div>
          <div class="col">
            <h4>{{$store.state.resume[3].year}}</h4>
            <h2>{{$store.state.resume[3].place}}</h2>
            <p>
            {{$store.state.resume[3].description}}
            </p>
          </div>
        </div>
      </section>
   </div>
   <br><br>
<div class="skills">
  <h1></h1>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img :src=$store.state.skills[0].html class="card-img-top" alt="">
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img :src=$store.state.skills[0].css class="card-img-top" alt="">
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img :src=$store.state.skills[0].bootstrap class="card-img-top" alt="">

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img :src=$store.state.skills[0].javascript class="card-img-top" alt="">

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img :src=$store.state.skills[0].vuejs class="card-img-top" alt="">

    </div>
  </div>
</div>
</div>

</template>
<script>
export default {
 
}

</script>
<style scoped>
.resume{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  top: 50px;
  position: relative;

}
.resumeH{
  text-align: left;
}
img{
  align-self: center;
  width: 25%;
}
.skills{
  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 10px;
}
.card{
  background-color: transparent;
}
.card:hover{
  background-color: #1E1E1E ;
  opacity: .5;

}
</style>