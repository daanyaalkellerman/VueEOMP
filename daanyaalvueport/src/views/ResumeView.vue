<template lang="">
   <NavBar/>
   <div class="resume">
    <h1 class="resumeH">{{$store.state.resume[0].resumeH}}</h1>
     <div class="card mb-3" style="background: transparent;">
    <img src="https://drive.google.com/uc?id=1iYt8D9yuFPlCGE34JjGo6RtnPnniBdWf" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{$store.state.resume[1].place}}</h5>
      <p class="card-text">{{$store.state.resume[1].description}}</p>
      <p class="card-text"><small>{{$store.state.resume[1].year}}</small></p>
    </div>
  </div>
     <div class="card mb-3">
    <img src="{{$store.state.resume[2].logo}}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{$store.state.resume[2].place}}</h5>
      <p class="card-text">{{$store.state.resume[2].description}}</p>
      <p class="card-text"><small class="text-body-secondary">{{$store.state.resume[2].year}}</small></p>
    </div>
  </div>
     <div class="card mb-3">
    <img src="{{$store.state.resume[3].logo}}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{$store.state.resume[3].place}}</h5>
      <p class="card-text">{{$store.state.resume[3].description}}</p>
      <p class="card-text"><small class="text-body-secondary">{{$store.state.resume[3].year}}</small></p>
    </div>
  </div>
   </div>
   <br><br>
<div class="skills">
  <h1></h1>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={{$store.state.skills[0].html}} class="card-img-top" alt="">
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">

    </div>
  </div>
</div>
</div>
  <FooterView/>
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
.card{
 background: transparent;
 border: 2px solid red;
}
.card > img{
  display: flex;
  justify-content: center;
  align-self: center;
  width: 20vw;
  
}
.skills{
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>