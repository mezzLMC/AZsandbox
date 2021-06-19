<template>
  
  <p>value is {{starttime}} </p>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'




paypal.Buttons({
    style:{
        color: "blue",
        shape: "pill",
    },
    createOrder: function(data,actions){
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: "50"
                }
            }]
        })
    },
    onApprove: function(data,actions){
        return actions.order.capture().then(function(details){
            console.log(details)
        })
    }
}).render('body');
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
