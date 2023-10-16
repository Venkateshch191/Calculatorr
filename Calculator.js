function ac(){
    var x =document.getElementById("values")
   x.value = ""
}

function getvalues(num){
    var x = document.getElementById("values")
    x.value += num
} 
function calculator(){
    try{
        var x = document.getElementById("values")
        x.value = eval(x.value)
    } catch (error){
        x.value =x.value.innerHtml ="error"
    }
}