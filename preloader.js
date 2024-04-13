let div = document.getElementById("preloader")
const PathArray = []
for (let i = 1; i <= 12; i++)
    PathArray.push(`./rsc/img/2022/400jpg/${i}.jpg`)
for (let i = 1; i <= 8; i++)
    PathArray.push(`./rsc/img/2023/400jpg/${i}.jpg`)
for (let i = 1; i <= 5; i++)
    PathArray.push(`./rsc/img/2023/400jpg/b${i}.jpg`)
for (let i = 1; i <= 7; i++) for (let j = 0; j < 2; j++)
    PathArray.push(`./rsc/img/2024/400jpg/${j ? "a" : ""}${i}.jpg`)

PathArray.push(`./rsc/img/soontm.png`)

for (let i of PathArray) {
    let img = document.createElement("img")
    img.src = i
    img.style.display = "none"
    img.style.visibility = "hidden"
    div.appendChild(img)
}