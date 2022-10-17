const btnElement = document.querySelector(".ripple");

btnElement.addEventListener("mouseover",(e) => {
    const x = (e.pageX-btnElement.offsetLeft);
    const y = (e.pageY-btnElement.offsetTop);
    btnElement.style.setProperty("--Xposition", x + "px");
    btnElement.style.setProperty("--Yposition", y + "px")
})