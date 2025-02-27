document.getElementById("submit-btn").addEventListener("click", function() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('name').value;
    let flag = true;

    var mailValidate = /^[a-zA-Z]+[a-zA-Z0-9_\.\-]+[@][a-z]+[\.]+[a-z]/
    const nameValidate = /^[A-Z][a-zA-Z\s]*$/;

    if (!mailValidate.test(email)) {
        document.getElementById("mailError").innerText = "Enter a valid Email";
        flag = false;
    } else {
        document.getElementById("mailError").innerText = "";
    }

    if (!nameValidate.test(username)) {
        document.getElementById("nameError").innerText = "Enter a valid Name";
        flag = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!username) {
        document.getElementById("nameError").innerText = "Name cannot be empty";
        flag = false;
    }

    if (!email) {
        document.getElementById("mailError").innerText = "Email cannot be empty";
        flag = false;
    }

    if (flag) {
        window.location.href = `product.html?name=${encodeURIComponent(username)}`;
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
    }
});
