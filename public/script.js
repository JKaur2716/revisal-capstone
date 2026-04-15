const projects = [
    { name: "ATP Project", stage: "Initiation", date: "9/12/2026" },
    { name: "ATP Project", stage: "Initiation", date: "9/12/2026" },
    { name: "ATP Project", stage: "Initiation", date: "9/12/2026" },
    { name: "ATP Project", stage: "Initiation", date: "9/12/2026" },
];

const todos = [
    "ATP Project: Logo Variations",
    "ATP Project: Typography Selection",
    "ATP Project: Social Media Templates",
    "ATP Project: Strategy Report"
];

function loadDashboard() {
    // Load Projects
    const projectTable = document.getElementById('project-list');
    projectTable.innerHTML = projects.map(p => `
        <tr>
            <td><input type="checkbox"></td>
            <td>${p.name}</td>
            <td>${p.stage}</td>
            <td><div style="width:100px; height:10px; background:#eee; border-radius:5px;"><div style="width:40%; height:100%; background:var(--dark-purple); border-radius:5px;"></div></div></td>
            <td>${p.date}</td>
        </tr>
    `).join('');

    // Load Todos
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = todos.map(t => `
        <li style="list-style:none; padding: 10px 0; border-bottom: 1px solid #ddd;">
            <input type="checkbox"> ${t}
        </li>
    `).join('');
}

window.onload = loadDashboard;

