<template>
    <div>
        <navigation></navigation>
        <div class="row">
           <div class="col-md-4">
               <naksha src="https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg">
                   My name is flerri and I am only 2 months old.</naksha>
           </div>
            <div class="col-md-4"><naksha src="src/assets/images/bag.jpg">This is my Bag</naksha>
            </div>
            <div class="col-md-4">
                <naksha src="https://static.pexels.com/photos/416160/pexels-photo-416160.jpeg">
                    My name is jando and I am only 3 months old. Clearly, I love to have fun!</naksha>
            </div>
        </div>

    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import Naksha from '../components/Naksha.vue'
    import BootstrapNav from '../components/BootstrapNav.vue'

    export default{
        name: 'app',
        components: {
            Navigation,
            Naksha,
            BootstrapNav
        }
    }
</script>
<style>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
</style>