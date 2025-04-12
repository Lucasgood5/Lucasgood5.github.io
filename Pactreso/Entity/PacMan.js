let img_pacman = new Image();
img_pacman.src = "./Images/girolle.png";

class PacMan extends MobileEntity {
    constructor(stage, x, y, speed, image = img_pacman) {
        super()
        this.stage = stage;
        // x et y correspondent aux coordonnées du centre de PacMan
        if (x === undefined) throw new Error("x is undefined");
        if (y === undefined) throw new Error("y is undefined");
        if (isNaN(x)) throw new Error("x is NaN");
        if (isNaN(y)) throw new Error("y is NaN");
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.image = image;

        this.collider = new MovementHandler();

        this.oldDir = MovementHandler.DIRECTION.NONE;
        this.currentDir = MovementHandler.DIRECTION.NONE;
        this.wishDir = null;

        this.isBoosted = false;
        this.boostStartTimestamp = null;
    }

    setDirection(dir) { this.wishDir = dir }

    update(dT) {
        if (this.wishDir !== null && this.canMove(this.wishDir)) {
            this.oldDir = this.currentDir;
            this.currentDir = this.wishDir;
        }

        this.move(this.currentDir, dT);

        if (!this.canMove(this.currentDir))
            this.currentDir = this.oldDir;
    }

    // Méthode de dessin : on centre l'image sur (this.x, this.y)
    draw(ctx) {
        let ts = this.stage.getDisplaySettings().tileSize;
        if (this.isBoosted) this.drawIsBoostedEffect(ctx);
        ctx.drawImage(this.image, this.x - ts / 2, this.y - ts / 2, ts, ts);
        // this.DEBUG_drawMobilityInfo(ctx)
    }

    boost() {
        this.isBoosted = true;
        this.boostStartTimestamp = Date.now();
        setTimeout(() => {
            this.isBoosted = false;
        }, 15000);
    }

    drawIsBoostedEffect(ctx) {
        if (!this.isBoosted) return;
        let ts = this.stage.getDisplaySettings().tileSize;
        let boostDurationPercentLeft = 1 - (Date.now() - this.boostStartTimestamp) / 15000;

        // Draw some line/ray around PacMan

        for (let line_I = 0; line_I < boostDurationPercentLeft * 5; line_I++) {
            let randAngle = Math.random() * 2 * Math.PI;
            let lineLength = Math.random() * ts * (boostDurationPercentLeft + 1) / 2
            let lineX = Math.cos(randAngle) * lineLength;
            let lineY = Math.sin(randAngle) * lineLength;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + lineX, this.y + lineY);
            ctx.strokeStyle = "rgba(255, 255, 0, 1)";
            ctx.lineWidth = Math.random() * 5;
            ctx.stroke();
            ctx.closePath();
        }

    }
}
