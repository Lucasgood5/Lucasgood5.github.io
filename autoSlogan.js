const Slogan = [
    "Pour un solde bien gras,<br>Votez le rat, Votez Lucas !", // 2022
    "Pour un compte bien rempli,<br>Votez gigi !",
    "Pour un compte rond,<br>Votez le champignon !",
    "Pour une caisse bien comptée,<br>c'est Girolle qu'il faut voter !",
    "Pour un trésorier qui sais négocier,<br>c'est Girolle qu'il faut voter !",
    "Pour ne pas que la caisse degringolle,<br>Votez Girolle !",
    "Pour un comité épique,<br>Ajoutez Girolle à l'équipe !",
    "Pour toujours plus de thunes,<br>Mettez Girolle dans l'urne !",

    "Parce qu'il est tout mimi,<br>Votez Gigi !", // 2023
    "Fais pas ta kaïra,<br>Vote pour Lucas !",
    "Fais pas le mariole,<br>Vote pour Girolle",
    "Pour un trésorier qui donne tout,<br>Votez Girolle, votre meilleur atout !",

    //New OC
    "Pour une année sans chichi,<br>Votez pour Gigi !",
    "Pour un compte qui s'envole,<br>Votez Girolle !",
    "Pour pas que la caisse dégringolle,<br>Votez Girolle !",
    "Pour une ambiance folle,<br>Votez Girolle !",
    "Fais pas de conneries,<br>Vote pour Gigi !",

    "Pour que ton alcool reste moins cher que le gazole, Vote Girolle !", //Merci Garf

    // GPT-3
    "Pour un tréso en or, votez Girolle sans effort.",
    "Mettez Girolle à la tréso, pour des comptes plus beaux.",
    "Pour des finances crescendo, votez Girolle en tréso.",
    "Votez Girolle en tréso, pour des finances au top niveau."
]

function changeSlogan() {
    let sloganBoxs = document.getElementsByClassName("sloganBox");
    for (let i = 0; i < sloganBoxs.length; i++) {
        let randomSlogan = Slogan[Math.floor(Math.random() * Slogan.length)];
        sloganBoxs[i].innerHTML = randomSlogan;
    }
}

window.onload = setInterval(changeSlogan, 5000);
