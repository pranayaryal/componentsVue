<template>
    <div class="portfolio-content">
        <div class="row">
            <div class="toggle-box">
                <p>Click to display menu</p>
            </div>
        </div>
        <div class="sidebar-nav">
            <nav>
                <ul>
                    <li>
                        <p>One</p>
                    </li>
                    <li>
                        <p>Two</p>
                    </li>
                    <li>
                        <p>Three</p>
                    </li>
                    <li>
                        <p>Three</p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('the sidenav component is mounted');
        }

    }

</script>

<style scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

    .sidenav-heading {
        font-size: 17px;
        font-family: 'Nunito', sans-serif;
        line-height: 1.57142857em;
        letter-spacing: 0.21428571em;
        text-transform: uppercase;
    }

    .sidebar-nav{
        display: none;
    }

    .sidebar-nav ul {

        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .sidebar-nav li {
        text-align: center;
        padding-top: 10px;
        text-transform: uppercase;
    }


    .toggle-box {
        width: 100%;
        padding: 20px 10px 0;
        height: 70px;
        border: 1px solid grey;
        text-align: left;
    }

    @media (min-width: 1025px) and (max-width: 1920px) {
        .toggle-box {
            display: none;
        }

        .sidebar-nav{
            display: block;
        }
    }

</style>