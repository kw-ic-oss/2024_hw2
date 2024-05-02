let cnt = 0;

let btn = document.querySelector(".btn");
let num = document.querySelector(".number");

btn.addEventListener("click", () => {
  console.log("버튼클릭");
  cnt++;
  num.innerHTML = cnt;
});
