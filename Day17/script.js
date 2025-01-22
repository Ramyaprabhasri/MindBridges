document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phonenumber").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob").value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedSubjects = [];
  checkboxes.forEach(function (checkbox) {
    selectedSubjects.push(checkbox.value);
  });
  const location = document.getElementById("location").value;
  

  document.getElementById("nameError").innerText = "";
  document.getElementById("ageError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("genderError").innerText = "";
  document.getElementById("dobError").innerText = "";
  document.getElementById("locationError").innerText = "";
  document.getElementById("subjectsError").innerText = "";

  let flag = true;
  const nameRegex = /^[A-Z][a-zA-Z]*(?:\s[A-Z][a-zA-Z]*)*$/;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText = "Enter valid name";
    flag = false;
  }
  if (age < 1 || age > 100 || isNaN(age)) {
    document.getElementById("ageError").innerText = "Enter valid age";
    flag = false;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").innerText = "Enter valid phone number";
    flag = false;
  }
  if (!gender) {
    document.getElementById("genderError").innerText = "Select your gender";
    flag = false;
  }
  if (!dob) {
    document.getElementById("dobError").innerText = "Select your DOB";
    flag = false;
  }
  if (!location) {
    document.getElementById("locationError").innerText = "Select your Location";
    flag = false;
  }
  if (selectedSubjects.length === 0) {
    document.getElementById("subjectsError").innerText = "Select atleast one subject";
    flag = false;
  }

  if (!flag) return; 

  const table = document.getElementById("dataTable").querySelector("tbody");
  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td> 
    <td>${age}</td>
    <td>${phone}</td>
    <td>${gender.value}</td>
    <td>${dob}</td>
    <td>${location}</td>
    <td>${selectedSubjects.join(", ")}</td>
    <td>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </td>`;

  document.getElementById("registrationForm").reset();

  row.querySelector(".editBtn").addEventListener("click", function () {
    currentRow = row;
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("phonenumber").value = phone;
    document.querySelector(`input[name="gender"][value="${gender.value}"]`).checked = true;
    document.getElementById("dob").value = dob;
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(function (checkbox) {
      checkbox.checked = selectedSubjects.includes(checkbox.value);
    });
    document.getElementById("location").value = location;
   
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
  });

  row.querySelector(".deleteBtn").addEventListener("click", function () {
    row.remove();
  });
});

document.getElementById("update").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phonenumber").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob").value;
  const location = document.getElementById("location").value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedSubjects = [];
  checkboxes.forEach(function (checkbox) {
    selectedSubjects.push(checkbox.value);
  });

 
  document.getElementById("registrationForm").reset();
  document.getElementById("submit").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
});
