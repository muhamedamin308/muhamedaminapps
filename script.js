// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to light mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save theme preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// Modal Functionality
const projectButtons = document.querySelectorAll("[data-project]");
const modals = {
  "fashion-zone": document.getElementById("FashionZoneModel"),
  "movies-club": document.getElementById("MoviesClubModel"),
  "mini-amazon": document.getElementById("MiniAmazonModel"),
  "spotify-clone": document.getElementById("SpotifyCloneModel"),
  "udemyfy": document.getElementById("UdemyfyModel"),
  "readmate": document.getElementById("ReadMateModel"),
};

// Open modal when clicking View Project button
projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.getAttribute("data-project");
    const modal = modals[projectId];

    if (modal) {
      modal.style.display = "block";
      // Add a small delay before adding the 'show' class for the animation to work
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);

      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  });
});

// Close modal when clicking the x button
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").classList.remove("show");

    // Wait for animation to complete before hiding the modal
    setTimeout(() => {
      closeBtn.closest(".modal").style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  });
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove("show");

      // Wait for animation to complete before hiding the modal
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 300);
    }
  });
});

// Add year to footer automatically
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelector(
    "footer p"
  ).textContent = `© ${year} Mohamed Amin. All rights reserved.`;
});
