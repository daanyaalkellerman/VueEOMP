<template lang="">
  <NavBar/>
  <div class="about">
    <div class="flexy">
      <div>
        <p>{{$store.state.about[0]}}</p>
      </div>
      <div>
        <img src="" loading="lazy">
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
.about{
    display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  top: -50px;
  position: relative;
  min-height: 100vh;
}
.flexy{
  display: flex;
}
  
</style>
