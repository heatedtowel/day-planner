buttonEL = document.getElementsByClassName('saveBtn')
inputEL = document.querySelectorAll('input')

let input9 = document.getElementById('9');
let input10 = document.getElementById('10');
let input11 = document.getElementById('11');
let input12 = document.getElementById('12');
let input13 = document.getElementById('13');
let input14 = document.getElementById('14');
let input15 = document.getElementById('15');
let input16 = document.getElementById('16');
let input17 = document.getElementById('17');
let currentHour = parseInt(moment().format('H'));
let row = document.getElementsByClassName("todoRow");

init();

function init() {
  setInterval(currentTime, 1000);
  addListeners();
  addTodoColor();
  updateContent();
};

function currentTime() {
  $("#currentDay").text(moment().local());
}

function addTodoColor() {
  for (var i = 0; i < row.length; i++) {
    const rowID = parseInt(row[i].id);

    if (rowID == currentHour) {
      row[i].classList.add("present");
    }
    if (rowID < currentHour) {
      row[i].classList.add("past");
    }
    if (rowID > currentHour) {
      row[i].classList.add("future");
    }
  }
}

function addListeners() {
  for (let i = 0; i < buttonEL.length; i++) {
    buttonEL[i].addEventListener("click", function (event) {
      var text = event.path[1].childNodes[3].value
      var time = this.id
      localStorage.setItem(time, text);
    })
  }
}

function updateContent() {
    input9.value = localStorage.getItem('save9')
    input10.value = localStorage.getItem('save10')
    input11.value = localStorage.getItem('save11')
    input12.value = localStorage.getItem('save12')
    input13.value = localStorage.getItem('save13')
    input14.value = localStorage.getItem('save14')
    input15.value = localStorage.getItem('save15')
    input16.value = localStorage.getItem('save16')
    input17.value = localStorage.getItem('save17')
  }
