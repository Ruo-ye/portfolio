const projects = {
2026: [
{
title: "Portfolio Website",
desc: "My first personal portfolio using HTML, CSS, JS",
github: "https://github.com/Ruo-ye/portfolio",
demo: "https://ruo-ye.github.io/portfolio/"
}
],
2025: [
{
title: "Coming Soon",
desc: "More projects will be added",
github: "#",
demo: "#"
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

// LINKS START HERE
const links = document.createElement("div");

const githubLink = document.createElement("a");
githubLink.href = project.github;
githubLink.textContent = "GitHub";
githubLink.target = "_blank";

const demoLink = document.createElement("a");
demoLink.href = project.demo;
demoLink.textContent = "Live Demo";
demoLink.target = "_blank";

links.appendChild(githubLink);
links.appendChild(document.createTextNode(" | "));
links.appendChild(demoLink);
// LINKS END HERE

card.appendChild(title);
card.appendChild(desc);
card.appendChild(links); // ← THIS is the important line

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
