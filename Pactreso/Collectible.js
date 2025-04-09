let img = {}
img.uneuro = new Image();
img.uneuro.src = "./Images/1euro.png";
img.deuxeuro = new Image();
img.deuxeuro.src = "./Images/2euro.png"; // Ensure the correct path to the image
img.beer = new Image();
img.beer.src = "./Images/beer.png"; // Ensure the correct path to the image

class Collectible {
    static ImagesCache = new Map();
    static GetImage(path) {
        if (Collectible.ImagesCache.has(path)) {
            return Collectible.ImagesCache.get(path);
        }
        let img = new Image();
        img.src = path;
        Collectible.ImagesCache.set(path, img);
        return img;
    }

    static imageByType = {
        "coin": img.uneuro,
        "beer": img.deux
    }

    constructor(stage, type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.collected = false;
        this.stage = stage;
    }

    static buildFromType(type, stage, x, y, ...args) {
        switch (type) {
            case "coin":
                return new Coin(stage, x, y, ...args);
            case "beer":
                return new Beer(stage, x, y, ...args);
            default:
                return new Collectible(stage, type, x, y);
        }
    }

    tryCollect(pacman) {
        if (this.collected) return
        const Distance = Math.sqrt(Math.pow(this.x - pacman.x, 2) + Math.pow(this.y - pacman.y, 2))
        if (Distance > this.stage.getDisplaySettings().tileSize * (this.size || 1)) return
        this.onCollect(pacman)
    }

    onCollect(pacman) {
    }


    draw(ctx) {
        if (this.collected) return;
        let size = this.stage.getDisplaySettings().tileSize * (this.size || 1);

        if (!this.image) {
            return;
        }
        try {
            ctx.drawImage(this.image, this.x - size / 2, this.y - size / 2, size, size);
        } catch (e) {
            console.error(e);
        }
    }
}

class Coin extends Collectible {
    constructor(stage, x, y, coinvalue = 1) {
        super(stage, "coin", x, y);
        this.coinvalue = coinvalue;
        console.log("Coin value: ", coinvalue);
        if (coinvalue == 1) {
            this.image = img.uneuro;
            this.size = 0.75
        } else if (coinvalue == 2) {
            this.image = img.deuxeuro;
            this.size = 0.75
        } else {
            throw new Error("Invalid coin value: " + coinvalue);
        }
    }

    onCollect(pacman) {
        this.collected = true;
        this.stage.gainScore(this.coinvalue);
    }
}

class Beer extends Collectible {
    constructor(stage, x, y) {
        super(stage, "beer", x, y);
        this.image = img.beer;
        this.size = 0.85
    }

    onCollect(pacman) {
        this.collected = true;
        pacman.boost();
    }
}