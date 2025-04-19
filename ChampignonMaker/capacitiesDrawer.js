function getCapacities() {
    let list = document.getElementById("capacitiesList")
    if (list) {
        let capacities = []
        for (let i = 0; i < list.children.length; i++) {
            const name = list.children[i].children[1].value
            const effet = list.children[i].children[3].value
            const description = list.children[i].children[5].value
            // < label > Rouge ou Bleu:</label>
            //     <select id="capColor${index}">
            //         <option value="rouge" ${cap.color === 'rouge' ? 'selected' : ''}>Rouge</option>
            //         <option value="bleu" ${cap.color === 'bleu' ? 'selected' : ''}>Bleu</option>
            //     </select>
            const colorSet = list.children[i].children[7].value
            if (name && effet && description) {
                capacities.push({
                    name: name,
                    effet: effet,
                    description: description,
                    colorSet: colorSet == "rouge" ? ColorSet.RED : ColorSet.BLUE
                })
            }
        }
        if (capacities.length > 0) {
            return capacities
        }
    }

    return [
        {
            name: "Passif - FCA 23",
            effet: "+20% expérience, +15% gestion, +10% rigueur.",
            description: "L'experience est la clé de la réussite.",
            colorSet: ColorSet.BLUE
        },

        {
            name: "Facture ou Fracture",
            effet: "Ne laisse pas passer le moindre oublie.",
            description: "Relance implacable pour documents manquants ou flous.",
            colorSet: ColorSet.RED
        },
        {
            name: "Contrôle croisé",
            effet: "Anticipe les erreurs grâce à une rigueur obsessionnelle.",
            description: "Note tout, garde tout, classe tout.",
            colorSet: ColorSet.RED
        },
        {
            name: "Promesse - Compte Clair",
            effet: "Comptes publics et transparents jusqu’au dernier centime.",
            description: "Tableurs alignés, colonnes verrouillées, tout est carré.",
            colorSet: ColorSet.BLUE
        },
    ]
}


function drawCapacities(ctx) {
    const POS = {
        X: ScreenScaleX(25),
        Y: ScreenScaleY(550),
        W: ScreenScaleX(600),
        H: ScreenScaleY(500)
    }
    const CAPACITIES = getCapacities()

    const H_per_Capacity = POS.H / CAPACITIES.length;

    for (let i = 0; i < CAPACITIES.length; i++) {
        const CapPOS = {
            X: POS.X,
            Y: POS.Y + i * H_per_Capacity,
            W: POS.W,
            H: H_per_Capacity - ScreenScaleY(10),
        }
        drawACapacity(ctx, CAPACITIES[i], CapPOS);
    }
}

function drawACapacity(ctx, capacity, POS) {
    const COLORS = capacity.colorSet
    drawCrossRectangle(ctx, POS.X, POS.Y, POS.W, POS.H, COLORS.FMM, COLORS.True, ScreenScaleX(20), ScreenScaleX(5));
    ctx.fillStyle = COLORS.tintedWhite;
    ctx.font = fontMaker(40, true, undefined, ctx.canvas.height)
    ctx.textAlign = "center";
    ctx.fillText(capacity.name, POS.X + POS.W / 2, POS.Y + ScreenScaleY(50));
    ctx.font = fontMaker(20, false, undefined, ctx.canvas.height)
    ctx.textAlign = "left";
    ctx.fillText(capacity.effet, POS.X + ScreenScaleX(35), POS.Y + ScreenScaleY(75));
    ctx.fillText(capacity.description, POS.X + ScreenScaleX(35), POS.Y + ScreenScaleY(100));
}