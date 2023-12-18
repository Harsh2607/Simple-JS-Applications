const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseList = document.querySelector(".expenseList");
const totalExpense = document.querySelector(".totalExpense h3");

let totalAmount = 0;

addExpenseBtn.addEventListener("click", function () {
    const expenseDescription = prompt("Enter the item description");
    const expenseAmount = parseFloat(prompt("Enter the item amount"));

    if (expenseDescription && !isNaN(expenseAmount)) {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");

        const itemDescription = document.createElement("p");
        itemDescription.textContent = expenseDescription;

        const itemAmount = document.createElement("p");
        itemAmount.textContent = `Rs. ${expenseAmount.toFixed(2)}`;

        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", function () {
            const newDescription = prompt("Enter the updated description", expenseDescription);
            const newAmount = parseFloat(prompt("Enter the updated amount", expenseAmount));

            if (newDescription !== null && !isNaN(newAmount)) {
                itemDescription.textContent = newDescription;
                itemAmount.textContent = `Rs. ${newAmount.toFixed(2)}`;

                totalAmount = totalAmount - expenseAmount + newAmount;
                updateTotalAmount();
                expenseAmount = newAmount;
                expenseDescription = newDescription;
            } else {
                alert("Invalid input. Please enter valid values.");
            }
        });

        const removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", function () {
            expenseItem.remove();
            totalAmount -= expenseAmount;
            updateTotalAmount();

            if (expenseList.children.length === 0) {
                totalAmount = 0;
                updateTotalAmount();
            }
        });

        expenseItem.appendChild(itemDescription);
        expenseItem.appendChild(itemAmount);
        expenseItem.appendChild(editButton);
        expenseItem.appendChild(removeButton);

        expenseList.appendChild(expenseItem);

        totalAmount += expenseAmount;
        updateTotalAmount();
    } else {
        alert("Invalid input. Please enter valid values.");
    }
});

function updateTotalAmount() {
    totalExpense.textContent = `Total Expense : Rs. ${totalAmount.toFixed(2)}`;
}
