var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue !',
      startTime: "",
      endTime: "",

    }
})



document.getElementById("yes").onclick = function(){
    let x = app.$data.startTime
    console.log(typeof(x))
}