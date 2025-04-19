function getAttributesHeight() {
    return 500
}

function getAttributesColorSet() {
    return ColorSet.RED
}

function getAttributesArray() {
    let input = document.getElementById("attributesList")
    if (input) {
        let att = []
        for (let i = 0; i < input.children.length; i++) {
            const name = input.children[i].children[1].value
            const value = input.children[i].children[3].value
            const description = input.children[i].children[5].value
            if (name && value && description) {
                att.push({
                    name: name,
                    value: parseInt(value),
                    description: description,
                })
            }
        }

        if (att.length > 0) {
            return att
        }
    }

    return [
        { name: "Gestion", value: 90, description: "Maîtrise les budgets et bilans" },
        { name: "Détermination", value: 100, description: "Ne lâche rien et va au bout" },
        { name: "Fiabilité", value: 95, description: "Toujours au poste, toujours carré" },
        { name: "Clarté", value: 100, description: "Lisible comme un livre ouvert" },
        { name: "Charisme Excel", value: 85, description: "Rend sexy les tableurs" },
    ]
}

function drawAttributes(ctx) {
    const POS = {
        X: ScreenScaleX(25),
        Y: ScreenScaleY(25),
        W: ScreenScaleX(600),
        H: ScreenScaleY(getAttributesHeight()),
    }
    const COLORS = getAttributesColorSet()
    drawCrossRectangle(ctx, POS.X, POS.Y, POS.W, POS.H, COLORS.FMM, COLORS.Hollow, ScreenScaleX(20), ScreenScaleX(10))
    ctx.fillStyle = COLORS.tintedWhite;
    ctx.font = fontMaker(48, true, undefined, ctx.canvas.height)
    ctx.textAlign = "center";
    ctx.fillText("Attributs :", POS.X + POS.W / 2, POS.Y + ScreenScaleY(75));
    for (let i = 0; i < getAttributesArray().length; i++) {
        let aPOS = {
            X: POS.X + ScreenScaleX(25),
            Y: POS.Y + ScreenScaleY(125) + i * ScreenScaleY(75),
            W: POS.W - ScreenScaleX(50),
            H: ScreenScaleY(75),
        }
        drawAnAttribute(ctx, getAttributesArray()[i], aPOS)
    }
}

function drawAnAttribute(ctx, attr, POS) {
    const COLORS = getAttributesColorSet()
    ctx.fillStyle = COLORS.tintedWhite;
    ctx.font = fontMaker(32, false, undefined, ctx.canvas.height)
    ctx.textAlign = "left";
    ctx.fillText(attr.name, POS.X, POS.Y);
    ctx.textAlign = "right";
    ctx.fillText(attr.value, POS.X + POS.W, POS.Y);
    ctx.font = fontMaker(24, false, undefined, ctx.canvas.height)
    ctx.textAlign = "left";
    ctx.fillText(attr.description, POS.X, POS.Y + ScreenScaleY(30));
}