const divList = document.querySelectorAll(".un55");

divList.forEach((div) => {
  const icon = div.querySelector("#icon");

  div.addEventListener("click", () => {
    div.classList.toggle("reverse");
    icon.classList.toggle("times");
  });
});
