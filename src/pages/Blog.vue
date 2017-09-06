<template>
   <div>
      <navigation></navigation>
      <p class="container">You are in blog page</p>
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

<style>

</style>