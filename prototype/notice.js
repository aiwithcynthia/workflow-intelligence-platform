function analyzeNotice() {

    const notice =
        document.getElementById("noticeInput")
        .value
        .toLowerCase();

    let agency = "Unknown";
    let priority = "Medium";
    let action = "Review Notice";
    let risk = "Low";

    if (notice.includes("irs")) {
        agency = "IRS";
        priority = "High";
        risk = "High";
    }

    if (notice.includes("delaware")) {
        agency = "Delaware";
    }

    if (notice.includes("pfml")) {
        agency = "Delaware PFML";
        priority = "High";
        action = "Review PFML Filing";
        risk = "Medium";
    }

    if (notice.includes("penalty")) {
        priority = "High";
        risk = "High";
        action = "Respond Immediately";
    }

    if (notice.includes("futa")) {
        agency = "Federal Unemployment Tax";
        action = "Review FUTA Filing";
    }

    document.getElementById("noticeResults").innerHTML = `
        <h3>Analysis Results</h3>
        <p><strong>Agency:</strong> ${agency}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Action Required:</strong> ${action}</p>
        <p><strong>Risk Level:</strong> ${risk}</p>
    `;
}
