// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const work = document.getElementById("work");
const workBtn = document.getElementById("work-btn");

// Initially set the "Projects" button as active with hover styles
portfolio.style.display = "flex";
portfolioBtn.classList.add("active-btn");
portfolioBtn.style.backgroundColor = "var(--btn-bg-color)";
portfolioBtn.style.color = "#fff";

// Add click event listeners to all buttons
portfolioBtn.addEventListener("click", () => {
  // Remove the "active-btn" class from all buttons
  skillsBtn.classList.remove("active-btn");
  workBtn.classList.remove("active-btn");

  // Add the "active-btn" class to the clicked button
  portfolioBtn.classList.add("active-btn");

  // Update the button styles to the hover state
  portfolioBtn.style.backgroundColor = "var(--btn-bg-color)";
  portfolioBtn.style.color = "#fff";

  // Update the other button styles back to their default state
  skillsBtn.style.backgroundColor = ""; // Set this to your default background color
  workBtn.style.backgroundColor = ""; // Set this to your default background color
  skillsBtn.style.color = ""; // Set this to your default text color
  workBtn.style.color = ""; // Set this to your default text color
  skills.style.display = "none";
  work.style.display = "none";
  portfolio.style.display = "flex";
});

skillsBtn.addEventListener("click", () => {
  // Remove the "active-btn" class from all buttons
  portfolioBtn.classList.remove("active-btn");
  workBtn.classList.remove("active-btn");

  // Add the "active-btn" class to the clicked button
  skillsBtn.classList.add("active-btn");

  // Update the button styles to the hover state
  skillsBtn.style.backgroundColor = "var(--btn-bg-color)";
  skillsBtn.style.color = "#fff";

  // Update the other button styles back to their default state
  portfolioBtn.style.backgroundColor = ""; // Set this to your default background color
  workBtn.style.backgroundColor = ""; // Set this to your default background color
  portfolioBtn.style.color = ""; // Set this to your default text color
  workBtn.style.color = ""; // Set this to your default text color
  skills.style.display = "flex";
  work.style.display = "none";
  portfolio.style.display = "none";
});

workBtn.addEventListener("click", () => {
  // Remove the "active-btn" class from all buttons
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");

  // Add the "active-btn" class to the clicked button
  workBtn.classList.add("active-btn");

  // Update the button styles to the hover state
  workBtn.style.backgroundColor = "var(--btn-bg-color)";
  workBtn.style.color = "#fff";

  // Update the other button styles back to their default state
  portfolioBtn.style.backgroundColor = ""; // Set this to your default background color
  skillsBtn.style.backgroundColor = ""; // Set this to your default background color
  portfolioBtn.style.color = ""; // Set this to your default text color
  skillsBtn.style.color = ""; // Set this to your default text color
  work.style.display = "flex";
  skills.style.display = "none";
  portfolio.style.display = "none";
});

// // Click events for buttons
// const portfolio = document.getElementById("portfolio");
// const portfolioBtn = document.getElementById("portfolio-btn");
// const skills = document.getElementById("skills");
// const skillsBtn = document.getElementById("skills-btn");

// portfolioBtn.addEventListener("click", (event) => {
//   skills.style.display = "none";
//   portfolio.style.display = "flex";
//   skillsBtn.classList.remove("active-btn");
//   portfolioBtn.classList.add("active-btn");
// });

// skillsBtn.addEventListener("click", (event) => {
//   skills.style.display = "flex";
//   portfolio.style.display = "none";
//   portfolioBtn.classList.remove("active-btn");
//   skillsBtn.classList.add("active-btn");
// });

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});