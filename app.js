const hideBtn = document.getElementById("hideBtn")
const showBtn = document.getElementById("showBtn")
const toggleBtn = document.getElementById("toggleBtn")
const hoverText = document.getElementById("hoverText")
const clickText = document.getElementById("clickText")

const CapitalName = document.querySelector(".CapitalName")

console.log(clickText);

const hbtn  = () =>{
    CapitalName.style.display = "none"
}
hideBtn.addEventListener("click", hbtn)

const sbtn  = () =>{
    CapitalName.style.display = "block"
}
showBtn.addEventListener("click", sbtn)

const tgbtn  = () =>{
    if(CapitalName.style.display === "none"){
        CapitalName.style.display = "block"
    }else{
        CapitalName.style.display = "none"
    }
}
toggleBtn.addEventListener("click", tgbtn)

hoverText.addEventListener("mouseover", () =>{
    hoverText.classList.add("hover-yellow")
})

hoverText.addEventListener("mouseout", () => {
    hoverText.classList.remove("hover-yellow");
});

clickText.addEventListener("click", () =>{
    clickText.classList.add("click-green")
})