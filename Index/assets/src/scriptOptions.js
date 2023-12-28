
var numeroValorRange = document.getElementById("numero-range")


document.addEventListener("DOMContentLoaded", function () {
    var somGame = document.getElementById("check-box-som")
    var rangeInputValue = document.getElementById("range-input")
    if(rangeInputValue){
        rangeInputValue.addEventListener("input", ()=> {
            var rangeValue = rangeInputValue.value
            numeroValorRange.textContent = rangeValue
            localStorage.setItem("valorDoRange", rangeValue)
    })
    }else{
        console.error("Elemento nao encontrado.")
    }
})