document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");

      tabContents.forEach(content => {
        content.classList.remove("active");
      });

      tabs.forEach(t => {
        t.classList.remove("active");
      });

      tab.classList.add("active");

  
      document.getElementById(tabId + "-content").classList.add("active");
    });
  });
});
