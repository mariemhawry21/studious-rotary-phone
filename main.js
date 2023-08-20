let notf = document.querySelectorAll(".notf");
let sp = document.querySelector(".head span");
let btnread = document.querySelector(".btn");
let len = notf.length;

sp.innerHTML = len;

notf.forEach((i) => i.classList.add("unread"));

btnread.onclick = function () {
  console.log("ty0");
  notf.forEach((i) => {
    i.classList.remove("unread");
    i.classList.add("read");
  });
  sp.innerHTML = 0;
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("unread")) {
    e.target.classList.remove("unread");
    e.target.classList.add("read");
  }
  let count = document.querySelectorAll(".unread");
  sp.innerHTML = count.length;
});
