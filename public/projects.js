const projectData = [
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 },
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 },
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 },
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 },
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 },
    { name: "Art Theater Projects", client: "Raegan Frenette", stage: "Initiation", start: "MM/DD/YYYY", end: "MM/DD/YYYY", progress: 45 }
];

const importantDates = [
    { project: "ATP Project", type: "Meeting", time: "9:00 AM", date: "9/12/2026" },
    { project: "ATP Project", type: "Meeting", time: "9:00 AM", date: "9/12/2026" },
    { project: "ATP Project", type: "Meeting", time: "9:00 AM", date: "9/12/2026" }
];

function initProjects() {
    const tbody = document.getElementById('projects-tbody');
    tbody.innerHTML = projectData.map(p => `
        <tr>
            <td><input type="checkbox"></td>
            <td>${p.name}</td>
            <td>${p.client}</td>
            <td>${p.stage}</td>
            <td>
                <div class="progress-container">
                    <div class="progress-fill" style="width: ${p.progress}%"></div>
                </div>
            </td>
            <td>${p.start}</td>
            <td>${p.end}</td>
        </tr>
    `).join('');

    const dateBody = document.getElementById('dates-tbody');
    dateBody.innerHTML = importantDates.map(d => `
        <tr>
            <td><input type="checkbox"></td>
            <td>${d.project}</td>
            <td>${d.type}</td>
            <td>${d.time}</td>
            <td>${d.date}</td>
        </tr>
    `).join('');
}

window.onload = initProjects;
