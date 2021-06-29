var headerH1 = document.querySelector('header h1.name');
var afterH1 = document.querySelector('header h1::after');
console.log(afterH1); 
console.log(headerH1);
const name = "Christian Foster"
for(let i =0; i < name.length; i++){
    setDelay(i,name)
}

function setDelay(i,name) {
    setTimeout(function() {  
        let htmlSpan = "<span>" + name[i] + "</span>";
        headerH1.innerHTML += htmlSpan;
    },i*100)
}
