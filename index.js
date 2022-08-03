const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const anadir = document.querySelectorAll(".anadir");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});



const gomaMora = {
    sabor : "mora",
    mg : 10,
    precio : 100,
    stock : true
}

const gomaFresa = {
    sabor : "fresa",
    mg : 15,
    precio : 150,
    stock : true
}

const gomas = [gomaMora,gomaFresa]

console.log(gomas)