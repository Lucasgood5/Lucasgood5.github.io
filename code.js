const CODE = [
    ["-OTI-", "-IMG-", "-NON-", "-IUZ-", "-BYT-", "-EEE-", "-VOS-", "-TSL-", "-EST-", "-RIO-",],
    ["-FPO-", "-SAH-", "-ELF-", "-HRO-", "-TOI-", "-ORF-", "-HE!-", "-SSE-", "-NAH-",],
    ["-CHO-", "-HOY-", "-CQR-", "-VUV-", "-OLM-", "-OEL-", "-G!G-", "-IST-", "-XXX-", "-♡♡♡-"]]
const hintbox = document.querySelector('.hint-box');

function codeOnClick(hint) {
    let currentColor = hint.style.backgroundColor;
    if (currentColor != 'red') {
        hint.style.backgroundColor = 'red';
    } else {
        hint.style.backgroundColor = 'blue';
    }
    if (hint.innerHTML == "- ♡ ♡ ♡ - ") {
        hint.style.backgroundColor = "#f0a";
    }
    hint.style.color = 'white';
}
let hints = [[], [], []]
for (let i = 0; i < CODE.length; i++) {
    const col = document.createElement('div');
    col.className = 'field-Col';
    for (let j = 0; j < CODE[i].length; j++) {
        const row = document.createElement('div');
        row.className = 'field-Row';
        const hint = document.createElement('div');
        hint.className = 'hint';
        let inhmtl = ""
        for (let k = 0; k < CODE[i][j].length; k++) {
            inhmtl += CODE[i][j][k] + " ";
        }
        hint.innerHTML = inhmtl;
        row.appendChild(hint);
        col.appendChild(row);
        hint.addEventListener('click', () => {
            codeOnClick(hint);
        });
        hints[i][j] = hint;
    }
    hintbox.appendChild(col);
}
let Bar = []
let IL = [23, 10, 4, 5, 3, 26, 0, 22, 13, 25, 7, 17, 16, 29]
for (let I of IL) {
    Bar.push(hints[Math.floor(I / 10)][I % 10]);
}

let delta = 8000
function blinker() {
    for (let i = 0; i < Bar.length; i++) {
        let random = Math.floor(Math.random() * delta);
        setTimeout(() => {
            Bar[i].style.border = '2.5px solid white';
        }, i * delta + random);
        setTimeout(() => {
            Bar[i].style.border = '2.5px solid black';
        }, i * delta + 250 + random);
    }
}
blinker();
setInterval(blinker, delta * 15)

function checkselect() {
    let redflag = false
    let blueflag = false
    for (let i = 0; i < 29; i++) {
        if (i == 19) i++
        let S = IL.includes(i)
        let hint = hints[Math.floor(i / 10)][i % 10]
        if (hint.style.backgroundColor != 'red' && S) {
            redflag = true
        }
        if (hint.style.backgroundColor != 'blue' && S) {
            blueflag = true
        }
    }
    if (redflag && blueflag) {
        return false
    }
    return true
}
setInterval(() => {
    let input = document.querySelector('.input');
    if (checkselect()) {
        input.style.backgroundColor = 'Red';
        setTimeout(() => { input.style.backgroundColor = 'blue'; }, 500)
    }
}, 1000)

function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    return crypto.subtle.digest('SHA-256', data).then(buffer => {
        const hashArray = Array.from(new Uint8Array(buffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
}