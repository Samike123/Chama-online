const form = document.getElementById("memberForm");
const tableBody = document.querySelector("#recordsTable tbody");

let contributions = JSON.parse(localStorage.getItem("contributions")) || [];

function renderTable() {
  tableBody.innerHTML = "";
  contributions.forEach(({ name, amount }) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${amount}</td>`;
    tableBody.appendChild(row);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("memberName").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (name && amount) {
    contributions.push({ name, amount });
    localStorage.setItem("contributions", JSON.stringify(contributions));
    renderTable();
    form.reset();
  }
});

renderTable();
