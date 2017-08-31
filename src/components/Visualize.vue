<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <slot></slot>
            </div>
        </div>
        <div class="chart"></div>

        <br>
        <button @click="sortData">Sort</button>
        <p class="control">
            <label for="number1">Number 1</label>
            <!--<input type="text" name="number1" placeholder="Enter first number" v-model="number1" @blur="appendData(number1)">-->
            <input type="text" name="number1" placeholder="Enter first number" v-model="number1"
                   @blur="appendData(number1)">
        </p>

    </div>
</template>

<script>

    var d3  = require('d3');

    export default{

        mounted(){
            console.log('d3 is being mounted');
            this.barChart();
//            this.barChart();

        },

        data(){
            return {

                values: [25, 15, 23, 40]
            }
        },

        methods: {
            barChart(){
                d3.select('.chart')
                    .selectAll('div')
                    .data(this.values)
                    .enter().append('div')
                    .style('width', function (d) {
                        return d * 10 + "px";
                    })
                    .text(function (d) {
                        return d;
                    });


            },

            appendData(number){
                this.values.push(parseInt(number));
                this.barChart();
            },

            sortData(){
                console.log('sort');
                this.values.sort();
                console.log(this.values);
                this.barChart();
            }

        }

    }


</script>


<style>

    .chart div {
        font: 10px sans-serif;
        background-color: steelblue;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }


</style>
