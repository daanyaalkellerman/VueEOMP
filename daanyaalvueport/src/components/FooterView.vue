<template lang="">
  <section>
        <div class="container-fluid footer">
          <footer
            class="d-flex flex-wrap align-items-center my-1 mt-3"
          >
            <div class="col-md-4 d-flex align-items-center">
              <span class="mb-3 mb-md-0 footword"
                ><i class="fa-regular fa-copyright"></i> Daanyaal Kellerman|{{currentYear}}|All Rights Reserved</span>
            </div>

            <ul class="nav col-md-4 justify-content-center d-flex footic">
              <li class="ms-3">
                <a
                  class="icon"
                  href="https://instagram.com/daanyaalkellerman/" target="_blank"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li class="ms-3">
                <a
                  class="icon"
                  href="https://github.com/daanyaalkellerman"
                  target="_blank"><i class="fa fa-github"></i
                ></a>
              </li>
              <li class="ms-3">
                <a
                  class="icon"
                  href="https://youtube.com/@daanyaalkellerman" target="_blank"
                  ><i class="fa fa-youtube-play"></i
                ></a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
</template>
<script>
export default {
  data(){
    return {
      currentYear: new Date().getFullYear()
    }

  }
}
</script>
<style>
  .footword{
    color:#D41028
  }
  #footwor{
    color:#D41028
  }
.footic{
      color: #fff;
    }
    .footer{
      position: absolute;
      text-align: center;
      background-color: #070606;

    }
footer{
    justify-content: space-around !important;
    font-size: 12px;
}

.footer-bar {
    margin: 0px;
    justify-content: space-around;
}
.footinfo {
    text-align: left;
}
.icon{
  color: #D41028;
}

</style>