let projects_grid = document.getElementById("projects-grid");
const all_projects = [
    "Front End Libraries",
    "Data Visualization",
    "APIs and Microservices",
    "Quality Assurance",
    "Scientific Computing with Python",
    "Data Analysis with Python",
    "Information Security",
    "Machine Learning with Python",
    "Responsive Web Design",
];
let project_types = {
    Html_CSS_JS: ["Responsive Web Design"],
    React_JS: ["Front End Libraries"],
    Data_Analysis: ["Data Visualization", "Data Analysis with Python"],
    Python_DA_ML: [
        "Data Analysis with Python",
        "Machine Learning with Python",
        "Scientific Computing with Python",
        "Information Security",
    ],
    Node_JS: ["Quality Assurance", "APIs and Microservices"],
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

all_projects.forEach(
    (project) => (document.getElementById(project).style.display = "none")
);
project_types["Html_CSS_JS"].forEach(
    (project) => (document.getElementById(project).style.display = "inline-block")
);

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