function prioritizeTasks() {
    const input = document.getElementById("taskInput").value;

    const tasks = input
        .split("\n")
        .filter(task => task.trim());

    const scoredTasks = tasks.map(task => {
        let score = 1;
        const lowerTask = task.toLowerCase();

       if (["overdue", "urgent", "today", "tomorrow", "due", "deadline", "asap"]
    .some(signal => lowerTask.includes(signal))) {
    score += 3;
}

if (["compliance", "risk", "client", "payroll", "critical", "revenue"]
    .some(signal => lowerTask.includes(signal))) {
    score += 2;
}

if (["review", "report", "follow-up", "follow up", "meeting"]
    .some(signal => lowerTask.includes(signal))) {
    score += 1;
}
        return { task, score };
    });

    scoredTasks.sort((a, b) => b.score - a.score);

    const results = document.getElementById("results");

    results.innerHTML =
        "<h3>Priority Recommendation</h3><ol>" +
        scoredTasks.map(item =>
            `<li>${item.task} <strong>Score: ${item.score}</strong></li>`
        ).join("") +
        "</ol>";
}
