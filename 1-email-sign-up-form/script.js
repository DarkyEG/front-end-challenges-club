/**
 * @type {HTMLInputElement}
 */
const email = document.getElementById("email");
const notfi = document.querySelector(".notfi");
const regexVali = /^\S+@\S+\.\S+$/;
const form = document.querySelector("form");
console.log(form);
const notfi_types = [
  [
    "error",
    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11.148 4.374a.973.973 0 01.334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133a.994.994 0 01-.155 1.192.99.99 0 01-.693.301H3.533a.997.997 0 01-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 002.572-4.507L14.568 3.346a2.995 2.995 0 00-4.123-1.014c-.429.26-.775.615-1.012 1.014zM11 9v4a1 1 0 002 0V9a1 1 0 00-2 0zm2 8a1 1 0 10-2 0 1 1 0 002 0z"/>
</svg>
    <div>
    <div class="title">Please use a valid email.</div>
    <div class="disc">Like: person@inbox.com.</div>
    </div>
    `,
  ],
  [
    "success",
    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.293 5.293L9 15.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l11-11a.999.999 0 10-1.414-1.414z"/>
</svg>
    <div>
    <div class="title">Yay! Thank you!</div>
    <div class="disc">We've sent a confirmation link to your inbox.</div>
    </div>`,
  ],
];

form.onsubmit = (ev) => {
  ev.preventDefault();
  const toggle = +regexVali.test(email.value);
  if (toggle) form.parentElement.removeChild(form);
  notfi.classList.remove(notfi_types[+!toggle][0]);
  notfi.classList.add(notfi_types[toggle][0]);
  notfi.innerHTML = notfi_types[toggle][1];
};
