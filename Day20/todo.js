let totalScore = 0; // Initialize total score

document.getElementById('submit-btn').addEventListener("click", function () {
    const name = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    let flag = true;
    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerText = "Enter Valid Task Name";
        flag = false;
    }

    if (!flag) return;

    const table = document.getElementById('task-table').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${description}</td>
        <td>${date}</td>
        <td id="timer-${table.rows.length}">--:--</td>
        <td id="status-${table.rows.length}">Incomplete</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            <button class="startbtn">Start</button>
            <button class="endbtn" disabled>End</button>
        </td>
        <td id="score-${table.rows.length}">0</td>
    `;

    document.getElementById("task-form").reset();

    row.querySelector(".deleteBtn").addEventListener("click", function () {
        row.remove();
    });

    row.querySelector(".editBtn").addEventListener("click", function () {
        currentRow = row;
        document.getElementById('task').value = name;
        document.getElementById('description').value = description;
        document.getElementById('date').value = date;
        document.getElementById('submit-btn').style.display = "none";
        document.getElementById('update-btn').style.display = "inline-block";
    });

    row.querySelector(".startbtn").addEventListener("click", function () {
        row.querySelector(".startbtn").disabled = true;
        row.querySelector(".endbtn").disabled = false;
        startCountdown(row, date);
    });

    row.querySelector(".endbtn").addEventListener("click", function () {
        clearCountdown(row); 
    });
});

const timers = {};

function startCountdown(row, deadline) {
    const timerCell = row.cells[3]; 
    const scoreCell = row.cells[6]; 
    const statusCell = row.cells[4]; 
    const deadlineTime = new Date(deadline).getTime();
    const intervalId = setInterval(function () {
        const now = new Date().getTime();
        const remainingTime = deadlineTime - now;

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            timerCell.innerText = "Time's up!";
            statusCell.innerText = "Incomplete";
            updateTotalScore(-2);
            scoreCell.innerText = -2;
        } else {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            timerCell.innerText = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);

    timers[row.rowIndex] = intervalId;
}

function clearCountdown(row) {
    const timerCell = row.cells[3]; 
    const scoreCell = row.cells[6]; 
    const statusCell = row.cells[4]; 
    const intervalId = timers[row.rowIndex];

    if (intervalId) {
        clearInterval(intervalId);
    }

    const remainingTimeText = timerCell.innerText;
    const isTimeUp = remainingTimeText === "Time's up!";

    if (!isTimeUp) {
        timerCell.innerText = "Ended early";
        statusCell.innerText = "Completed";
        updateTotalScore(5);
        scoreCell.innerText = 5; 
    } else {
        timerCell.innerText = "Ended after time";
        statusCell.innerText = "Incomplete";
        updateTotalScore(-2);
        scoreCell.innerText = -2;
    }

    row.querySelector(".endbtn").disabled = true;
}
document.getElementById('filter-btn').addEventListener('click', function () {
    const selectedDateFilter = document.getElementById('date-filter').value; 
    const selectedStatusFilter = document.getElementById('status-filter').value.toLowerCase();
    const rows = document.querySelectorAll('#task-table tbody tr');
    const now = new Date(); 
    let filteredTasksCount = 0;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;
    const sixMonths = 6 * oneMonth;
    const oneYear = 365 * oneDay;

    rows.forEach(row => {
        const dateCell = row.cells[2].innerText; 
        const statusCell = row.cells[4].innerText.toLowerCase(); 
        const taskDate = new Date(dateCell); 
        let dateCondition = true;
        let statusCondition = true;

        if (selectedDateFilter) {
            const timeDifference = now - taskDate;

            if (selectedDateFilter === "week") {
                dateCondition = timeDifference <= oneWeek;
            } else if (selectedDateFilter === "month") {
                dateCondition = timeDifference <= oneMonth;
            } else if (selectedDateFilter === "sixMonths") {
                dateCondition = timeDifference <= sixMonths;
            } else if (selectedDateFilter === "year") {
                dateCondition = timeDifference <= oneYear;
            }
        }

        if (selectedStatusFilter && selectedStatusFilter !== "all") {
            statusCondition = statusCell === selectedStatusFilter;
        }

        if (dateCondition && statusCondition) {
            row.style.display = ""; 
            filteredTasksCount++;
        } else {
            row.style.display = "none"; 
        }
    });

    document.getElementById('totalScore').innerText = `Total Tasks: ${filteredTasksCount}`;
});


function updateTotalScore(scoreChange) {
    totalScore += scoreChange;
    document.getElementById('totalScore').innerText = `Total Score: ${totalScore}`;
}
