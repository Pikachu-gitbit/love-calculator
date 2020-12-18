function kk() {
    const hh = Lets_Fool_People(30, 100);
    document.getElementById("circle").style.display = "block";
    document.getElementById("circlem").style.strokeDasharray = (hh + ", 100");
    document.getElementById("circlem").style.animation = "progress 2s ease-out forwards"
    document.getElementById('percentage').innerHTML = hh + "%";
    document.getElementById("jjj").disabled = true;
    // if hh < 40 :"better lucknext time ";
    // elif hh > 40 and hh < 60 : "need improvement"
    // elif hh < 60 and hh > 90 : "nice choice"
    // elif hh > 89 : " one of the  best couples "
    // else : "excelent"

}
var form = document.getElementById("sheetdb-form");
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById('sheetdb-form')),
    }).then(
        response => response.json()
    )
    kk();
}
)

function Lets_Fool_People(min, max) {
    return Numllber = Math.floor(Math.random() * (max - min + 1)) + min
}
function mm() {
    
    document.getElementById("jjj").disabled = false;
    document.getElementById("circle").style.display = "none";

}


function jj() {

}
console.log(Percentage);