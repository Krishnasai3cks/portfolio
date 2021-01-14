let projects_grid = document.getElementById("projects-grid");

const all_projects = [
    "Front End",
    "Back End",
    "Data Visualization",
    "Information Security and Quality Assurance",
    "Responsive Web Design",
    "Scientific Computing with Python",
    "Data Analysis with Python",
    "Machine Learning with Python",
    "Python Django",
];
let project_types = {
    All: all_projects,
    Front_End: ["Front End", "Responsive Web Design", "Data Visualization"],
    Back_End: [
        "Back End",
        "Python Django",
        "Information Security and Quality Assurance",
    ],
    Python_DA_ML: [
        "Data Analysis with Python",
        "Machine Learning with Python",
        "Scientific Computing with Python",
    ],
};
// The List is coming from ./projects.js file
let htmlResult = "";
for (let i = 0; i < list.length; i++) {
    let { technology } = list[i];
    htmlResult += `
    <div class="project-type" id="${technology}">
    <h1>${technology}</h1>
    `;
    for (let j = 0; j < list[i]["projects"].length; j++) {
        htmlResult += `
      <div class="project">
      <a href="${list[i]["projects"][j]["prolink"]}" target="_blank">
        ${list[i]["projects"][j]["paragraph"]}
      </a>
      </div>
      `;
    }
    htmlResult += `
    </div>`;
}
projects_grid.innerHTML = htmlResult;

function changeProjects(target) {
    let { value } = target;
    all_projects.forEach(
        (project) => (document.getElementById(project).style.display = "none")
    );
    project_types[value].forEach(
        (project) =>
        (document.getElementById(project).style.display = "inline-block")
    );
}

function submitHandler() {
    let name = document.getElementById("name");
    let body = document.getElementById("body");
    let value = `
  name:${name.value}
  ${body.value}`;
    window.location.href =
        "mailto:chinnacks@outlook.com?subject=Portfolio Feedback&body=" + value;
}