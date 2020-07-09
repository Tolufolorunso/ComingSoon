"use strict";
const day = document.querySelector("#days");
const hrs = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const getYear = document.querySelector("#get-year");

getYear.textContent = new Date().getUTCFullYear();

const timeOut = setInterval(() => {
  const countdownDate = new Date("oct 12 2020 12:00:00").getTime();
  const now = new Date().getTime();
  const diff = countdownDate - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff < 0) {
    clearInterval(timeOut);
    console.log("time out");
  }

  secs = secs < 10 ? "0" + secs : secs;
  mins = mins < 10 ? "0" + mins : mins;
  hours = hours < 10 ? "0" + hours : hours;
  days = days < 10 ? "0" + days : days;
  days = days < 100 ? "0" + days : days;

  day.innerHTML = `${days} <span>DAYS</span>`;
  hrs.innerHTML = `${hours} <span>HRS</span>`;
  min.innerHTML = `${mins} <span>MIN</span>`;
  sec.innerHTML = `${secs} <span>SEC</span>`;
}, 1000);

const goUp = document.querySelector("#go-up");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 600) {
    goUp.style.opacity = "1";
  }
  if (window.pageYOffset < 600) {
    goUp.style.opacity = "0";
  }
});

// site navigation
const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const i = document.querySelector("#menu i");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("open");
  menu.classList.toggle("close");
});

//
