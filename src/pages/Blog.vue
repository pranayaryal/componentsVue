<template>
   <div>
      <navigation></navigation>
      <br><br>
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h1>Writing Components in Vue</h1>
                  <hr class="red-hr">
              </div>
          </div>

          <div class="row">
              <div class="col-md-5">
                  <p class="lead">I am going to teach you how to build components in Vue.js</p>
              </div>
          </div>
          <div class="row">
              <div class="col-md-5">
                  <p>There are two things to keep in mind while writing components</p>
              </div>
          </div>
      </div>
   </div>
</template>

<script>
   import Navigation from '../components/Navigation.vue'

   export default{
       name: 'app',
       components:{
           Navigation
       }
   }

</script>

<style scoped>
    p {
        font-family: 'Work Sans', sans-serif;
    }

    .red-hr{
        border: 1px solid orange;
    }

</style>