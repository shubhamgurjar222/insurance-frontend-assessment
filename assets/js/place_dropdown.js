const inputWrapper = document.getElementById("selectInput");
const dropdown = document.getElementById("dropdown");
const customInput = document.getElementById("customInput");
const arrow = document.getElementById('icon-arrow')
const items = Array.from(document.querySelectorAll(".dropdown-item"));
const title = dropdown.querySelector(".dropdown-title");
const tagsContainer = document.getElementById("tag-div");
const selectedValues = new Set();

const notFound = document.createElement("div");
notFound.className = "dropdown-item";
notFound.style.color = "#999";
notFound.textContent = "Destination not found";
notFound.style.display = "none";
notFound.style.textAlign = "center"
dropdown.appendChild(notFound);

function addTag(value) {
    if (selectedValues.has(value)) return;

    selectedValues.add(value);

    const tag = document.createElement("div");
    tag.className = "tag-div-parent-btn";
    tag.innerHTML = `
        ${value}
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18
            6 6 18"/><path d="m6 6 12 12"/>
            </svg>
        </span>
    `;

    tag.querySelector("span").addEventListener("click", () => {
        selectedValues.delete(value);
        tag.remove();
    });

    tagsContainer.appendChild(tag);
}

function openDropdown() {
    dropdown.classList.add("open");
    arrow.style.transform = "rotate(180deg)";
    customInput.focus();
}

function closeDropdown() {
    dropdown.classList.remove("open");
    arrow.style.transform = "rotate(0deg)";
}

inputWrapper.addEventListener("click", () => {
    openDropdown();
});


customInput.addEventListener("input", () => {
    const search = customInput.value.toLowerCase().trim();
    let found = false;

    if (search === "") {
        title.style.display = "block";
        items.forEach(item => item.style.display = "block");
        notFound.style.display = "none";
        return;
    }

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(search)) {
            item.style.display = "block";
            found = true;
        } else {
            item.style.display = "none";
        }
    });

    title.style.display = found ? "block" : "none";
    notFound.style.display = found ? "none" : "block";
});

// Select from dropdown
items.forEach(item => {
    item.addEventListener("click", () => {
        addTag(item.textContent);
        customInput.value = item.textContent;
        closeDropdown();
    });
});

// Accept custom value on Enter
customInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && customInput.value.trim() !== "") {
        closeDropdown();
    }
});

// Close on outside click
document.addEventListener("click", (e) => {
    if (!inputWrapper.contains(e.target) && !dropdown.contains(e.target)) {
        closeDropdown();
    }
});
