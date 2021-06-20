let busyTimes = [
    {
        day: "monday",
        startTime: "10:00",
        endTime: "13:00"
    },
    {
        day: "monday",
        startTime: "15:00",
        endTime: "17:00"
    },
]

let times = Array.from(document.getElementById("times").children).map(element=>{
    return element.getElementsByTagName("span")[0].innerHTML
})  

let timeTable = {
    monday: times,
    tuesday: times,
    wednesday: times,
    thursday: times,
    friday: times,
}

busyTimes.forEach(element=>{
    let node = document.createElement("li")
    node.classList.add("cd-schedule__event")
    let inner = document.createElement("a")
    inner.setAttribute("data-start",element.startTime)
    inner.setAttribute("data-end",element.endTime)
    inner.setAttribute("data-event","used")
    inner.setAttribute("data-content","event-yoga-1")
    node.appendChild(inner)
    document.getElementById(element.day).appendChild(node)
    
    let startIndex = times.indexOf(element.startTime)
    let endIndex = times.indexOf(element.endTime)
    let delta = endIndex - startIndex
    timeTable[element.day].splice(startIndex+1,delta)
    console.log(timeTable[element.day])
})

function pairwise(arr, func){
    for(var i=0; i < arr.length - 1; i++){
        func(arr[i], arr[i + 1])
    }
}

pairwise(timeTable.monday, function(current, next){
    console.log(current, next)
})






