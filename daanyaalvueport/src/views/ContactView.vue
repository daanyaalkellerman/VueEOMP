<template lang="">

     <section>
        <div class="contact-body">
          <div id="contact-form">
            <h1 class="contact-h3">Contact us</h1>
            <form
              id="contact-form-id"
              class="contact-form-class"
              method="POST"
              action="https://formspree.io/f/mgejrovj" target="_blank"
            >
              <div class="contact-form-group">
                <label for="Name" class="contact-label">Full Name</label>
                <div class="contact-input-group">
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    class="contact-form-control"
                    required
                  />
                </div>
              </div>

              <div class="contact-form-group">
                <label for="Email" class="contact-label">Email</label>
                <div class="contact-input-group">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    class="contact-form-control"
                    required
                  />
                </div>
              </div>

              <div class="contact-form-group">
                <label for="Message" class="contact-label">Message</label>
                <div class="contact-input-group">
                  <textarea
                    id="Message"
                    name="Message"
                    class="contact-form-control"
                    rows="6"
                    maxlength="3000"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="contact-form-group">
                <button
                  type="submit"
                  id="contact-button"
                  class="contact-btn contact-btn-primary contact-btn-lg contact-btn-block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
 
</template>
<script>

export default {

}
</script>
<style scoped>
        
        #contact-form {
        display: block;
}

.contact-body {
    margin: 0;
    margin-top: 10%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(196, 195, 195);
    text-align: left;
    background-color: transparent;
    padding: 30px;
    padding-bottom: 10px;
    border-radius: 0.25rem;
    max-width: 100%;
}
.contact-h3 {
    color: rgb(179, 1, 1);
    font-size: 50px;
    margin-bottom: 60px;
}

.contact-form-group {
    margin-bottom: 1rem;
}
.contact-input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
}

.contact-form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(196, 195, 195);
    background-color: rgb(179, 1, 1);
    background-clip: padding-box;
    border: 1px solid rgb(196, 195, 195);
    outline: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.contact-form-control:focus {
    border: 1px solid #313131;
}

select.contact-form-control[size],
select.contact-form-control[multiple] {
  height: auto;
}

textarea.contact-form-control {
    height: auto;
}

label.contact-label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.contact-btn {
    display: inline-block;
    font-weight: 400;
    color: rgb(179, 1, 1);
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


.contact-btn:hover {
    color: rgb(196, 195, 195);
    text-decoration: none;
}

.contact-btn:focus,
.contact-btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(196, 195, 195);
}

.contact-btn-primary {
    color: rgb(5, 5, 5);
    background-color: rgb(196, 195, 195);
    border-color: rgb(179, 1, 1);
}
.contact-btn-primary:hover {
    color: rgb(196, 195, 195);
    background-color: rgb(179, 1, 1);
    border-color: rgb(196, 195, 195);
}

.contact-btn-primary:focus,
.contact-btn-primary.focus {
    color: rgb(5, 5, 5);
    background-color: rgb(196, 195, 195);
    border-color: rgb(179, 1, 1);
    box-shadow: 0 0 0 0.2rem rgba(255, 38, 38, 0.5);
}

.contact-btn-lg,
.contact-btn-group-lg > .contact-btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
}

.contact-btn-block {
    display: block;
    width: 100%;
}
.contact-btn-block + .contact-btn-block {
    margin-top: 0.5rem;
}

input[type="submit"].contact-btn-block,
input[type="reset"].contact-btn-block,
input[type="button"].contact-btn-block {
    width: 100%;
}
</style>