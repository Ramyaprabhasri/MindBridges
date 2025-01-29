const employees = [ 
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" }, { id: 5, name: "Chris", age: 40, department: "Operations" }, { id: 6, name: "Sophia", age: 29, department: "HR" },
     { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" }, 
    ];
    const tableBody = document.querySelector('#table-body'); // Select the tbody element by its ID
    employees.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employee.id}</td> <td>${employee.name}</td><td>${employee.age}</td><td>${employee.department}</td>`;
    tableBody.appendChild(row);
})    