<template lang="">
       <div class="contactsection container-lg" id="Contact">
          <h1 class="contact mb-5 text-uppercase fw-bold-semi" style="color:#D41028 ;  text-shadow: 2px 1px 1px #070606;">Contact Me</h1>
          <form action="https://formspree.io/f/mgejrovj" method="POST" class="form" style="padding-bottom: 7%;">
              <div class="row justify-content-center">
                <div class="col-5">
                  <input type="text" class="form-control" name="name" placeholder="First name" aria-label="First name" required>
                </div>
                <div class="col-5">
                  <input type="text" class="form-control" name="lastname" placeholder="Last name" aria-label="Last name" required>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-10 mb-3">
                  <label for="exampleInputEmail1" class="form-label"></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Your Email" required>
                  <div id="emailHelp" class="form-text"></div>
                </div>
            
                <div class="col-10 mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message" placeholder="Enter Message Here" required></textarea>
                </div>
              </div>
              
              <button type="submit" class="btn subby" name="submit"  target="_none">Submit</button>
            </form>
    
            <div class="deta justify-content-around">
              <a href="mailto: kellermandaanyaal2@gmail.com" class="my-3 mail" mail><i class="fa fa-envelope"></i>kellermandaanyaal2@gmail.com</a>
              <text class="my-3"><i class="fa fa-phone"></i> +27 68 007 1963</text>
            </div>
            
        </div>
                      
</template>
<script>

export default {

}
</script>
<style scoped>
      
    form input{
      border-radius: 0px;
    }

    form textarea{
      border-radius: 0px;
    }
    
    .contactsection{
      min-height: 80vh;
      margin-top: 8%;

    }
    .form-control{
        border: 2px solid #D41028;
        background: #070606;
        color: #D41028;
        align-items: center;
    }
    .subby{
        font-size: 18px;
        
        border: 2px solid #D41028;
        color: #D41028;
        border-radius: 0px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 150px;
        margin-left: 485px;
       
    }
    .subby:hover{
      border: 2px solid #D41028;
      background-color: #070606;
      color: #D41028;
      border-radius: 0px;
    }
    .contact{
        text-align: center;
      color: #D41028;

    }
    .deta{
      display: flex;
      color: #D41028;
    }

    .mail{
      text-decoration: none !important;
      color: #D41028 !important;
    }

    input::placeholder{
      color: #D41028;
    }

    textarea::placeholder{
      color: #D41028;
    }
    @media (width:425px){
      .subby{
        margin: 0px;
       margin-left:125px; 
      }
    }
    @media (width:375px){
      .subby{
        margin:0px;
        margin-left:100px;
      }
    }
    @media (width:320px){
      .subby{
        margin:0px;
        margin-left:75px;
      }
    }
    @media (width:768px) {
      .subby{
        margin:0px;
        margin-left: 300px;
      }
    }
    @media (width <600px){
        .contact{
            margin-top: 20%;
        }
        .contact form{
          margin-top: 10%;
        }
        .deta{
          flex-direction: column;
        }
        .subby{
        font-size: 18px;
        
        border: 2px solid #D41028;
        color: #D41028;
        border-radius: 0px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
       
       
    }
    }
    /* end of css */
</style>