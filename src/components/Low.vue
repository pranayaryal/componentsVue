<template>
    <div class="my-footer">
        <div class="container footer-container">

            <div>
                <p>Here</p>
            </div>
            <ul>
                <li class="work-sans">Legal</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
            </ul>
            <ul>
                <li class="work-sans">Privacy</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
            </ul>
            <ul>
                <li class="work-sans">Careers</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
            </ul>
            <ul>
                <li class="work-sans">Notices</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
                <li class="work-sans">Rhere</li>
            </ul>

            <!--<div class="row">-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans lead">Story</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans lead">Careers</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans lead">Press</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans lead">Legal</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->

            <!--</div>-->

            <!--</div>-->
            <!--<div class="row">-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans">Events</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans">Donate</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans">Worship</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->
            <!--<p class="work-sans">Media</p>-->
            <!--</div>-->
            <!--<div class="col-md-3">-->

            <!--</div>-->

            <!--</div>-->
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .work-sans {
        font-family: 'Work Sans', sans-serif;
        color: white;
    }

    .my-footer {
        background-color: #262F36
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        height: 500px;
        align-items: left;
        justify-content: flex-start;

    }

    .footer-container ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .footer-container li {
        margin: 0;
        letter-spacing: 0.0125em;
        text-align: left;
        font-size: 12px;
    }


    li:first-child {
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 800;
        color: magenta;
    }

    @media (min-width: 1025px) and (max-width: 1920px) {
        .footer-container {
            flex-direction: row;
            height: 400px;
            align-items: center;
            justify-content:center;
        }

        .footer-container li {
            margin-left: 150px;
            margin-right: 150px;
            margin-bottom: 10px;
            letter-spacing: 0.0125em;
            text-align: center;
            font-size: 15px;
        }

        .footer-container li:first-child{
            font-size: 17px;
        }
    }
</style>