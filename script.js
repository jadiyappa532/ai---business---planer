// 🚀 Generate Idea (SMART LOGIC - NO ERROR)
function generateIdea() {
    let budget = document.getElementById("budget").value;
    let skill = document.getElementById("skill").value;
    let resultBox = document.getElementById("result");

    if (budget === "" || skill === "") {
        resultBox.innerText = "⚠️ Please enter budget and select skill!";
        return;
    }

    budget = parseInt(budget);

    resultBox.innerText = "⏳ Generating smart idea...";

    setTimeout(() => {
        let ideas = [];

        // 💡 Smart ideas based on skill
        if (skill === "Marketing") {
            ideas = [
                "Start Instagram marketing for local businesses.",
                "Run Facebook ads service for small shops.",
                "Create a niche YouTube channel and monetize.",
                "Start affiliate marketing website."
            ];
        }

        else if (skill === "Design") {
            ideas = [
                "Start freelance graphic design on Fiverr.",
                "Sell logo templates online.",
                "Create Instagram design page for clients.",
                "Offer UI/UX design services."
            ];
        }

        else if (skill === "Tech") {
            ideas = [
                "Start website development service.",
                "Build small apps for local businesses.",
                "Create SaaS tool for students.",
                "Offer WordPress services."
            ];
        }

        else {
            ideas = [
                "Start reselling business.",
                "Open small local service.",
                "Start dropshipping store.",
                "Sell products on Amazon."
            ];
        }

        // 💰 Budget effect
        let result = "";

        if (budget <= 50000) {
            result = ideas[Math.floor(Math.random() * ideas.length)];
        }
        else if (budget <= 500000) {
            result = "Scale this idea: " + ideas[Math.floor(Math.random() * ideas.length)];
        }
        else {
            result = "Build a startup based on: " + ideas[Math.floor(Math.random() * ideas.length)];
        }

        resultBox.innerText = "Idea: " + result;

        saveToHistory("Idea: " + result);

    }, 1000);
}


// 💾 Save History
function saveToHistory(text) {
    let history = JSON.parse(localStorage.getItem("ideas")) || [];
    history.push(text);
    localStorage.setItem("ideas", JSON.stringify(history));

    displayHistory();
}


// 📜 Display History
function displayHistory() {
    let historyList = document.getElementById("history");
    historyList.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("ideas")) || [];

    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}


function clearHistory() {
    localStorage.removeItem("ideas");

    let historyList = document.getElementById("history");
    if (historyList) {
        historyList.innerHTML = "";
    }

    document.getElementById("result").innerText = "All history cleared!";
}

// 🔄 Load history
window.onload = function () {
    displayHistory();
};