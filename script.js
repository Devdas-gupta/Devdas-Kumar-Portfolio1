
document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Project 1",
            description: "Description for Project 1.",
            image: "https://via.placeholder.com/150",
            link: "#",
        },
        {
            title: "Project 2",
            description: "Description for Project 2.",
            image: "https://via.placeholder.com/150",
            link: "#",
        },
        // Add more projects as needed
    ];

    const projectContainer = document.getElementById("project-container");

    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectInfo = document.createElement("div");
        projectInfo.classList.add("project-info");

        const projectTitle = document.createElement("h2");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = "View Project";

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectDescription);
        projectInfo.appendChild(projectLink);

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectInfo);

        projectContainer.appendChild(projectCard);
    });
});
