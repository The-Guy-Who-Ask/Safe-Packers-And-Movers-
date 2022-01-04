document.querySelector(".center .para p").style.marginRight = '2.5em'
document.querySelector(".nav").addEventListener("mouseover", ()=>{
    document.querySelector(".center .para p").style.marginRight = '8em'
    console.log(document.querySelector(".center .para p").style.marginRight)
})
document.querySelector(".nav").addEventListener("mouseout", ()=>{
    document.querySelector(".center .para p").style.marginRight = '2.5em'
    console.log(document.querySelector(".center .para p").style.marginRight)
})
document.querySelector(".center .info p").style.marginRight = '2.5em'
document.querySelector(".nav").addEventListener("mouseover", ()=>{
    document.querySelector(".center .info p").style.marginRight = '8em'
    console.log(document.querySelector(".center .info p").style.marginRight)
})
document.querySelector(".nav").addEventListener("mouseout", ()=>{
    document.querySelector(".center .info p").style.marginRight = '2.5em'
    console.log(document.querySelector(".center .info p").style.marginRight)
})