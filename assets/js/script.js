buttonEL = document.getElementsByClassName('saveBtn')
inputEL = document.querySelectorAll('input')


let nine = document.getElementById('9');
let ten = document.getElementById('10');
let eleven = document.getElementById('11');
let twelve = document.getElementById('12');
let thirteen = document.getElementById('13');
let fourteen = document.getElementById('14');
let fifteen = document.getElementById('15');
let sixteen = document.getElementById('16');
let seventeen = document.getElementById('17');
let currentHour = parseInt(moment().format('H'));
let row = document.getElementsByClassName("todoRow");
let toDoList = [];




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
    buttonEL[i].addEventListener("click", function () {
      console.log('test')

      let valueNine = nine.value;
      localStorage.setItem([i], valueNine);
    });
  }
}

function updateContent() {
  nine.innerHTML = localStorage.getItem[0];
  ten.innerHTML = localStorage.getItem("ten");
  eleven.innerHTML = localStorage.getItem("eleven");
  twelve.innerHTML = localStorage.getItem("twelve");
  thirteen.innerHTML = localStorage.getItem("one");
  fourteen.innerHTML = localStorage.getItem("two");
  fifteen.innerHTML = localStorage.getItem("three");
  sixteen.innerHTML = localStorage.getItem("four");
  seventeen.innerHTML = localStorage.getItem("five");
}



/* function updateContent() {
  for (let i = 0; i < localStorage.length; i++) {
    inputEL[i].value = localStorage.getItem[i]
  }
} */