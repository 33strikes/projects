const button1 = document.querySelector("#rgb");
const h1 = document.querySelector("h1");
button1.addEventListener("click", function () {
    const newColor = makerandColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makerandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 130 && g < 130 && b < 130) {
        document.querySelector(".heading").style.color = "green";
    } else {
        document.querySelector(".heading").style.color = "black";
    }
    return `rgb(${r},${g},${b})`;
}


const button2 = document.querySelector("#hex");
const h12 = document.querySelector("h1");
button2.addEventListener("click", function () {
    const hexColor = generateRandomColor();
    document.body.style.backgroundColor = hexColor;
    h12.innerText = hexColor;

})

const generateRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        if (color === "#000000") {
            document.querySelector(".heading").style.color = "white";
        }
    }
    return color;
}