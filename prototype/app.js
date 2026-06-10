function prioritizeTasks() {
    const input = document.getElementById("taskInput").value;

    const tasks = input
        .split("\n")
        .filter(task => task.trim());

    const scoredTasks = tasks.map(task => {
        let score = 1;
        const lowerTask = task.toLowerCase();

        if (lowerTask.includes("due") || lowerTask.includes("deadline") || lowerTask.includes("urgent")) {
            score += 3;
        }

        if (lowerTask.includes("client") || lowerTask.includes("payroll") || lowerTask.includes("work")) {
            score += 2;
        }

        if (lowerTask.includes("school") || lowerTask.includes("assignment") || lowerTask.includes("walden")) {
            score += 2;
        }

        if (lowerTask.includes("gym") || lowerTask.includes("clean")) {
            score += 1;
        }

        return { task, score };
    });

    scoredTasks.sort((a, b) => b.score - a.score);

    const results = document.getElementById("results");

    results.innerHTML =
        "<h3>AI Priority Recommendation</h3><ol>" +
        scoredTasks.map(item =>
            `<li>${item.task} <strong>Score: ${item.score}</strong></li>`
        ).join("") +
        "</ol>";
}
