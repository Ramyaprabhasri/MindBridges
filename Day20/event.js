document.getElementById('submit-btn').addEventListener('click', function () {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    if (!title || !date) {
        alert('Please fill in both the title and date!');
        return;
    }
    addEvent(title, date);
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
});

const events = [];
function addEvent(title, date) {
    const status = getEventStatus(date); 
    const event = { title, date, status };
    events.push(event);
    renderEvents();
}

function getEventStatus(date) {
    const currentDate = new Date();
    const eventDate = new Date(date);
    return eventDate >= currentDate ? 'Upcoming' : 'Past';
}

function renderEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = ''; // Clear the current table content

    events.forEach(function (event, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.title}</td>
            <td>${event.date}</td>
            <td>${event.status}</td>
            <td class="actions">
                <button class="edit" onclick="editEvent(${index})">Edit</button>
                <button class="delete" onclick="deleteEvent(${index})">Delete</button>
            </td>
        `;
        eventList.appendChild(row);
    });
}
function editEvent(index) {
    const event = events[index];
    document.getElementById('eventTitle').value = event.title;
    document.getElementById('eventDate').value = event.date;
    events.splice(index, 1);
    renderEvents();
}
function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}
