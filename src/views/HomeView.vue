<template>
  <div class="home" >
    <img src="https://iili.io/J76IyLg.md.jpg" alt="">
    <div class="words">
      <h3 class="hello my-2">Hi My Name is</h3>
      <h1 class="name">Daanyaal Kellerman</h1>
      <h2 class="title">Aspiring Web Developer</h2>
    </div>
    <div class="buttons">
      <router-link to="/about">
        <button class="button"> Learn More 
        <div id="box">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
        </div>
  </button>
</router-link>
      <a href="https://drive.google.com/file/d/1HrBFFPRAMOTLIYn-Iiy9-CgwVAnozal0/view?usp=drive_link" target="_blank"> <button class="button">Download CV
        <div id="box">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
        </div>
      </button></a>
     
    </div>
  </div>

</template>

<script>


export default {

}
</script>
<style scoped>
.home{
  display: flexbox;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
}
.words{
  margin-bottom: 40px;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: -150px;

}
button {
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
}
#box {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double #D41028;
  box-shadow: inset 0px 0px 15px #B82D24;
 
}
.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #B82D24;
  top: 35%;
  width: 11%;
  height: 30%;
}
#leftArrow {
  left: -13.5%;
}
#rightArrow {
  left: 102%;
}
button:hover #rightArrow {
  background-color: #D41028;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate;
}
button:hover #leftArrow {
  background-color: #D41028;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate;
}
.corner {
  position: absolute;
  width: 4rem;
  height: 3em;
  background-color: #070606;
  box-shadow: inset 1px 1px 8px #B82D24;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}
#rightTop {
  top: -1.5em;
  left: 80%;
}
#leftTop {
  top: -1.8em;
  left: -3.8em;
}
#leftBottom {
  top: 2.5em;
  left: -2.15em;
}
#rightBottom {
  top: 60%;
  left: 90%;
}
button:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}
button:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}
button:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}
button:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}
button:hover .corner {
  transform: scale(1.20) rotate(45deg);
}
button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both blackLight8;
  --color: #1E1E1E;
}
@keyframes changeColor8 {
  from {
    background-color: #B82D24;
  }
  to {
    background-color: #070606;
  }
}
@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #070606;
  }
  to {
    box-shadow: 0 0 2px #B82D24;
  }
}
@keyframes blackLight8 {
  from {
  }
  to {
    box-shadow: inset 0px 0px 32px #D41028;
  }
}
.hello{
  color: #fff
}
.name{
  color: #D41028;
  font-weight: 900;
  font-size: 70px;
  text-shadow: 2px 2px 1px #070606;
}
.title{
  color: #fff;
}
img{
  width: 20vw;
  margin-top: 80px;
  border: 5px double #D41028;
}

@media (width <= 480px) {
  img{
  width: 50%;
  margin-top: 100px;
  border: 5px double #D41028;
}
.hello{
  font-size: 20px;
}
button {
  position: relative;
  width: 8em;
  height: 3em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
.name{
  font-size: 40px;
}
.title{
  font-size:20px;
}
.home{
  display: flexbox;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  top: -30px;
  position: relative;
  height: 92.1vh;  
  width: 100vw;
}
}

@media (width: 1024px) {
  img{
  width: 25%;
  margin-top: 80px;
  border: 5px double #D41028;
}
.hello{
  font-size: 20px;
}
.name{
  font-size: 60px;
}
.title{
  font-size:20px;
}
.home{
  display: flexbox;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  top: -10px;
  position: relative;
  height: 94.5vh;  

}
button {
  position: relative;
  width: 11em;
  height: 5em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #fff;
  
}
.words{
  margin-bottom: 40px;
}
}

@media (width:768px) {
  .home{
  display: flexbox;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 94.5vh;
}
  
}
</style>
