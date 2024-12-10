const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach(content => content.style.display = "none");
        contents[index].Style.display = "block";
        button.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active")
    });
})