let totalScore = 0; 
document.getElementById('submit-btn').addEventListener("click", function () {
    const name = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    let flag = true;
    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(name)) {
        document.getElementById('taskError').innerText = "Enter Valid Task Name";
        flag = false;
    }

    if (!flag) return;

    const currentDate = new Date();
    const enteredDate = new Date(date);
    const totalDays = Math.ceil((enteredDate - currentDate) / (1000 * 60 * 60 * 24)); 

    const table = document.getElementById('task-table').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${description}</td>
        <td>${date}</td>
        <td>${Math.max(totalDays, 0)} days</td>
        <td id="timer-${table.rows.length}">--:--</td>
        <td id="status-${table.rows.length}">Incomplete</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            <button class="startbtn">Start</button>
            <button class="endbtn" disabled>End</button>
        </td>
        <td id="score-${table.rows.length}">0</td>
        <td id="completion-rate-${table.rows.length}">0%</td>
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
    const timerCell = row.cells[4]; 
    const scoreCell = row.cells[7]; 
    const statusCell = row.cells[5]; 
    const completionRateCell = row.cells[8]; 
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
            completionRateCell.innerText = "0%"; 
        } else {
            const daysLeft = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            timerCell.innerText = `${daysLeft} days ${hours}h ${minutes}m ${seconds}s`;
            const totalDays = parseInt(row.cells[3].innerText); 
            const progress = Math.min((totalDays - daysLeft) / totalDays * 100, 100);
            completionRateCell.innerText = `${Math.round(progress)}%`;
        }
    }, 1000);

    timers[row.rowIndex] = intervalId;
}

function clearCountdown(row) {
    const timerCell = row.cells[4]; 
    const scoreCell = row.cells[7]; 
    const statusCell = row.cells[5]; 
    const completionRateCell = row.cells[8]; 
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
        completionRateCell.innerText = "100%"; 
    } else {
        timerCell.innerText = "Ended after time";
        statusCell.innerText = "Incomplete";
        updateTotalScore(-2);
        scoreCell.innerText = -2;
        completionRateCell.innerText = "0%"; 
    }

    row.querySelector(".endbtn").disabled = true;
}

function updateTotalScore(scoreChange) {
    totalScore += scoreChange; 
    const totalScoreElement = document.getElementById('totalScore');
    totalScoreElement.innerText = `Total Score: ${totalScore}`; 
}

