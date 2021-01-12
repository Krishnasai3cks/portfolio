let skillsContainer = document.getElementById("skills-list");

let skills = [
    ["html5", 90],
    ["css3", 80],
    ["js", 90],
    ["react", 70],
    ["node-js", 80],
    ["python", 80],
    ["php", 60],
    ["database", 60, "mongodb"],
    ["database", 70, "mysql"],
];
let innerHTML = "<table style='width:100%;'>";
skills.forEach((data) => {
    let classStyle = data[2] ? "fa fa-database " + data[2] : "fab fa-" + data[0];
    let name = data[2] ? data[2] : data[0];
    console.log(classStyle);
    innerHTML += `
        <tr>
        <td>
        <span class="skills-icon">
            <i class="${classStyle}"></i>
        </span>
        </td>
        <td>
        <span class="skill-name" style="font-weight:bold;">${name}</span>
        </td>
        <td >
        <div class="bar" style="width:${data[1]}%"></div>
        ${data[1]}%
        </td>

        <tr>
    `;
});
innerHTML += "</table>";
skillsContainer.innerHTML = innerHTML;
/*
<div><span class="skills-icon">
<i class="fab fa-css3" style="color:blue;"></i></span>
    <div class="bar"></div>
</div>
<div><span class="skills-icon"><i class="fab fa-html5" style="color:red;"></i></span></div>
<div><span class="skills-icon"><i class="fab fa-js" style="color:rgb(240, 193, 76);"></i></span></div>
<div><span class="skills-icon"><i class="fab fa-python"></i></span></div>
<div><span class="skills-icon"><i class="fab fa-php" style="color:black;"></i></span></div>
<div><span class="skills-icon"><i class="fab fa-react" style="color:blue;"></i></span></div>
*/