<template>
    <div>
        <span style="font-size:30px;cursor:pointer" v-on:click="openNav()" class="togglenav">&#9776;</span>
        <div class="collapsenav" id="navcollapse">

            <span class="cross" @click="closeNav">&times;</span>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>

    export default{
        mounted() {
            console.log('collapsible nav is mounted');
        },

        data() {
            return {
                active: false
            }

        },

        methods: {
            closeNav() {
                $('#navcollapse').css('width', 0)
            },

            openNav() {
                console.log('nav opened')
                $('#navcollapse').css('width', '300px')
            },

            mouseLeave() {
                alert('you are in mouseleave')
//                this.active = !this.active;
//                console.log(this.active);
            }
        }
    }
</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

    .collapsenav{
        width: 0;
        height: 100%;
        overflow-x: hidden;
        transition: 0.5s;
        background-color: #f7f6f6;
        position: fixed;
        z-index: 1;
        top: 70px;
        left: -50px;
        padding: 40px 25px;
    }

    .collapsenav li{
        padding: 10px;
        margin-left: 50px;
        font-family: "Work Sans", sans-serif;
    }

    .collapsenav a{
        text-decoration: none;
    }

    .collapsenav li:hover{
        color: brown;
    }

    .cross{
        font-size: 36px;
        position: absolute;
        top: 0;
        right: 25px;
    }

    .togglenav{
        position: fixed;
        top: 70px;
        left: 3%;
    }

</style>