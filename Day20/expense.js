document.addEventListener('DOMContentLoaded', function () {
    let totalExpenses = 0;
    let editRow = null;
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    document.getElementById('date').value = formattedDate;
    document.getElementById('submit-btn').addEventListener('click', function (event) {
        event.preventDefault();

        const expenseName = document.getElementById('expenseName').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const date = document.getElementById('date').value;
        let selectedCategory = document.querySelector('input[name="category"]:checked');
        let isValid = true;
        document.getElementById('nameError').innerText = '';
        document.getElementById('amountError').innerText = '';
        document.getElementById('categoryError').innerText = '';
        document.getElementById('dateError').innerText = '';
        if (!expenseName || !/^[A-Za-z ]+$/.test(expenseName)) {
            document.getElementById('nameError').innerText = "Enter a valid expense name (only alphabets)";
            isValid = false;
        }
        if (!amount || amount <= 0) {
            document.getElementById('amountError').innerText = "Enter a valid amount (positive number)";
            isValid = false;
        }
        if (!selectedCategory) {
            document.getElementById('categoryError').innerText = "Please select a category";
            isValid = false;
        } else {
            selectedCategory = selectedCategory.value;
        }

        if (isValid) {
            if (editRow) {
                editRow.querySelector('.expense-name').innerText = expenseName;
                editRow.querySelector('.expense-amount').innerText = `$${amount.toFixed(2)}`;
                editRow.querySelector('.expense-category').innerText = selectedCategory;
                editRow.querySelector('.expense-date').innerText = date;
                editRow = null;
                document.getElementById('submit-btn').innerText = "Add Expense";
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="expense-name">${expenseName}</td>
                    <td class="expense-amount">$${amount.toFixed(2)}</td>
                    <td class="expense-category">${selectedCategory}</td>
                    <td class="expense-date">${date}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;
                document.getElementById('expenses').appendChild(row);

                totalExpenses += amount;
                document.getElementById('total-expenses').innerText = `$${totalExpenses.toFixed(2)}`;
                row.querySelector('.delete-btn').addEventListener('click', function () {
                    const rowAmount = parseFloat(row.querySelector('.expense-amount').innerText.slice(1));
                    totalExpenses -= rowAmount;
                    document.getElementById('total-expenses').innerText = `$${totalExpenses.toFixed(2)}`;
                    row.remove();
                });

                row.querySelector('.edit-btn').addEventListener('click', function () {
                    editRow = row;
                    document.getElementById('expenseName').value = row.querySelector('.expense-name').innerText;
                    document.getElementById('amount').value = parseFloat(row.querySelector('.expense-amount').innerText.slice(1));
                    document.getElementById('date').value = row.querySelector('.expense-date').innerText;

                    const category = row.querySelector('.expense-category').innerText;
                    document.querySelector(`input[name="category"][value="${category}"]`).checked = true;

                    document.getElementById('submit-btn').innerText = "Update Expense";
                });
            }
            document.getElementById('expenseName').value = '';
            document.getElementById('amount').value = '';
            document.getElementsByName('category').forEach(radio => radio.checked = false);
            document.getElementById('date').value = formattedDate;
        }
    });

    document.getElementById('filter-btn').addEventListener('click', function () {
        const selectedCategory = document.getElementById('category-filter').value;
        const dateFilter = document.getElementById('date-filter').value;
        const rows = document.querySelectorAll('#expenses tr');
        let filteredTotal = 0;

        rows.forEach(row => {
            const category = row.querySelector('.expense-category').innerText;
            const date = row.querySelector('.expense-date').innerText;
            const expenseDate = new Date(date);
            const today = new Date();

            let showRow = true;
            if (selectedCategory && category !== selectedCategory) {
                showRow = false;
            }
            if (dateFilter) {
                switch (dateFilter) {
                    case "week":
                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(today.getDate() - 7);
                        if (expenseDate < oneWeekAgo) showRow = false;
                        break;
                    case "month":
                        const oneMonthAgo = new Date();
                        oneMonthAgo.setMonth(today.getMonth() - 1);
                        if (expenseDate < oneMonthAgo) showRow = false;
                        break;
                    case "sixMonths":
                        const sixMonthsAgo = new Date();
                        sixMonthsAgo.setMonth(today.getMonth() - 6);
                        if (expenseDate < sixMonthsAgo) showRow = false;
                        break;
                    case "year":
                        const oneYearAgo = new Date();
                        oneYearAgo.setFullYear(today.getFullYear() - 1);
                        if (expenseDate < oneYearAgo) showRow = false;
                        break;
                }
            }
            if (showRow) {
                row.style.display = '';
                filteredTotal += parseFloat(row.querySelector('.expense-amount').innerText.slice(1));
            } else {
                row.style.display = 'none';
            }
        });

        document.getElementById('total-expenses').innerText = `$${filteredTotal.toFixed(2)}`;
    });
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            const searchValue = searchBar.value.toLowerCase();
            const rows = document.querySelectorAll('#expenses tr');
            let filteredTotal = 0;

            rows.forEach((row) => {
                const expenseName = row.querySelector('.expense-name').innerText.toLowerCase();
                if (expenseName.includes(searchValue)) {
                    row.style.display = '';
                    filteredTotal += parseFloat(row.querySelector('.expense-amount').innerText.slice(1));
                } else {
                    row.style.display = 'none';
                }
            });

            document.getElementById('total-expenses').innerText = `$${filteredTotal.toFixed(2)}`;
        }
    });


    function recalculateTotalExpenses() {
        totalExpenses = 0;
        document.querySelectorAll('#expenses .expense-amount').forEach(amountCell => {
            totalExpenses += parseFloat(amountCell.innerText.slice(1));
        });
        document.getElementById('total-expenses').innerText = `$${totalExpenses.toFixed(2)}`;
    }
});
