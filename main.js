const clock = document.querySelector(".clock");
const tick = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (s < 10) {
    s = "0" + s;
  } else if (m < 10) {
    m = "0" + m;
  } else if (h < 10) {
    h = "0" + h;
  }

  const html = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span class="secondss">${s}</span>
  `;

  clock.innerHTML = html;
};
setInterval(tick, 1000);
