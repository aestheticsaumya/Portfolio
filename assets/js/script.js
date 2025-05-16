// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      // Remove 'active' from all nav links
      navLinks.forEach(nav => nav.classList.remove("active"));
      // Remove 'active' from all pages
      pages.forEach(page => page.classList.remove("active"));

      // Add 'active' to the clicked nav link and corresponding page
      link.classList.add("active");
      pages[index].classList.add("active");
    });
  });

  // Filtering projects
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all filter buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.textContent.toLowerCase();

    projectItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (selectedCategory === "all" || selectedCategory === itemCategory) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});


  // Sidebar toggle (if you're using it for contact details)
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  const sidebar = document.querySelector(".sidebar-info_more");

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      sidebarBtn.querySelector("span").textContent = 
        sidebar.classList.contains("active") ? "Hide Contacts" : "Show Contacts";
    });
  }
});
