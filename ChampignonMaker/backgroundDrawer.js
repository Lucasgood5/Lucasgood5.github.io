// Background should also include the selected character

const IMG = {
    Girolle: new Image(),
    Doyenne: new Image(),
    Corleone: new Image(),
    Background: new Image(),
    Concu1: new Image(),
    Concu2: new Image(),
    Concu3: new Image(),
    CustomBackground: new Image(),
}
IMG.Girolle.src = "./../Pactreso/Images/girolle.png"
IMG.Doyenne.src = "./../Pactreso/Images/doyenne.png"
IMG.Corleone.src = "./../Pactreso/Images/corleonne.png"
IMG.Background.src = "./Images/collegiale.png"

function getSelectedBackground() {
    const backgroundLink = document.getElementById('backgroundImage');
    if (backgroundLink) {
        if (backgroundLink.value) {
            IMG.CustomBackground.src = backgroundLink.value;
            return IMG.CustomBackground;
        }
    }
    return IMG.Background;
}



function drawBackground(ctx) {
    if (getSelectedBackground() === undefined) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#444"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } else {
        ctx.drawImage(getSelectedBackground(), 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

}

function drawPlayButton(ctx) {
    const POS = {
        X: ctx.canvas.width - ScreenScaleX(625),
        Y: ctx.canvas.height - ScreenScaleY(225),
        W: ScreenScaleX(600),
        H: ScreenScaleY(150),
    }
    drawCrossRectangle(ctx, POS.X, POS.Y, POS.W, POS.H, COLOR.RED_FMM, COLOR.RED_True, ScreenScaleX(25), ScreenScaleX(10))
    ctx.fillStyle = COLOR.WHITE_tintedRed;
    ctx.font = fontMaker(60, true, undefined, ctx.canvas.height)
    ctx.textAlign = "center";
    ctx.fillText("VOTER !", POS.X + POS.W / 2, POS.Y + POS.H / 2 + ScreenScaleY(20));
    ctx.fillStyle = COLOR.BLUE_True;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawCharacterSelector(ctx) {
    for (let i = -1; i < 2; i++) {
        const POS = {
            X: ctx.canvas.width / 2 + ScreenScaleX(200) * (i) - ScreenScaleX(100),
            Y: ctx.canvas.height - ScreenScaleY(250),
            W: ScreenScaleX(200),
            H: ScreenScaleY(200),
        }

        let borderColor = i == 0 ? COLOR.BLUE_True : COLOR.RED_FMM
        let backgroundColor = i == 0 ? COLOR.BLUE_Hollow : COLOR.RED_dark
        let inset = i == 0 ? ScreenScaleX(5) : ScreenScaleX(10)
        let borderWidth = ScreenScaleX(10)
        ctx.fillStyle = borderColor;
        ctx.strokeStyle = borderColor;
        ctx.fillRect(POS.X + inset, POS.Y + inset, POS.W - inset * 2, POS.H - inset * 2);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(POS.X + inset + borderWidth, POS.Y + inset + borderWidth, POS.W - inset * 2 - borderWidth * 2, POS.H - inset * 2 - borderWidth * 2);
        let img = getCharacterLogo(i)
        if (img !== undefined) {
            ctx.drawImage(img, POS.X + inset * 3, POS.Y + inset * 3, POS.W - inset * 6, POS.H - inset * 6);
        } else {
            ctx.fillStyle = "#000"
            ctx.font = fontMaker(60, true, undefined, ctx.canvas.height)
            ctx.textAlign = "center";
            ctx.fillText("?", POS.X + POS.W / 2, POS.Y + POS.H / 2 + ScreenScaleY(20));
        }
    }
}

function getCharacterLogo(i) {
    let link = document.getElementById('characterImage' + (i + 2));
    if (link) {
        if (link.value) {
            IMG['Concu' + (i + 2)].src = link.value;
            return IMG['Concu' + (i + 2)];
        }
    }
    switch (i) {
        case -1:
            return IMG.Doyenne;
        case 0:
            return IMG.Girolle;
        case 1:
            return IMG.Corleone;
        default:
            return undefined;
    }
}