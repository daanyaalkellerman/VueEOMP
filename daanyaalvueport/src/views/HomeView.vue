<template>
  <div class="home">

    <div class="words">
      <h3 class="hello">{{$store.state.home[0].hello}}</h3>
      <h1 class="name">{{$store.state.home[0].name}}</h1>
      <h2 class="title">{{$store.state.home[0].title}}</h2>
    </div>
    <div class="buttons">
      <button class="button">Learn More</button>
      <button class="button">Download CV</button>
    </div>

  </div>

</template>

<script>


export default {

}
</script>
<style scoped>
.home{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  top: -50px;
  position: relative;
  min-height: 100vh;
}
.button{
 margin-top: 150px;
  background-color:#0B0B0A ;
  color: #B82D24;
  border: 2px solid ;
}
.button:hover{
  color: #B82D35;
  background-color:#1E1E1E ;
}
.hello{
  color: #fff
}
.name{
  color: #B82D24;
  font-weight: 900;
  font-size: 70px;
}
.title{
  color: #fff;
}

</style>
