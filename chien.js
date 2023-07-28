var favs = Array.from(document.querySelectorAll(".fa-heart"))
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"))
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))
var cards = Array.from(document.querySelectorAll(".card"))
for(let fav of favs)
{
    fav.addEventListener("click" , function(){
        if(fav.style.color == "black")
        {
            fav.style.color = "red"
        }else{
            fav.style.color = "black"
        }
        total()
    })
}
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click",function(){
        cards[i].remove()
        total()
    })
}
for (let plusBtn of plusBtns){
  plusBtn.addEventListener("click", function(){
    plusBtn.nextElementSibling.innerHTML++
    total()
  })  
}
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click" , function(){
    minusBtn.previousElementSibling.innerHTML > 0 ?
    minusBtn.previousElementSibling.innerHTML -- :
    null
    total()
    })

}
function total(){
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll(".unitt-price"))
    let s=0
    for(let i = 0 ; i < price.length ; i++){
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s;
}