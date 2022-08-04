let dropDownListLinks = document.querySelectorAll(".nav-list li a");
dropDownListLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    dropDownListLinks.forEach((link) => {
      link.classList.remove("active");
    });
    a.classList.add("active");
  });
});
let links = Array.from(document.querySelectorAll(".list li a"));
let sections = Array.from(document.querySelectorAll("section"));
/*event to make the link corresponding to
the section in viewport in active state.*/
onscroll = () => {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((sec) => {
    if (
      scrollPosition >= sec.offsetTop - sec.offsetHeight * 0.25 &&
      scrollPosition <=
        sec.offsetTop + sec.offsetHeight - sec.offsetHeight * 0.25
    ) {
      removeActive();
      addActive(sec.id);
      dropDownListLinks.forEach((a) => {
        a.classList.remove("active");
      });
      addActiveDropDownList(sec.id);
    }
  });
  //drop down the nav-bar on scroll down.
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".nav-bar").classList.add("down");
    upBtn.style.display = "block";
  } else {
    document.querySelector(".nav-bar").classList.remove("down");
    upBtn.style.display = "none";
  }
};

//add active class to the link corresponding to the section in viewport.
function addActive(id) {
  let link = `ul li a[href="#${id}"]`;
  document.querySelector(link).classList.add("active");
}
function addActiveDropDownList(id) {
  let link = `.nav-list li a[href="#${id}"]`;
  document.querySelector(link).classList.add("active");
}

//remove active class to aii the link that are not corresponding to the section in viewport.
function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}
let dropDownList = document.querySelector(".nav-list");
let bars = document.querySelector(".bars");
//event to scroll the window up using the up button.
let upBtn = document.querySelector("#up");
upBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//slide up and down the drop down list of links depending on the class (cross-bars) availability.
bars.addEventListener("click", (e) => {
  bars.classList.toggle("cross-bars");
  if (bars.classList.contains("cross-bars")) {
    dropDownList.style.display = "block";
  } else {
    dropDownList.style.display = "none";
  }
});

bars.classList.remove("cross-bars");
