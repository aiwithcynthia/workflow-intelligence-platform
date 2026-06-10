function prioritizeTasks() {

    const input =
        document.getElementById("taskInput").value;

    const tasks =
        input.split("\n").filter(task => task.trim());

    const results =
        document.getElementById("results");

    results.innerHTML =
        "<h3>Priority Order</h3><ol>" +
        tasks.map(task =>
            `<li>${task}</li>`).join("") +
        "</ol>";
}
