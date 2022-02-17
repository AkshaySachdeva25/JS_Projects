document.getElementById("time").innerHTML = Date();

document.getElementById("btn").addEventListener("click", function(){
    console.log(Date.now);
    document.getElementById("time").innerHTML = Date();
})