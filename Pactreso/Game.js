class GameHandler {
    static STATUS = {
        NOT_STARTED: "not started",
        PLAYING: "playing",
        GAME_OVER: "game over",
    }
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.status = GameHandler.STATUS.NOT_STARTED;
        this.score = 0;

        this.nextFrame();
        AttachControlsToGameHandler(this);
        this.variableSlogan = new VariableSlogan(10);
    }

    startNewGame() {
        if (this.status !== GameHandler.STATUS.NOT_STARTED && this.status !== GameHandler.STATUS.GAME_OVER)
            throw new Error("Game already started");
        this.score = 0;
        this.LoadLevel(1);
    }

    LoadLevel(level) {
        console.log("Loading level", level);
        this.currentStage = Stage.StageLoader(this, level);
        this.status = GameHandler.STATUS.PLAYING;
        this.lvl = level;
    }

    RelayInput(input) {
        if (this.status == GameHandler.STATUS.PLAYING)
            this.currentStage.HandleControlInput(input);
        if (this.status == GameHandler.STATUS.GAME_OVER)
            switch (input) {
                case "Enter":
                case "Escape":
                case "Space":
                case "up":
                case "down":
                case "left":
                case "right":
                    this.saveScoreToLeaderboard();
                    this.startNewGame();
                    break;
                default: // As the user may type something we may not wana start a new game too quickly
                    break;
            }
    }

    nextFrame() {
        if (this.status === GameHandler.STATUS.PLAYING) {
            this.currentStage.update();
            this.currentStage.draw();
            this.drawStageUI();
        }
        else if (this.status === GameHandler.STATUS.GAME_OVER) {
            this.drawGameOver();
        }
        else {
            this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        requestAnimationFrame(() => this.nextFrame());
    }

    drawStageUI() {
        let ctx = this.canvas.getContext("2d");

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "left";
        ctx.fillText("Niveau : " + this.lvl, 10, 20);
        ctx.fillText("Score : " + Math.floor(this.score), 10, 40);

        //center horizontally
        ctx.textAlign = "center";
        ctx.fillText(this.variableSlogan.getCurrent().replaceAll("<br>", " "), this.canvas.width / 2, this.canvas.height - 20);
    }


    getScoreboard() {
        const REFRESH_RATE = 30 // 30 seconds (API MAX is 1 request per second)
        this.scoreboard = this.scoreboard || []
        this.scoreboardLastUpdate = this.scoreboardLastUpdate || 0;
        if (this.scoreboardLastUpdate + REFRESH_RATE * 1000 < Date.now()) {
            retrieveLeaderboard().then((data) => {
                this.scoreboard = data;
                this.scoreboard.sort((a, b) => b.score - a.score);
            }).catch((err) => {
                console.error("Error retrieving leaderboard", err);
            });
            this.scoreboardLastUpdate = Date.now()
        }
        if (this.scoreboard.length < 10) {
            for (let i = this.scoreboard.length; i < 10; i++) {
                this.scoreboard.push({ username: "???", score: 0 });
            }
            this.scoreboard.sort((a, b) => b.score - a.score);
        }
        return this.scoreboard;
    }

    saveScoreToLeaderboard() {
        if (this.status !== GameHandler.STATUS.GAME_OVER) return;
        if (this.score <= 0) return;
        let score = Math.floor(this.score);
        let username = getUsernameInput().value || "???";
        addScoreToLeaderboard(username, score).then((data) => {
            console.log("Score saved", data);
        })
        this.score = 0;
    }
    drawScoreboard() {
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "30px Arial bold";
        ctx.textAlign = "center";
        ctx.fillText("Meilleurs scores", this.canvas.width / 2, this.canvas.height / 4);

        let playerscoreDrawn = false;
        let scoreboard = this.getScoreboard();
        for (let i = 0; i < scoreboard.length; i++) {
            if (scoreboard[i].score < this.score && !playerscoreDrawn) {
                let username = getUsernameInput().value || "???";
                let score = Math.floor(this.score);
                ctx.fillText(username + " : " + score, this.canvas.width / 2, this.canvas.height / 4 + (i + 1) * 30);
                playerscoreDrawn = true;
                continue;
            }
            ctx.fillText(scoreboard[i - playerscoreDrawn].username + " : " + scoreboard[i - playerscoreDrawn].score, this.canvas.width / 2, this.canvas.height / 4 + (i + 1) * 30);
        }

        // let username = getUsernameInput().value || "???";
        // let score = Math.floor(this.score);
        // let vous = "Vous :"
        // ctx.fillText(vous, this.canvas.width / 2, this.canvas.height / 4 + scoreboard.length * 30);
        // ctx.fillText(username + " : " + score, this.canvas.width / 2, this.canvas.height / 4 + (scoreboard.length + 1) * 30);
        ctx.fillText("Appuyez sur une touche pour recommencer", this.canvas.width / 2, this.canvas.height * 3 / 4);
    }

    drawGameOver() {
        return this.drawScoreboard();
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "70px Arial bold";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 4);

        ctx.font = "30px Arial";
        ctx.fillText("Score : " + Math.floor(this.score), this.canvas.width / 2, this.canvas.height / 2 - 25);
        ctx.fillText("Niveau : " + this.lvl, this.canvas.width / 2, this.canvas.height / 2 + 25);


        ctx.fillText("Appuyez sur une touche pour recommencer", this.canvas.width / 2, this.canvas.height * 3 / 4);

    }

    GameOverScreen() {
        this.status = GameHandler.STATUS.GAME_OVER;
        this.drawGameOver();
    }

    nextLevel() {
        this.LoadLevel(this.lvl + 1);
        this.getScoreboard();
    }
}

function AttachControlsToGameHandler(gameHandler) {
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                gameHandler.RelayInput("up");
                break;
            case "ArrowDown":
                gameHandler.RelayInput("down");
                break;
            case "ArrowLeft":
                gameHandler.RelayInput("left");
                break;
            case "ArrowRight":
                gameHandler.RelayInput("right");
                break;
            default:
                gameHandler.RelayInput(e.key);
                break;
        }
    });

    for (let button of ["up", "down", "left", "right"]) {
        document.getElementById(button).addEventListener("click", () => {
            gameHandler.RelayInput(button);
        });
    }
}

window.addEventListener("load", function () {
    const game = new GameHandler("gameCanvas");
    game.startNewGame();
});

let usernameInput = document.getElementById("usernameInput")
function getUsernameInput() {
    return usernameInput
}