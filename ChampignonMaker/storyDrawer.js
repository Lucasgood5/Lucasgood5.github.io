const DEFAULT_STORY = `Lucas fut baptisé en 2019 en FMM en tant que "Girolle".
Cette année fut maudite par le Covid l'empêchant de s'investir.
Cependant, dès la fin du confinement en 21, il rejoignit le Café Male.
Mais cela ne lui suffisait pas, il voulait s'investir encore plus.

Alors en 2022 quand la FCA fut créée, il se proposa pour la trésorerie.
Il récidiva l'année suivante et fut élu trésorier de la FCA 23.
Il s'investit à fond dans ce poste, mais il ne se contenta pas de ça.

A la fin de son mandat, il voulait toujours plus s'investir pour la FMM.
En 2024, il se proposa pour le poste de trésorier de la FMM.

Malheureusement, il ne fut pas élu, mais cela ne l'arrêta pas.
A défaut d'une toge, il se proposa pour être condé pour la bleusaille.
Lors du triste besoin d'un nouveau secretaire Fronta, il repondit.

Et aujourd'hui il est de toujours prêt à s'investir pour la FMM.
Il se presente humblement pour le poste de trésorier de la FMM 25.

Reussira t'il ça quête ? A vous de le décider !
`

function getStory() {
    const storyText = document.getElementById('storyText');
    if (storyText) {
        if (storyText.value) {
            return storyText.value;
        }
    }
    return DEFAULT_STORY;
}

function drawStory(ctx) {
    const POST = {
        X: ctx.canvas.width - ScreenScaleX(625),
        Y: ScreenScaleY(75),
        W: ScreenScaleX(600),
        H: ScreenScaleY(750),
    }
    drawCrossRectangle(ctx, POST.X, POST.Y, POST.W, POST.H, COLOR.BLUE_FMM, COLOR.BLUE_Hollow, ScreenScaleX(20), ScreenScaleX(10));

    ctx.fillStyle = COLOR.WHITE_tintedBlue;
    ctx.font = fontMaker(48, true, undefined, ctx.canvas.height)
    ctx.textAlign = "center";
    ctx.fillText("Histoire :", POST.X + POST.W / 2, POST.Y + ScreenScaleY(75));


    ctx.fillStyle = COLOR.WHITE_tintedBlue;
    ctx.font = fontMaker(18, false, undefined, ctx.canvas.height)
    ctx.textAlign = "center";
    const lines = getStory().split("\n");
    const lineHeight = ScreenScaleY(30);
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        ctx.fillText(line, POST.X + POST.W / 2, POST.Y + ScreenScaleY(150) + i * lineHeight);
    }
}