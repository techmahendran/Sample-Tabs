const tabs = document.querySelectorAll(".tabs");
const tabcontents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabcontents.forEach((tabcontent) => {
      tabcontent.classList.remove("active-content");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tabs-active");
    });
    tabs[index].classList.add("tabs-active");
    tabcontents[index].classList.add("active-content");
  });
});
