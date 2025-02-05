"use strict";
// add functionality

// DOM ELEMENT SELECTION

// NAV MENU ELEMENTS
const openMenuIcon = document.querySelector("#hamburger-icon");
const closeMenuIcon = document.querySelector("#close-ham-icon");
const hamburgerMenuElm = document.querySelector(".hamburger-menu");

// TAB SECTION ELEMENTS
const tabNavElms = document.querySelectorAll(".tab-nav");
const tabSectionElms = document.querySelectorAll(".tab-section");

// ACCORDION ELEMENTS
const accordionAnswerElms = document.querySelectorAll(".answer");
const openAccordionElms = document.querySelectorAll(".open-accordion-icon");
const closeAccordionElms = document.querySelectorAll(".close-accordion-icon");
const accordionQuestionTileElms = document.querySelectorAll(".question-tile");

// FORM ELEMENTS
const formElm = document.querySelector(".input-layout");
const emailInputElm = document.querySelector("#email-input");
const emailSubButtonElm = document.querySelector("#email-sub-btn");
const errorMessageElm = document.querySelector(".error");
const errorIconElm = document.querySelector("#error-icon");
const inputBoxLayoutElm = document.querySelector(".input-box-layot");
const inputLayoutElm = document.querySelector(".input-layout");

// FUNCTIONALITY

//NAV MENU FUNCTIONALITY
openMenuIcon.addEventListener("click", function () {
  hamburgerMenuElm.classList.add("displayFlex");
});

closeMenuIcon.addEventListener("click", function () {
  hamburgerMenuElm.classList.remove("displayFlex");
});

// TAB SECTION FUNCTIONALITY
tabNavElms.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabNavElms.forEach((t) => {
      t.classList.remove("active-tab-nav");
    });

    tabSectionElms.forEach((ts) => {
      ts.classList.remove("active-tab-section");
    });

    tab.classList.add("active-tab-nav");
    tabSectionElms[index].classList.add("active-tab-section");
  });
});

// ACCORDION FUNCTIONALITY
accordionQuestionTileElms.forEach((questionTile, index) => {
  questionTile.addEventListener("click", function () {
    accordionAnswerElms[index].classList.toggle("displayBlock");

    closeAccordionElms[index].classList.toggle("displayBlock");

    openAccordionElms[index].classList.toggle("displayNone");
  });
});

//EMAIL VALIDATION FUNCTIONALITY
const handleEmailValidation = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailInput = emailInputElm.value;

  if (!emailRegex.test(emailInput)) {
    errorMessageElm.classList.remove("displayNone");
    errorIconElm.classList.remove("displayNone");
    inputBoxLayoutElm.classList.add("input-box-layot-err");
    inputLayoutElm.classList.add("input-layout-err");
    emailSubButtonElm.setAttribute("disabled");
  } else {
    errorMessageElm.classList.add("displayNone");
    errorIconElm.classList.add("displayNone");
    inputBoxLayoutElm.classList.remove("input-box-layot-err");
    inputLayoutElm.classList.remove("input-layout-err");
    emailSubButtonElm.removeAttribute("disabled");
  }
  // else {
  //   feedbackElement.textContent = "Please enter a valid email address.";
  // }
};
