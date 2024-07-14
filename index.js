
const contactButton = document.getElementById("contact-btn");
const dialog = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalSubmit = document.getElementById("modal-submit-btn");
const contactButtonDivContent = document.getElementById("contact-form-action");

contactButton.addEventListener("click", () => {
    document.body.classList.add("opacity");
    dialog.showModal();
});

dialog.addEventListener("cancel", () => {
    document.body.classList.remove("opacity");
});

closeModal.addEventListener("click", () => {
    document.body.classList.remove("opacity");
    dialog.close();
});
const projectImage = document.getElementById("project-image");
const project1 = document.getElementById("project-1");
const project2 = document.getElementById("project-2");
const project3 = document.getElementById("project-3");

project1.addEventListener("click", () => {
    project1.classList.toggle("active-img");
    project2.classList.remove("active-img");
    project3.classList.remove("active-img");
    projectImage.src = "images/project-1.png";
});

project2.addEventListener("click", () => {
    project2.classList.toggle("active-img");
    project1.classList.remove("active-img");
    project3.classList.remove("active-img");
    projectImage.src = "images/project-2.png";
});

project3.addEventListener("click", () => {
    project3.classList.toggle("active-img");
    project1.classList.remove("active-img");
    project2.classList.remove("active-img");
    projectImage.src = "images/project-1.png";
});

const readMoreButton = document.getElementById("read-btn");

readMoreButton.addEventListener("click", () => {
    window.open("https://www.fylehq.com/", "_blank");
});

const form = document.getElementById("form");


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    contactButtonDivContent.innerHTML = '<p class="first-title-color">Connecting.......</p>';
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    const response = await fetch(`${API}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        console.log("error");
    }
    else {
        document.body.classList.remove("opacity");
        dialog.close();
    }
})
