<template>
    <div>
        <navigation></navigation>
        <div class="container">
            <div class="item-container">
                <div class="item-box">
                    <img class="item-image" src="../assets/images/bag.jpg" alt="">
                    <p>Bag</p>
                </div>
                <div class="item-box">
                    <img class="item-image" src="../assets/images/computer.jpg" alt="">
                    <p>Computer</p>
                </div>
                <div class="item-box">
                    <img class="item-image" src="../assets/images/computer.jpg" alt="">
                    <p>Computer</p>
                </div>
                <div class="item-box">
                    <img class="item-image" src="../assets/images/bag.jpg" alt="">
                    <p>Bag</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'

    export default{
        name: 'app',
        components: {
            Navigation
        }
    }
</script>
<style scoped>

    .item-container {
        flex-direction: column;
        justify-content: space-around;
    }

    .item-box {
        padding: 40px 15px;
        font-size: 14px;
        border-bottom: 1px solid red;

    }

    .item-box p{
        margin-top: 35px;
    }

    .item-image {
        height: 150px;
        width: 150px;
        transform: rotate(90deg);
    }

    @media (min-width: 480px) {

        .item-container {
            display: flex;
            flex-direction: row;
        }

        .item-box {
            font-size: 14px;
            background: white;
            width: 200px;
            height: 200px;
            margin: 70px 25px;
            align-items: center;
            justify-content: center;
            flex: 1;
            border: none;
            /*border: 1px solid grey;*/
        }

        .item-image {
            display: flex;
            height: 220px;
            width: 250px;
            transform: rotate(90deg);
        }

        .item-box p{
            margin-left: 13px;
        }

    }
</style>