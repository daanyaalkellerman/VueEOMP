<template lang="">
    
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark fixed-top p-0">
        <div class="container-fluid p-0 mx-3" id="navcon">
          <span class="navbar-brand mb-0 h1"
            ><img
              src="https://iili.io/JYdFufV.png"
              alt="kk"
          /></span>
          <button
            id="burger"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            aria-modal="true"
            role="dialog"
            style="visibility: visible"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title"
                id="offcanvasNavbarLabel"
                aria-modal="true"
              >
                Kellerman
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div id="offcanvas" class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end flex-grow-1 pe-3"
                data-bs-dismiss="offcanvas">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/resume" class="nav-link">Resume</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/projects" class="nav-link">Projects</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
   

}
</script>
<style>
#nav {
  background-color: #070606;
  font-size: medium;
  overflow-x: hidden;
  
}
.offcanvas{
    height: 100%;
 
  
}

#offcanvas {
  background-color: #070606;
  color: #D41028;
}
#offcanvasNavbar {
  background-color: #D41028;
  color: #070606;
}
#burger {
  background-color: #070606;
}

#but {
  background-color: #B82D24;
  color: #070606;
}
#but:hover {
  background-color: #B82D24;
  border: 1px solid;
  border-color: #fff;
}
#navcon span [alt="kk"] {
  width: 100px;
  height: 50px;
}
@media(max-width:425px){
  #navcon span [alt="kk"] {
  width: auto;
  height: 35px;
}
}
.icons a {
  padding: 0;
  font-size: 20px;
  color: #fff;
}

.icons a:hover {
  color: #D41028;  
}

.nav-item a{
  width: 10vw;
  height: 5vh;
  text-align: left;
}
</style>