const API_KEY = "67fa2f5b631c226da8bbe984" // this is a limited API key and available for public use
async function retrieveLeaderboard() {
    const response = await fetch("https://pactreso-f8ca.restdb.io/rest/leaderboard", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-apikey": API_KEY
        }
    });
    const data = await response.json();
    return data;
}

async function addScoreToLeaderboard(username, score) {
    const response = await fetch("https://pactreso-f8ca.restdb.io/rest/leaderboard", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-apikey": API_KEY
        },
        body: JSON.stringify({ username, score })
    });
    const data = await response.json();
    return data;
}