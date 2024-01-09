<template lang="">
     <NavBar/>
     <section class="projsect" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
        <h1 class="projh2">Projects</h1>
        <div class="projgrid">
          <div class="card-1">
            <div class="cards cee">
              <div class="imageProj">
                <img src="" alt="" />
              </div>
              <div class="card-body mine">
                <h2>{{$store.state.projects[0].name}}</h2>
                <p>{{$store.state.projects[0].description}}</p>
                <div class="buttons">
                  <a href="https://github.com/daanyaalkellerman/Urban-Kicks.git" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://urbnkicks.netlify.app/" target="_blank"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-2">
            <div class="cards cee">
              <div class="imageProj">
                <img src="" alt="" />
              </div>
              <div class="card-body mine">
                <h2>{{$store.state.projects[1].name}}</h2>
                <p>{{$store.state.projects[1].description}}</p>
                <div class="buttons">
                  <a href="https://github.com/daanyaalkellerman/RWC.git" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://rugbywc.netlify.app/" target="_blank"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-3">
            <div class="cards cee">
              <div class="imageProj">
                <img src="" alt="" />
              </div>
              <div class="card-body mine">
                <h2>{{$store.state.projects[2].name}}</h2>
                <p>{{$store.state.projects[2].description}}</p>
                <div class="buttons">
                  <a href="https://github.com/daanyaalkellerman/calculator.git" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://callmelator.netlify.app/" target="_blank"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-4">
            <div class="cards cee">
              <div class="imageProj">
                <img src="" alt="" />
              </div>
              <div class="card-body mine">
                <h2>{{$store.state.projects[3].name}}</h2>
                <p>{{$store.state.projects[3].description}}</p>
                <div class="buttons">
                  <a href="https://github.com/daanyaalkellerman/e-commerce.git" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://animooshies.netlify.app/" target="_blank"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-5">
            <div class="cards cee">
              <div class="imageProj">
                <img src="" alt="" />
              </div>
              <div class="card-body mine">
                <h2>{{$store.state.projects[4].name}}</h2>
                <p>{{$store.state.projects[4].description}}</p>
                <div class="buttons">
                  <a href="" target="_blank"> <i class="fa fa-github"></i></a>
                  <a href="https://justflix.netlify.app/" target="_blank"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <FooterView/>
</template>
<script>

export default {

}
</script>
<style scoped>
    
.projsect {
    margin-top: -5%;
}
.projh2 {
    margin-top: 10%;
    color: rgb(179, 1, 1);
    margin-bottom: 10%;
    font-size: 50px;
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
    color: rgb(5, 5, 5);
}

#projrow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.image {
    background: rgb(179, 1, 1);
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
    border: 2px solid rgb(5, 5, 5);
    width: 400px;
    height: 200px;
}

.card-2 {
    grid-area: card-2;
    border: 2px solid rgb(5, 5, 5);
    width: 400px;
    height: 200px;
  }
  
  .card-3 {
    grid-area: card-3;
    border: 2px solid rgb(5, 5, 5);
    width: 400px;
    height: 200px;
  }
  
  .card-4 {
      grid-area: card-4;
      border: 2px solid rgb(5, 5, 5);
      width: 400px;
      height: 200px;
    }
    
    .card-5 {
        grid-area: card-5;
        border: 2px solid rgb(5, 5, 5);
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
        background: rgb(196, 195, 195);
        position: relative;
        display: flex;
        align-items: flex-end;
        box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
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
      background: linear-gradient(to bottom, rgb(5, 5, 5), rgb(179, 1, 1));
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
        color: rgb(177, 177, 177);
        opacity: 0;
        transform: translateY(30px);
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
      color: rgb(255, 255, 255);
      border: rgb(255, 255, 255) solid 3px;
      text-decoration: none;
      color: rgb(176, 176, 176);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buttons a:hover {
        transition: 0.5s;
        box-shadow: 0 7px 15px rgba(177, 177, 177, 1.5);
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
        background-color: rgb(196, 195, 195);
        border: 2px solid rgb(5, 5, 5);
        transition: transform 0.2s;
    }
    
    .cards:hover {
        background: rgb(196, 195, 195);
        transition: 0.5s;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
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
        border: 2px solid rgb(179, 1, 1);
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>