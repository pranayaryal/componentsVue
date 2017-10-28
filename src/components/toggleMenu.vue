<template>
    <div class="container-fluid">
        <div class="toggle-box">
            <p>Click to display menu</p>
        </div>
    </div>

</template>
<script>

</script>


<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

    .toggle-box {
        margin: 0 20px;
        padding: 20px 10px 0;
        height: 70px;
        border: 1px solid grey;
        text-align: left;
    }

    @media (min-width: 1025px) and (max-width: 1920px) {
        .toggle-box {
            display: none;
        }
    }

</style>