const portfolio_1_img = document.querySelector(".portfolio-1-img");
const portfolio_2_img = document.querySelector(".portfolio-2-img");
const portfolio_3_img = document.querySelector(".portfolio-3-img");
const portfolio_4_img = document.querySelector(".portfolio-4-img");
const resetButton1 = document.getElementById("reset1");
const resetButton2 = document.getElementById("reset2");
const resetButton3 = document.getElementById("reset3");
const resetButton4 = document.getElementById("reset4");

/* ----- PORTFOLIO 1 ----- */
/* done with the help of Ida Segolsson + Evelines youtube video - begin */
portfolio_1_img.addEventListener("click", function (event) {
  portfolio_1_img.style.width = "50%";
});

resetButton1.addEventListener("click", function () {
  portfolio_1_img.style.width = "20%";
});
/* done with the help of Ida Segolsson + Evelines youtube video - end */

/* ----- PORTFOLIO 2 ----- */
portfolio_2_img.addEventListener("click", function (event) {
  portfolio_2_img.style.width = "50%";
});

resetButton2.addEventListener("click", function () {
  portfolio_2_img.style.width = "20%";
});

/* ----- PORTFOLIO 3 ----- */
portfolio_3_img.addEventListener("click", function (event) {
  portfolio_3_img.style.width = "50%";
});

resetButton3.addEventListener("click", function () {
  portfolio_3_img.style.width = "20%";
});

/* ----- PORTFOLIO 4 ----- */
portfolio_4_img.addEventListener("click", function (event) {
  portfolio_4_img.style.width = "50%";
});

resetButton4.addEventListener("click", function () {
  portfolio_4_img.style.width = "20%";
});
