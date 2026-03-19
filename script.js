// 🚀 Generate Idea (SMART LOGIC - NO ERROR)
let historyList = [];

function generateIdea() {
    const budget = document.getElementById("budget").value;
    const skill = document.getElementById("skill").value;
    const result = document.getElementById("result");

    if (!budget || !skill) {
        result.innerHTML = "Please enter all details!";
        return;
    }

    let idea = "";

    if (skill === "Design") {
        idea = "Start freelance graphic design on Fiverr.";
    } else if (skill === "Marketing") {
        idea = "Start social media marketing agency.";
    } else if (skill === "Tech") {
        idea = "Build simple websites for clients.";
    } else if (skill === "Sales") {
        idea = "Start reselling products online.";
    } else {
        idea = "Start a small online business.";
    }

    historyList.push(idea);

    displayHistory();
}

function displayHistory() {
    const result = document.getElementById("result");

    result.innerHTML = "";

    historyList.forEach((item, index) => {
        result.innerHTML += `<p>${index + 1}. ${item}</p>`;
    });
}

function clearHistory() {
    historyList = [];

    document.getElementById("result").innerHTML = "All history cleared!";
    document.getElementById("budget").value = "";
    document.getElementById("skill").value = "";
}