const projects = {
2026: [
{
title: "Portfolio Website",
desc: "My first personal portfolio using HTML, CSS, JS"
}
],
2025: [
{
title: "Coming Soon",
desc: "More projects will be added"
}
]
};

function renderProjects() {
const container = document.getElementById("project-container");
container.innerHTML = "";

for (let year in projects) {
const yearGroup = document.createElement("div");
yearGroup.className = "year-group";

const yearTitle = document.createElement("h3");
yearTitle.textContent = year;
yearGroup.appendChild(yearTitle);

projects[year].forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  const title = document.createElement("h4");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.desc;

  card.appendChild(title);
  card.appendChild(desc);
  yearGroup.appendChild(card);
});

container.appendChild(yearGroup);

}
}

function showTab(tabId) {
document.getElementById('about').style.display = 'none';
document.getElementById('projects').style.display = 'none';

document.getElementById(tabId).style.display = 'block';

// remove active from all
document.getElementById("tab-about").classList.remove("active");
document.getElementById("tab-projects").classList.remove("active");

// add active to current
document.getElementById("tab-" + tabId).classList.add("active");

if (tabId === "projects") {
renderProjects();
}
}
