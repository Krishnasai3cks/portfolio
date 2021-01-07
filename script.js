var a = document.getElementById("projects-grid");
/*
                                                  {
                                                    prolink: '',
                                                    imglink: '',
                                                    paragraph: ''
                                                  },
                                                  */
var list = [{
        prolink: "https://codepen.io/tznqeyiq/full/wvMxPOb",
        imglink: "https://media2.picsearch.com/is?yR67uiGC1QoGer1ndxdS1qD5en5C3Vyyc4FZUKywEzQ&height=250",
        paragraph: "TRIBUTE PAGE",
    },

    {
        prolink: "https://codepen.io/tznqeyiq/full/wvMxpjM",
        imglink: "./images/Form.jpg",
        paragraph: "FORM",
    },

    {
        prolink: "https://codepen.io/tznqeyiq/full/XWXBEVd",
        imglink: "https://media1.picsearch.com/is?yruPQEMk3koPa7J-Ii3j0HFNItjUktTrM8TB8YmN6dk&height=256",
        paragraph: "PRODUCT LANDING",
    },

    {
        prolink: "https://rogue-plume-bug.glitch.me/",
        imglink: "./images/mertic-imp.jpg",
        paragraph: "Metric/Imp Converter",
    },

    {
        prolink: "https://rhetorical-hurricane-rugby.glitch.me/",
        imglink: "./images/IssueTracker.jpg",
        paragraph: "Issue Tracker",
    },
    {
        prolink: "https://hilarious-aromatic-sovereign.glitch.me/",
        imglink: "./images/PersonalLibrary.jpg",
        paragraph: "Personal Library",
    },
];
for (var i in list) {
    var newproject = document.createElement("div");
    newproject.setAttribute("class", "project");
    var anchor = document.createElement("a");
    anchor.setAttribute("class", `project-tile ${i}`);
    anchor.setAttribute("target", "_blank");
    anchor.href = list[i].prolink;
    anchor.innerHTML = `<img src="${list[i].imglink}"/><p class="project-title"> ${list[i].paragraph} </p>`;
    newproject.appendChild(anchor);
    a.appendChild(newproject);
}
var modal = document.getElementById("modal-wrapper");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
var smallbutton = document.getElementById("smallbutton");

function createproject(form) {
    var newobject = {
        prolink: document.getElementById("projlink").value,
        imglink: document.getElementById("projimg").value,
        paragraph: document.getElementById("projname").value,
    };
}