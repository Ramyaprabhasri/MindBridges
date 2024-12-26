const taskData = {}; // To group tasks by employee name

document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const due = document.getElementById("due").value;

    if (!name || !title || !description || !due) {
        alert("Please fill in all fields.");
        return;
    }
    if (!taskData[name]) taskData[name] = [];
    taskData[name].push({ title, description, due });

    renderTable();
    document.getElementById("name").value = '';
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.getElementById("due").value = '';
});

function renderTable() {
    const tableBody = document.querySelector("#taskTable tbody");
    tableBody.innerHTML = ""; 

    Object.keys(taskData).forEach((employeeName) => {
        const tasks = taskData[employeeName];
        const rowSpan = tasks.length;

        tasks.forEach((task, index) => {
            const row = document.createElement("tr");

            if (index === 0) {
                const nameCell = document.createElement("td");
                nameCell.textContent = employeeName;
                nameCell.rowSpan = rowSpan;
                row.appendChild(nameCell);
            }

            const titleCell = document.createElement("td");
            titleCell.textContent = task.title;
            row.appendChild(titleCell);

            const descCell = document.createElement("td");
            descCell.textContent = task.description;
            row.appendChild(descCell);

            const dueCell = document.createElement("td");
            dueCell.textContent = task.due;
            row.appendChild(dueCell);

            tableBody.appendChild(row);
        });
    });
}