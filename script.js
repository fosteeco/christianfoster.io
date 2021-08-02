const headerH1 = document.querySelector("header h1.name");
const afterH1 = document.querySelector("header h1::after");
const termDollar =
  '<span class="terminal-green"><i class="fas fa-dollar-sign"></i><i class="fas fa-angle-right"></i></span>';
headerH1.innerHTML += termDollar;
const name = "Christian Foster";
for (let i = 0; i < name.length; i++) {
  setDelay(i, name);
}

function setDelay(i, name) {
  setTimeout(function () {
    let htmlSpan = "<span>" + name[i] + "</span>";
    headerH1.innerHTML += htmlSpan;
  }, i * 100);
}
