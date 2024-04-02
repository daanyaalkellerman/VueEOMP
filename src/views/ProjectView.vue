<template lang="">
    <section class="projsect " v-if="$store.state.projects.length > 0">
       <h1 class="projh2 text-uppercase fw-bold-semi">Projects</h1>
     <div class="projgrid" >
         <div class="card-2" v-for="project in $store.state.projects" :key="project">
           <div class="cards cee">
             <div class="imageProj">
               <img :src=project.image />
             </div>
             <div class="card-body mine">
               <h2>{{project.name}}</h2>
               <p>{{project.description}}</p>
               <div class="buttons">
                 <a :href=project.gitHub target="_blank" class="icon"><i class="fa fa-github"></i></a>
                 <a :href=project.netlify target="_blank" class="icon"><i class="fa fa-link"></i></a>
               </div>
             </div>
           </div>
         </div>

     </div>
     </section>
  <div v-else>
    <SpinnerView/>
  </div>
</template>
<script>

export default {

}
</script>
<style scoped>
.icon{
  color: #070606;
}
    .projsect{
      padding-top: 80px;
      text-align: center;
      position: relative;
      min-height: 100vh;
      overflow-y: hidden;
    }

.projh2 {
    margin-bottom:1.8%;
    color: #D41028;
    text-shadow: 2px 1px 1px #070606;
    font-size: 60px;
    
}
#proj {
  margin: 0px;
  padding: 0;
  justify-content: center;
  display: flex;
}
.projdets {
    width: 100%;
    height: 100%;
    visibility: hidden;
    position: relative;
    left: 0;
    bottom: -150px;
    color: #070606;
}

#projrow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.image {
    background: #D41028;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 20px;
    overflow: hidden;
}
.projgrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px;
  grid-auto-flow: row;
  grid-template-areas:
  "card-1 card-2 card-3"
  "card-4 card-5 ";
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card-1 {
    grid-area: card-1;
    border: 2px solid #070606;
    width: 400px;
    height: 200px;
}

.card-2 {
    grid-area: card-2;
    border: 2px solid #070606;
    width: 400px;
    height: 200px;
  }
  
  .card-3 {
    grid-area: card-3;
    border: 2px solid rgb#070606;
    width: 400px;
    height: 200px;
  }
  
  .card-4 {
      grid-area: card-4;
      border: 2px solid #070606;
      width: 400px;
      height: 200px;
    }
    
    .card-5 {
        grid-area: card-5;
        border: 2px solid #070606;
        width: 400px;
        height: 200px;
    }
    
    .card-6 {
        grid-area: card-6;
        border: 2px solid #070606;
        width: 400px;
        height: 200px;
    }
    
    
    .imageProj{
        width: 100%;
        height: 100%;
    }
    .imageProj img{
        width: 100%;
        height: 100%;
    }
    
    .cards {
        width: 100%;
        height: 100%;
        background: #fff;
        position: relative;
        display: flex;
        align-items: flex-end;
        box-shadow: 0px 7px 10px rgba(7, 6, 6, 0.5);
        transition: 0.5s ease-in-out;
        border-radius: 0;
    }
    
    .cards::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #070606, #D41028);
      z-index: 2;
      transition: 0.5s all;
      opacity: 0;
      border-radius: 0;
    }
    
    .cards:hover::before {
        opacity: 1;
    }
    .cards .mine {
        position: relative;
        color: #fff;
        opacity: 0;
        transform: translateY(20px);
        transition: 0.5s all;
        z-index: 3;
    }
    
    .cards:hover .mine {
      opacity: 1;
      transform: translateY(0px);
    }
    .buttons {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    
    .buttons a {
        width: 5rem;
        height: 2rem;
        height: 2.5rem;
      background-color: transparent;
      color: #fff;
      border: #fff solid 3px;
      text-decoration: none;
      color: #070606;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buttons a:hover {
        transition: 0.5s;
        box-shadow: 0 7px 15px rgba(225, 225, 225, 1.5);
        transform: scale(1.1);
        overflow: hidden;
      backdrop-filter: blur(12px);
    }
    
    .buttons button a {
      width: 5rem;
      height: 2rem;
    }
    
    .imageProj {
        opacity: 0.7;
    }
    
    .cards img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0;
    }
  
    .cee {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #fff;
        border: 2px solid #070606;
        transition: transform 0.2s;
    }
    
    .cards:hover {
        background: #fff;
        transition: 0.5s;
        box-shadow: 0 20px 30px rgba(7, 6, 6, 0.7);
        transform: scale(1.1);
        overflow: hidden;
    }
    
    .mine {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* gap: 5px; */
        height: 100%;
        width: 9150rem;
        border: 2px solid #D41028;
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (max-width: 480px) {
    .card{
      height: 300px;
    }
    .card .details {
      position: absolute;
      bottom: -150px;
      left: 0;
      padding: 10px;
      width: 100%;
      z-index: 2;
      transition: 0.5s;
      color: #fff;
  }
  .cards:hover {
        background: #fff;
        transition: 0.5s;
        box-shadow: 0 20px 30px rgba(7, 6, 6, 0.7);
        transform: scale(1.0);
        overflow: hidden;
    }
    .card-1{
        width: 100%;
    }
    .card-2{
        width: 100%;
    }
    .card-3{
        width: 100%;
    }
    .card-4{
        width: 100%;
    }
    .card-5{
        width: 100%;
    }
 
}
</style>