<template lang="">
  <div class="testimonials">
    <section class="testimon container">
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/fWfw99HX/Screenshot-20231103-084121.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname1">Matthew Brown</h1>
            <div class="info">
              <p>
                Daanyaal's expertise, attention to detail and problem-solving abilities are unmatched. He consistently, makes complex tasks seem effortless. Daanyaal's is an invaluable asset to any project.
              </p>
            </div>
          </div>
        </div>
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/xdGJzHvJ/Screenshot-20231103-141933.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname">Tauha Shaik</h1>
            <div class="info">
              <p>
                Daanyaal is an excellent example of competence and efficiency.
                His skill and abilities is a representation of his
                character and his strong work ethics. Daanyaal is an
                asset to all those around him.
              </p>
            </div>
          </div>
        </div>
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/jdc9b5GT/Screenshot-20231103-084113.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname">Niyaaz Daniels</h1>
            <div class="info">
              <p>
                Daanyaal is hardworking, fun and a team player. Having Daanyaal
                on my team would guarantee our projects success as he shows
                exceptional work ethics and brings great energy into the team.
              </p>
            </div>
          </div>
        </div>
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/3JZdY6Ms/Screenshot-20231103-084104.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname">Amaara Hoosen</h1>
            <div class="info">
              <p>
                Daanyaal is honestly a great person to have in the workplace. He's kind, friendly and helpful persona is what makes him approachable. He is also an exceptionally dedicated individual. I recommend him as a developer.
              </p>
            </div>
          </div>
        </div>
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/3JZdY6Ms/Screenshot-20231103-084104.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname">Amaara Hoosen</h1>
            <div class="info">
              <p>
                Daanyaal is honestly a great person to have in the workplace. He's kind, friendly and helpful persona is what makes him approachable. He is also an exceptionally dedicated individual. I recommend him as a developer.
              </p>
            </div>
          </div>
        </div>
        <div class="card row">
          <div class="poster">
            <img src="https://i.postimg.cc/3JZdY6Ms/Screenshot-20231103-084104.jpg" alt="" />
          </div>
          <div class="details">
            <h1 class="testname">Amaara Hoosen</h1>
            <div class="info">
              <p>
                Daanyaal is honestly a great person to have in the workplace. He's kind, friendly and helpful persona is what makes him approachable. He is also an exceptionally dedicated individual. I recommend him as a developer.
              </p>
            </div>
          </div>
        </div>
        
      </section>
  </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>
.testimonials{
  text-align: center;
  top: 100px;
  position: relative;
  margin-bottom: 15%;
}

.testimon {
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
}
.testname{
  color: white;
}
.testname1{
  color: red;
}
.card {
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 350px;
  background: rgb(5, 5, 5);
  border: 2px solid rgb(179, 1, 1);
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgb(5, 5, 5);
}
.card .poster {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.card .poster::before {
    content: "";
    position: absolute;
    bottom: -140px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg rgb(196, 195, 195) 50%, transparent);
    transition: 3s;
    z-index: 1;
}
.card .poster img {
    width: 100%;
    height: 100%;
}
.card:hover .poster img {
    transition: 0.5s;
    transform: translateY(-20px);
    filter: blur(5px);
}
.card .details {
    position: absolute;
    bottom: -150px;
    left: 0;
    padding: 20px;
    width: 100%;
    z-index: 2;
    transition: 0.5s;
    color: rgb(196, 195, 195);
}

.card:hover .details {
    bottom: 10px;
}

.card .details .info {
    color:white;
    margin-top: 10px;
  z-index: 1;
}

@media screen {
  
}

</style>