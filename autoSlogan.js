const Slogan = [
    "Pour un compte qui s'envole,<br>Votez Girolle !",
    "Pour pas que la caisse dégringole,<br>Votez Girolle !",
    "Pour une ambiance qui folle,<br>Votez Girolle !",
    "d'autre slogan soonTM"
]

function changeSlogan() {
    let sloganBoxs = document.getElementsByClassName("sloganBox");
    for (let i = 0; i < sloganBoxs.length; i++) {
        let randomSlogan = Slogan[Math.floor(Math.random() * Slogan.length)];
        sloganBoxs[i].innerHTML = randomSlogan;
    }
}

window.onload = setInterval(changeSlogan, 5000);
