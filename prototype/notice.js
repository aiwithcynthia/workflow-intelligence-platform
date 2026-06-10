function analyzeNotice() {

    const notice =
        document.getElementById("noticeInput").value;

    const results =
        document.getElementById("noticeResults");

    results.innerHTML = `
        <h3>Analysis Results</h3>

        <p><strong>Agency:</strong> Unknown</p>

        <p><strong>Priority:</strong> Medium</p>

        <p><strong>Action Required:</strong>
        Review Notice</p>

        <p><strong>Risk Level:</strong>
        Low</p>
    `;
}
