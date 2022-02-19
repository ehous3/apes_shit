let decreaseBtn = document.getElementById("button__decrease");
let increaseBtn = document.getElementById("button__increase");
let counter = document.getElementById("counter");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  count--;
  if (count < 0){
    counter.innerHTML = 0;
    count = 0;
  }
  else {
    counter.innerHTML = count;
  }
});

increaseBtn.addEventListener("click", () => {
  count++;
  if (count > 10){
    counter.innerHTML = 10;
    count = 10;
  }
  else {
    counter.innerHTML = count;
  }
});
