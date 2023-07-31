const divList = document.querySelectorAll(".un55");
const burger = document.querySelector(".burger")
const nav = document.querySelector('.nav')


divList.forEach((div) => {
  const icon = div.querySelector("#icon");

  div.addEventListener("click", () => {
    div.classList.toggle("reverse");
    icon.classList.toggle("times");
  });
});

burger.addEventListener("click",()=>{
  burger.classList.toggle("rotate")
  nav.classList.toggle("burger-dropdown")
})






