<template lang="">
  <div class="testimonials">
    <h1>Testimonials</h1>
    <section class="testimon container">
        <div class="card row" v-for="testimonial in $store.state.testimonials" :key="testimonial">
          <div class="poster">
            <img :src= testimonial.profile alt="" />
          </div>
          <div class="details">
            <h1 class="testname1">{{testimonial.name}} {{testimonial.surname}}</h1>
            <div class="info">
              <p>
               {{testimonial.quotes}}
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
.testimonials h1{
  color: #D41028;
  text-shadow: 2px 1px 1px #070606;
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
  color: #D41028;
}
.testname1{
  color: #D41028;
  text-shadow: 2px 1px 1px #070606;
}
.card {
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 350px;
  background: #070606;
  border: 5px double #D41028;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 15px 35px #B82D24;
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
    background: linear-gradient(0deg #070606 20%, transparent);
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
    filter: blur(100px);
}
.card .details {
    position: absolute;
    bottom: -150px;
    left: 0;
    padding: 20px;
    width: 100%;
    z-index: 2;
    transition: 0.5s;
    color: #B82D24;
    text-shadow: 3px 1px 1px #070606;
}

.card:hover .details {
    bottom: 10px;
}

.card .details .info {
    color:#fff;
    margin-top: 10px;
  z-index: 1;
}

@media (width :320px) {
  .card {
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 300px;
  background: #070606;
  border: 5px double #D41028;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 15px 35px #B82D24;
}
  .card .poster {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
  .card .poster img {
    width: 100%;
    height: 100%;
}
.card .poster::before {
    content: "";
    position: absolute;
    bottom: -110px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg #070606 20%, transparent);
    transition: 3s;
    z-index: 1;
}
}


</style>