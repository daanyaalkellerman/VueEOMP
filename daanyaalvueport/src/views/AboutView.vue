<template lang="">
  
      <section class="about container-md"  id="About">
    <div class="pic">
      <div class="animation"></div>
      <img src="https://iili.io/J76IyLg.md.jpg" class="aboutpic">
    </div>
      
      <div>
              <h2 class="aboutH">About Me</h2>
              <p>HEY!! I'm Daanyaal Kellerman. I'm an aspiring Fullstack Web
              Developer. I enjoy bringing out the creative talent of other's and
              distributing the knowledge that i learn along my journey. I tend
              to make those around me more comfortable to better their mindset,
              lessen stress within the work environment and to strengthen our
              bonds.<br />
              When it comes to doing things under pressure i always think of
              that one bruce lee quote "flow like water" so i go with the flow
              whilst still maintaining my drive towards the unreachable goal
              that is Perfection. <br />
              I spend most of my time skating to be more active, gyming to
              better my physical health, playing games to meet new people and
              spending quality time with my family.</p>
    </div>
  </section>
</template>
<script>

export default {

}
</script>
<style scoped>
  .about{
            display: flex;
            justify-content: flex-start;
            align-items: center;      
            margin-top: 10%;
            margin-bottom: 15%;
          }
  
        .aboutpic{
          position: relative;
          top: 7.5px;
          left: 5.5px;
          width: 390px;
          height: 385px;
        }

        .pic{
    position: relative;
    min-width: 400px;
    width: 800px;
    height: 400px;
}

.pic .animation{
position: absolute;
inset: 0;
background: #070606;
overflow: hidden;

}

.pic .animation::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 200px;
    background: linear-gradient(transparent, #D41028, #D41028, transparent);
    animation: animate 8s linear infinite reverse;
}

@keyframes animate{
    0%{
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100%{
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.pic .animation::after{
    content: '';
    position: absolute;
    inset: 7px;
    background: rgb(26, 26, 26);
}
.about h2{
            color: #D41028;
            font-weight: 900;
            font-size: 6vh;
            left: 0;
            line-height: 5rem;
            padding-left: 8% ;
          }
  .about p{
            color: rgb(220, 220, 220);
            padding-left: 8%;
          }

          @media screen and (width <= 768px) {
              .pic{
                width: 310px;
                height:380px;
              }
            .about{
              flex-direction: column;
              overflow-x: hidden;
            }
            .aboutpic{
              position: relative;
              top:4px;
              width: calc(97%);
              height: calc(97.8%);
            }

            .about p{
              padding-left: 0;
            }
          }

          @media screen and (width <600px){
            .about{
              margin-top: 80px ;
            }
    .pic{
           
              height:400px;
              }

            .about{
              flex-direction: column;
              overflow-x: hidden;
            }
            .aboutpic{
              position: relative;
              top:4px;
              width: calc(97%);
              height: calc(97.8%);
            }

          }
          @media screen and (width <= 1440px) {
            .about{
        margin-bottom: 23.5%;

    }
          }

</style>
