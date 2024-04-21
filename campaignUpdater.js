let div2024 = document.getElementById("2024div");
let now = new Date();
// let now = createDate(27, 17)
const soonTM = `Un autre indice arrive bientot !`
const Text = [
    ["Pour un tréso a tout péter, votez Girolle sans hésiter !", "Vous êtes plutôt team barbie ? Alors votez Gigi !"],
    ["Pour des comptes qui s'envolent, votez Girolle !", "Vous avez le vertige ?<br>Alors pour pas que la caisse se noie,<br>Votez girolle, y'a pas le choix ! "],
    ["Il est aussi bon derrière une caisse que dedans,<br>Votez Girolle c'est le meilleur plan !", "Pas fan des bébés ?<br>Vous préférez les gens experimentés ?<br>Alors votez Girolle, votre nouveau trésorier."],
    ["Pour décrocher l'or des jeux olympiques,<br>Ajoutez Girolle a l'équipe !", "Vous n'aimez pas la criminalité ?<br>Votez Girolle en trésorier !<br>Avec lui impossible de frauder !<br>La caisse sera en sécurité !"],
    ["Avec Girolle en trésorier,<br>Il y a rien a négocier !<br> Pour rentrer, il faut payer !", "Pas fan des douaniers ?<br>Votez Girolle votre contrebandier !"],
    ["Pour une innondation de billets,<br> c'est Girolle qu'il faut votez !", "Vous n'aimez pas la pluie ?<br>Alors pour une belle météo,<br>Votez Girolle en tréso !"],
    ["Pour gagnez des millions, votez pour le champignon !", "Vous préférez ne rien perdre ?<br>Alors pour une caisse bien gérée,<br>Votez Girolle, votre trésorier préféré !"],
]
const Dates = [
    createDate(15, 14),
    createDate(15, 18),
    createDate(16, 12),
    createDate(16, 18),
    createDate(17, 12),
    createDate(17, 16),
    createDate(18, 12),
    createDate(18, 18),
    createDate(19, 12),
    createDate(19, 18),
    createDate(20, 12),
    createDate(20, 18),
    createDate(21, 11),
    createDate(21, 12),
]
const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

if (now.getTime() < Dates[0].getTime()) { // AVANT Lundi 14h
    let imgb = document.createElement("div");
    imgb.innerHTML = `<div class="imgbox24"><span class="imgdesc">Pas d'inquiétude, les affiches arrives très vite !</span><img src="rsc/img/soontm.png" alt="SoonTM"><span class="imgdesc">Et la majorité par paire ?!</span><img src="rsc/img/soontm.png" alt="SoonTM"></div>`
    let h3 = document.createElement("h3");
    h3.innerHTML = `${days[0]}`
    div2024.appendChild(h3);
    div2024.appendChild(imgb);
} else {
    for (let i = 0; i < 7; i++) {
        let h3 = document.createElement("h3");
        h3.innerHTML = `${days[i]}`
        if (Dates[i * 2].getTime() <= now.getTime() && now.getTime() < Dates[i * 2 + 1].getTime()) {
            div2024.appendChild(h3);
            div2024.appendChild(makeNumber(i, true));
        } else if (Dates[i * 2 + 1].getTime() <= now.getTime()) {
            div2024.appendChild(h3);
            div2024.appendChild(makeNumber(i, false));
        }
    }
}


function makeNumber(n, half = false) {
    let div = document.createElement("div");
    div.classList.add("imgbox24");

    let span = document.createElement("span");
    span.classList.add("imgdesc");
    span.innerHTML = Text[n][0];
    div.appendChild(span);

    let img = document.createElement("img");
    img.src = `rsc/img/2024/400jpg/${n + 1}.jpg`;
    div.appendChild(img);

    if (half) {
        let span = document.createElement("span");
        span.classList.add("imgdesc");
        span.innerHTML = soonTM
        div.appendChild(span);

        let img = document.createElement("img");
        img.src = `rsc/img/soontm.png`;
        div.appendChild(img);
    } else {
        let span = document.createElement("span");
        span.classList.add("imgdesc");
        span.innerHTML = Text[n][1];
        div.appendChild(span);

        let img = document.createElement("img");
        img.src = `rsc/img/2024/400jpg/a${n + 1}.jpg`;
        div.appendChild(img);
    }
    return div;
}

function createDate(d, h, m = 0) {
    return new Date(`2024-04-${d > 9 ? d : "0" + d}T${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}+02:00`);
}