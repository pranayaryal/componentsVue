<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <p class="control">
                        <input type="text" placeholder="Enter your coupon codes" @blur="$emit('applied')">
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    export default{

        methods:{
            onCouponApplied(){
                this.$emit('applied');
            }
        }

    }

</script>

<style>

</style>
