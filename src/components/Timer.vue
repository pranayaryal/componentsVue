<template>
    <div>
       <div class="container">
           <br>
           <div class="row">
               <div class="col-md-4">
                   <svg width="400" height="100">
                       <rect class="pom-type" width="350" height="50" style="fill: steelblue">
                           You are here
                       </rect>
                   </svg>
               </div>
               <div class="col-md-4">
                   <svg width="400" height="100">
                       <rect width="350" class="pom-type" height="50" style="fill: steelblue">
                           You are here
                       </rect>
                   </svg>
               </div>
               <div class="col-md-4">
                   <svg width="400" height="100">
                       <rect width="350" height="50" class="pom-type" style="fill: steelblue">
                           <p>You are here</p>
                       </rect>
                   </svg>
               </div>
           </div>
           <div class="row">
               <div class="col-12 col-md-6 mx-auto text-center my-5">
                   <p class="lead">1:10</p>
               </div>
           </div>
           <div class="row">
               <div class="col-12 col-md-4 mx-auto text-center">
                   <a href="#" class="btn btn-block btn-primary border-0 text-white py-3">Start</a>
               </div>
               <div class="col-12 col-md-4 mx-auto text-center">
                   <a href="#" class="btn btn-block btn-warning border-0 text-white py-3">Reset</a>
               </div>
               <div class="col-12 col-md-4 mx-auto text-center">
                   <a href="#" class="btn btn-block btn-danger border-0 text-white py-3">Stop</a>
               </div>

           </div>
       </div>
    </div>
</template>

<script>
</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

    .lead{
        font-size: 100px;
    }
</style>