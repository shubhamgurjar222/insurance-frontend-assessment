
const ageContainer = document.getElementById("age-counter");
const addBtn = document.getElementById("addAgeBtn");

addBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "counter-btn-blank";
    
    ageContainer.insertBefore(input, addBtn);
});